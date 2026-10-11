// ============================================
// PORTFOLIO BACKEND — Entry Point
// ============================================

import express from  "express";

const app = express();

const port = process.env.port || 5000;

app.use(express.json());

app.get('/api/health', (req, res) => {
         res.json({ status: 'ok', message: 'Portfolio API is running'   });    
});

app.listen(port, () => {
         console.log('server running at http://lovalhost: ${port}');
});