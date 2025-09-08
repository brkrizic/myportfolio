
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
  platform?: Platform;
};

type Platform =
  | "Web"
  | "Desktop"
  | "Cross-platform Desktop"
  | "iOS"
  | "Android"
  | "Mobile"
  | "Cross-platform Mobile"
  | "API"
  | "Server"
  | "Full-stack"
  | "Embedded / IoT"
  | "Game";
