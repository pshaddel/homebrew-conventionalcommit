const prompts = require("prompts");
prompts.override(require("yargs").argv);

(async () => {
  const response = await prompts([
    {
      type: "text",
      name: "twitter",
      message: `What's your twitter handle?`,
    },
    {
      type: "select",
      name: "color",
      message: "Pick colors",
      choices: [
        {
          title: "Red",
          description: "This option has a description",
          value: "#ff0000",
        },
        { title: "Green", value: "#00ff00" },
        { title: "Blue", value: "#0000ff" },
      ],
      initial: 1,
    },
  ]);

  console.log(response);
})();
