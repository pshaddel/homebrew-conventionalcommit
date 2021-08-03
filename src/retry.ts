import prompts from "prompts";

export const retry = () =>
  prompts([
    {
      type: "select",
      name: "retryResult",
      message: "\nShould we retry this command again?",
      choices: [
        {
          title: "Yes",
          value: true,
        },
        { title: "No", value: false },
      ],
      initial: 1,
    },
  ]);
