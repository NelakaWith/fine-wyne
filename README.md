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
   Create `.env.local` in the root directory with all configuration:

```env
# Database
DATABASE_URL="mongodb://localhost:27017/fine-wyne"

# Redis
REDIS_URL="redis://localhost:6379"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Ports
API_PORT="4000"
WEB_PORT="3000"
ADMIN_PORT="3001"

# URLs
NEXTAUTH_URL="http://localhost:3000"
FRONTEND_URL="http://localhost:3000"
ADMIN_URL="http://localhost:3001"
API_URL="http://localhost:4000"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret-key-change-this-in-production"

# File Upload (DigitalOcean Spaces)
DO_SPACES_ACCESS_KEY=""
DO_SPACES_SECRET_KEY=""
DO_SPACES_BUCKET=""
DO_SPACES_REGION=""
DO_SPACES_ENDPOINT=""

# Email (for password reset, etc.)
EMAIL_SERVER_HOST=""
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER=""
EMAIL_SERVER_PASSWORD=""
EMAIL_FROM=""

# Push Notifications
VAPID_PUBLIC_KEY=""
VAPID_PRIVATE_KEY=""

# Environment
NODE_ENV="development"
```

**Note**: All apps read from the centralized config package (`@fine-wyne/config`), so the root `.env.local` provides variables for the entire monorepo.

4. Set up the database:

```bash
pnpm --filter @fine-wyne/db db:push
```

## 🚀 Running the Application

### Development

#### Using the Run Script (Recommended)

Use the PowerShell script for flexible app launching (opens each app in a separate terminal window):

```powershell
# Run all apps (opens 3 separate windows)
.\run.ps1 -Mode all

# Run individual apps (opens 1 window)
.\run.ps1 -Mode web      # Web app only (port 3000)
.\run.ps1 -Mode api      # API server only (port 4000)
.\run.ps1 -Mode admin    # Admin dashboard only (port 3001)

# Run combinations (opens multiple windows)
.\run.ps1 -Mode frontend # Web + Admin (opens 2 windows: 3000 + 3001)
.\run.ps1 -Mode backend  # API only (opens 1 window: 4000)
.\run.ps1 -Mode web-api  # Web + API (opens 2 windows: 3000 + 4000)
.\run.ps1 -Mode admin-api # Admin + API (opens 2 windows: 3001 + 4000)
```

#### Using Turbo (All apps)

```bash
pnpm dev
```

#### Manual Commands

```bash
# Web app (port 3000)
pnpm --filter ./apps/web dev

# API server (port 4000)
pnpm --filter ./apps/api dev

# Admin dashboard (port 3001)
pnpm --filter ./apps/admin dev
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
