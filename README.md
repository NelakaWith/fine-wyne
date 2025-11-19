# 🍷Fine-Wyne

A real-time chat application built with modern web technologies. Features 1-to-1 and group chats, file uploads, online status tracking, and an admin dashboard.

## 🚀 Tech Stack

### Frontend

- **Next.js 15** (App Router + Server Actions)
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (state management)
- **shadcn/ui** (UI components)
- **Socket.IO client** (real-time messaging)

### Backend

- **Node.js + Express**
- **Socket.IO server** (real-time)
- **MongoDB** (database)
- **Redis** (caching + presence tracking)

### Infrastructure

- **Docker + Docker Compose**
- **Nginx** (reverse proxy)
- **pnpm** (package manager)
- **Turbo** (monorepo build system)

## ✨ Features

- Real-time messaging (1-to-1 and group chats)
- Typing indicators and online/offline status
- File uploads (images, documents)
- Message seen/delivered status
- User authentication
- Admin dashboard for moderation
- Responsive design
- Web push notifications

## 📋 Prerequisites

- Node.js 18+
- pnpm
- MongoDB (local or Atlas)
- Redis (local or cloud)
- Docker & Docker Compose (for deployment)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/NelakaWith/fine-wyne.git
cd fine-wyne
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:
   Create `.env.local` in the root directory:

```env
DATABASE_URL="mongodb://localhost:27017/fine-wyne"
REDIS_URL="redis://localhost:6379"
JWT_SECRET="your-secret-key"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

4. Set up the database:

```bash
pnpm --filter @fine-wyne/db db:push
```

## 🚀 Running the Application

### Development

Run all services:

```bash
pnpm dev
```

Or run individual services:

```bash
# Web app (port 3000)
pnpm --filter @fine-wyne/web dev

# API server (port 4000)
pnpm --filter @fine-wyne/api dev

# Admin dashboard (port 3001)
pnpm --filter @fine-wyne/admin dev
```

### Production Build

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
fine-wyne/
├── apps/
│   ├── web/          # Main chat application (Next.js)
│   ├── api/          # API server (Express + Socket.IO)
│   └── admin/        # Admin dashboard (Next.js)
├── packages/
│   ├── db/           # Database models and Prisma client
│   ├── types/        # Shared TypeScript types
│   ├── utils/        # Utility functions
│   └── config/       # Configuration
├── infrastructure/   # Docker and deployment configs
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

## 🔧 Available Scripts

- `pnpm dev` - Start all services in development mode
- `pnpm build` - Build all services for production
- `pnpm lint` - Run linting across all packages
- `pnpm --filter @fine-wyne/db db:push` - Push database schema
- `pnpm --filter @fine-wyne/db db:generate` - Generate Prisma client

## 🚢 Deployment

The application is designed for self-hosting on DigitalOcean Droplets:

1. Use Docker Compose for containerized deployment
2. Nginx as reverse proxy
3. Let's Encrypt for SSL certificates
4. MongoDB and Redis in containers

See `infrastructure/` directory for Docker configurations.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

ISC License - see LICENSE file for details.

## 📞 Support

For questions or issues, please open a GitHub issue or contact the maintainers.
