export const config = {
  // Database
  database: {
    url: process.env.DATABASE_URL || "mongodb://localhost:27017/fine-wyne",
  },

  // Redis
  redis: {
    url: process.env.REDIS_URL || "redis://localhost:6379",
  },

  // JWT
  jwt: {
    secret: process.env.JWT_SECRET || "your-secret-key",
    expiresIn: "7d",
  },

  // Ports
  ports: {
    api: parseInt(process.env.API_PORT || "4000"),
    web: parseInt(process.env.WEB_PORT || "3000"),
    admin: parseInt(process.env.ADMIN_PORT || "3001"),
  },

  // URLs
  urls: {
    frontend: process.env.FRONTEND_URL || "http://localhost:3000",
    admin: process.env.ADMIN_URL || "http://localhost:3001",
    api: process.env.API_URL || "http://localhost:4000",
    nextauth: process.env.NEXTAUTH_URL || "http://localhost:3000",
  },

  // NextAuth
  nextauth: {
    secret: process.env.NEXTAUTH_SECRET || "your-nextauth-secret",
    url: process.env.NEXTAUTH_URL || "http://localhost:3000",
  },

  // File Upload (DigitalOcean Spaces)
  spaces: {
    accessKey: process.env.DO_SPACES_ACCESS_KEY || "",
    secretKey: process.env.DO_SPACES_SECRET_KEY || "",
    bucket: process.env.DO_SPACES_BUCKET || "",
    region: process.env.DO_SPACES_REGION || "",
    endpoint: process.env.DO_SPACES_ENDPOINT || "",
  },

  // Email
  email: {
    server: {
      host: process.env.EMAIL_SERVER_HOST || "",
      port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
      user: process.env.EMAIL_SERVER_USER || "",
      password: process.env.EMAIL_SERVER_PASSWORD || "",
    },
    from: process.env.EMAIL_FROM || "",
  },

  // Push Notifications
  vapid: {
    publicKey: process.env.VAPID_PUBLIC_KEY || "",
    privateKey: process.env.VAPID_PRIVATE_KEY || "",
  },

  // Environment
  env: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV !== "production",
};

export default config;
