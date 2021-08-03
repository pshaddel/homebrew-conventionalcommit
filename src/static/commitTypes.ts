export const commitTypes: {
  title: string;
  value: string;
  description: string;
}[] = [
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
];
