// server/src/config/swagger.js

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname khi dùng ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CMS Backend API - Submission Module",
      version: "1.0.0",
      description: "API dành cho Ban Thư ký quản lý quyết định review & final decision",
    },
  },

  // 👇 load tất cả YAML trong thư mục docs
  apis: [
    path.join(__dirname, "../docs/*.yaml"), 
    path.join(__dirname, "../routes/v1/*.js"), // optional
  ],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export const swaggerDocs = (app, port) => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

  console.log(`📘 Swagger UI available at: http://localhost:${port}/api-docs`);
};

export default swaggerSpec;
