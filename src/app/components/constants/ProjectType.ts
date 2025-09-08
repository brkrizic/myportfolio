export type ProjectType = {
  title: string;
  tech: string[];
  description: string;
  link: string;
  privacyPolicyPath?: string;
  downloadLink?: string;
  icon?: string;
  status?: "Completed" | "In Progress" | "Early Access"; // optional
  redditLink?: string;
};
