# ============================================
# PORTFOLIO FRONTEND — Dockerfile (Multi-stage)
# ============================================

# ---------- Stage 1: BUILD ----------
# ใช้ Node.js + Vite เพื่อ compile React → ได้ไฟล์ใน dist/
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# รัน Vite build → สร้างไฟล์ static ใน /app/dist/
RUN npm run build

# ---------- Stage 2: SERVE ----------
# ใช้ Nginx (web server) ส่งไฟล์ static → เบา เร็ว ปลอดภัย
FROM nginx:alpine

# Copy ไฟล์ที่ build มาจาก stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Copy config Nginx (สำหรับ proxy /api → backend)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx รับ request ที่ port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]