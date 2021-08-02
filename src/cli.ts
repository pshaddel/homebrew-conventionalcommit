import { commitGenerator } from "./commitGenerator";
import { gitmojis } from "./gotmoji";

const prompts = require("prompts");
prompts.override(require("yargs").argv);

(async () => {
  const response: Commit = await prompts([
    {
      type: "autocomplete",
      name: "type",
      message: "Select type of change that you are committing",
      choices: [
        {
          title: "feat    ",
          value: "feat",
          description: "✨ Features         => A new feature",
        },
        {
          title: "fix     ",
          value: "fix",
          description: "🐛 Bug Fixes        => A bug Fix",
        },
        {
          title: "docs    ",
          value: "docs",
          description: "📚 Documentation    => Documentation only changes",
        },
        {
          title: "style   ",
          value: "style",
          description:
            "💎 Styles           => Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
        },
        {
          title: "refactor",
          value: "refactor",
          description:
            "📦 Code Refactoring => A code change that neither fixes a bug nor adds a feature",
        },
        {
          title: "test    ",
          value: "test",
          description:
            "🚨 Tests            => Adding missing tests or correcting existing tests",
        },
        {
          title: "build   ",
          value: "build",
          description:
            "🛠 Builds            => Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
        },
        {
          title: "chore   ",
          value: "chore",
          description:
            "♻️ Chores            => Other changes that don't modify src or test files",
        },
        {
          title: "revert  ",
          value: "revert",
          description: "🗑 Reverts           => Reverts a previous commit",
        },
        {
          title: "perf    ",
          value: "perf",
          description:
            "🚀 Performance Improvements => A code change that improves performance",
        },
        {
          title: "ci      ",
          value: "ci",
          description:
            "⚙️ Continuous Integrations => Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
        },
      ],
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

// gitmoji,
// showEditor,
// emojiFormat,
// lineBreak,
// promptScopes,
// promptBody,
// promptFooter
