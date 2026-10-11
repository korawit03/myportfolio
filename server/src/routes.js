// ============================================
// PORTFOLIO API ROUTES
// ============================================

import { Router} from "express";
import data from "./data.js";

const router = Router();

// ---------- GET /api/health ----------
// ใช้ทดสอบว่า server รันอยู่
router.get("health", (req, res) => {
         res.json({ status: "ok", message: "Portfolio API is running" });
});

// ---------- GET /api/about ----------
// ส่งข้อมูลส่วนตัว
router.get("/about",(req,res) => {
         res.json(data.about);
});

// ---------- GET /api/skills ----------
// ส่งข้อมูลทักษะ
router.get("/skills",(req,res) => {
         res.json(data.skills);
});

// ---------- GET /api/projects ----------
// ส่งข้อมูลโปรเจกต์
router.get("/projects",(req,res) => {
         res.json(data.projects);
});

// ---------- GET /api/project/:id ----------
// ส่งข้อมูลโปรเจกต์ตาม id
router.get("/project/:id",(req,res) => {
         const project = data.projects.find((p) => p.id === Number(req.params.id));
         if(!project){
                  return res.status(404).json({ error:" Project not found " });
         }
         res.json(project);
});

// ---------- GET /api/experience ----------
// ส่งข้อมูลประสบการณ์การฝึกงาน
router.get("/experience",(req,res) => {
         res.json(data.experience);
});

export default router;