// frontend/src/server/src/config/database.js

import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "Conference-Management-System",
    password: process.env.DB_PASSWORD || "1234567890",   // sửa lại phù hợp bạn
    port: process.env.DB_PORT || 5432,
});

// Logs (optional)
pool.on("connect", () => {
    console.log("🔗 PostgreSQL connected successfully.");
});

pool.on("error", (err) => {
    console.error("🚨 Database error:", err);
});

export default pool;   // ⬅️ Quan trọng: Export default
