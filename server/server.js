const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const phoneRoutes = require('./routes/phoneRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database (with automatic fallback to in-memory seed)
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', phoneRoutes);

// Root & Health check endpoints
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    app: 'MobIQ API Hub',
    message: 'Backend server is running smoothly on Render',
    endpoints: {
      phones: '/api/phones',
      recommend: '/api/recommend',
      compare: '/api/compare?ids=id1,id2',
      priceTracker: '/api/price-tracker',
      health: '/api/health'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'MobIQ API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 [MobIQ Server] Running on http://localhost:${PORT}`);
});
