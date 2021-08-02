export const commitGenerator = (commit: Commit) => {
  const header =
    commit.type +
    commit.breaking +
    (commit.scope ? "(" + commit.scope + "): " : ": ") +
    commit.gitmoji +
    " ";
  const description = commit.description + "\n\n";
  const body = (commit.body || "") + "\n\n";
  const footer = commit.footer || "";
  return header + description + body + footer;
};
