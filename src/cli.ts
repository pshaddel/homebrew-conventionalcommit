import { commitGenerator } from "./commitGenerator";
import { commitTypes } from "./static/commitTypes";
import { gitmojis } from "./static/gotmoji";
import prompts from "prompts";
import { exec } from "child_process";
import { retry } from "./retry";

const getData = async () => {
  const response: Commit = await prompts(
    [
      {
        type: "autocomplete",
        name: "type",
        message: "Select type of change that you are committing",
        choices: commitTypes,
        initial: 0,
      },
      {
        type: "select",
        name: "breaking",
        message: "Does it contain a breaking change?",
        choices: [
          {
            title: "Yes",
            value: "!",
          },
          { title: "No", value: "" },
        ],
        initial: 1,
      },
      {
        type: "text",
        name: "scope",
        message: "Write down scope of this change(optional)",
      },
      {
        type: "autocomplete",
        name: "gitmoji",
        message: "Choose a gitmoji",
        choices: gitmojis.map((gitmoj) => {
          return {
            title: gitmoj.name + gitmoj.emoji,
            value: gitmoj.code,
            description: gitmoj.description,
          };
        }),
        initial: 1,
      },
      {
        type: "text",
        name: "description",
        message: "Write a short description of the change:",
      },
      {
        type: "text",
        name: "body",

        message: "Provide a longer description about the change:",
      },
      {
        type: "text",
        name: "footer",
        message: "List any breaking changes or issues closed by this change:",
      },
    ],
    {
      onCancel: () => {
        process.exit(0);
      },
    }
  );

  const commitMessage = commitGenerator(response);
  const commitCommand = `git commit -m "${commitMessage}"`;
  const executor: Function = () => {
    exec(commitCommand, async (err, stdout, stderr) => {
      if (err) {
        process.stdout.write(stdout);
        process.stdout.write(
          "Your command was:\n" + "\x1b[31m" + commitCommand
        );
        const { retryResult } = await retry();
        if (retryResult) executor();
        else process.exit(err.code);
      } else {
        process.stdout.write(stdout);
        process.exit(0);
      }
    });
  };
  executor();
};

getData();
