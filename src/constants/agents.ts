export interface Agent {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  docsUrl: string;
  tags: string[];
  image: string;
}

export const agents: Agent[] = [];