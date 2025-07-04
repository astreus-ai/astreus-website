export interface Plugin {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  docsUrl: string;
  tags: string[];
  image: string;
}

export const plugins: Plugin[] = [
  {
    id: "x-plugin",
    title: "X Plugin",
    description: "An X (formerly Twitter) integration plugin for the Astreus AI agent framework, allowing agents to interact with X.",
    githubUrl: "https://github.com/astreus-ai/astreus-x-plugin",
    docsUrl: "/docs/plugins/x-plugin",
    tags: ["social", "twitter", "x"],
    image: "/docs/x-plugin.webp"
  },
  {
    id: "resend-plugin",
    title: "Resend Plugin",
    description: "An email integration plugin for the Astreus AI agent framework, allowing agents to send emails using Resend.",
    githubUrl: "https://github.com/astreus-ai/astreus-resend-plugin",
    docsUrl: "/docs/plugins/resend-plugin",
    tags: ["email", "resend", "communication"],
    image: "/docs/resend-plugin.webp"
  },
  {
    id: "whatsapp-plugin",
    title: "WhatsApp Plugin",
    description: "A WhatsApp integration plugin for the Astreus AI agent framework, allowing agents to interact with WhatsApp messaging using the official WhatsApp Cloud API.",
    githubUrl: "https://github.com/astreus-ai/astreus-whatsapp-plugin",
    docsUrl: "/docs/plugins/whatsapp-plugin",
    tags: ["whatsapp", "messaging", "communication"],
    image: "/docs/whatsapp-plugin.webp"
  }
]; 