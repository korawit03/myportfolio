# ============================================
# PORTFOLIO BACKEND — Dockerfile
# ============================================

# 1. ใช้ Node.js 20 เป็นฐาน
FROM node:20-alpine

# 2. ตั้งโฟลด์ทำงานใน container
WORKDIR /app

# 3. Copy ไฟล์ dependency (package.json + lock)
#    ทำก่อน copy โค้ด → ถ้าโค้ดเปลี่ยน → Docker ใช้ cache (ไม่ต้อง install ใหม่)
COPY package*.json ./

# 4. ติดตั้ง dependencies
RUN npm ci

# 5. Copy โค้ดทั้งหมด
COPY . .

# 6. บอก Docker ว่า container รับ request ที่ port 5000
EXPOSE 5000

# 7. คำสั่งรันเมื่อ container start
CMD ["npm", "start"]