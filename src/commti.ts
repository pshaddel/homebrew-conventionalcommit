type Commit = {
  type: string;
  breaking?: "" | "!";
  scope?: string;
  gitmoji: string;
  description: string;
  body?: string;
  footer?: string;
};
