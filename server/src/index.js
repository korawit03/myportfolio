// ============================================
// PORTFOLIO BACKEND — Entry Point
// ============================================

import express from "express";
import routes from "./routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// 1. เปิดรับ JSON body
app.use(express.json());

// 2. เชื่อม routes ทั้งหมดกับ prefix "/api"
//    → GET /api/health, /api/about, /api/projects
app.use("/api", routes);

// 3. เปิด server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});