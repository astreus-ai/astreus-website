<p align="center">
    <img src="public/astreus-gadget.webp" alt="Astreus Logo" width="240">
</p>

This is the official landing page for the Astreus AI Agent Framework.

## ℹ️ About Astreus

Astreus is an AI Agent Framework designed to help you easily build, deploy, and manage intelligent conversational agents powered by large language models (LLMs).

## 🚀 Framework Capabilities

- **Advanced Plugin Architecture**: Extend your agents with a growing ecosystem of plugins for various tools, services, and data sources
- **Multi-Modal Support**: Build agents that can process and respond to text, images, audio, and other data formats
- **Vector Database Integration**: Easily incorporate semantic search and knowledge retrieval with built-in vector DB support
- **Robust State Management**: Maintain conversation context and agent state across user interactions
- **Fine-Tuning Capabilities**: Customize LLM performance for your specific use cases and domains
- **Real-time Analytics**: Monitor agent performance, usage metrics, and user interactions
- **Enterprise-grade Security**: Role-based access control, data encryption, and compliance features
- **Scalable Infrastructure**: Built to handle high-volume traffic with containerized deployment options
- **Comprehensive Documentation**: Extensive guides, tutorials, and API references

## 📱 Development

This project uses Next.js with TypeScript and Tailwind CSS with modern ES module syntax, and Prisma for database access.

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- PostgreSQL database (for plugin library and user data)

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/astreus-ai/astreus-landing.git
cd astreus-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up your environment variables:
```bash
# Create a .env.local file with your database connection string
DATABASE_URL="postgresql://username:password@localhost:5432/astreus"
```

4. Set up the database:
```bash
# Generate Prisma client
npm run prisma:generate

# Create and apply migrations
npm run prisma:migrate

# Seed the database with initial data
npm run prisma:seed
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

## 📖 Project Structure

```
├── public/                # Static assets
├── prisma/                # Prisma schema and migrations
│   ├── schema.prisma      # Database schema definition
│   └── seed.ts            # Database seed script
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── api/           # API routes for data fetching
│   │   └── plugins/       # Plugin library page
│   ├── components/        # React components
│   │   ├── About.tsx      # About section
│   │   ├── Features.tsx   # Features section
│   │   ├── Footer.tsx     # Footer component
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Marquee.tsx    # Animated marquee component with refined animations
│   │   ├── Navigation.tsx # Site navigation
│   │   └── plugins/       # Plugin library components
│   ├── styles/            # CSS and styling with updated animations
│   ├── lib/               # Utility functions and client libraries
│   │   └── prisma.ts      # Prisma client
│   └── hooks/             # Custom React hooks
├── package.json           # Project dependencies with updated React and Next.js versions
└── tsconfig.json          # TypeScript configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Astreus Team - [https://astreus.org](https://astreus.org)

Project Link: [https://github.com/astreus-ai/astreus](https://github.com/astreus-ai/astreus)

## 🔍 Learn More

To learn more about Astreus, check out the [Astreus repository](https://github.com/astreus-ai/astreus). 
