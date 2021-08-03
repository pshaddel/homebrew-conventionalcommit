import { commitGenerator } from "./commitGenerator";
import { commitTypes } from "./static/commitTypes";
import { gitmojis } from "./static/gotmoji";
import prompts from "prompts";

(async () => {
  const response: Commit = await prompts([
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
          title: gitmoj.emoji + gitmoj.name,
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
  ]);

  console.log(commitGenerator(response));
})();
