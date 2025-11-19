export const config = {
  database: {
    url: process.env.DATABASE_URL || "mongodb://localhost:27017/fine-wyne",
  },
  redis: {
    url: process.env.REDIS_URL || "redis://localhost:6379",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "your-secret-key",
    expiresIn: "7d",
  },
  ports: {
    api: process.env.API_PORT || 4000,
    web: process.env.WEB_PORT || 3000,
    admin: process.env.ADMIN_PORT || 3001,
  },
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
};

export default config;
