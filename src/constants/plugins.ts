export interface Plugin {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  docsUrl: string;
  tags: string[];
}

export const plugins: Plugin[] = [
  {
    id: "x-plugin",
    title: "X Plugin",
    description: "An X (formerly Twitter) integration plugin for the Astreus AI agent framework, allowing agents to interact with X.",
    githubUrl: "https://github.com/astreus-ai/astreus-x-plugin",
    docsUrl: "https://docs.astreus.org/plugins/x-plugin",
    tags: ["social", "twitter", "x"]
  },
]; 