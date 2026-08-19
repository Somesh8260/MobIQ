const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connUri = process.env.MONGODB_URI || process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mobiq';
    // Set timeout so if mongo is not reachable, gracefully use in-memory store
    const conn = await mongoose.connect(connUri, {
      serverSelectionTimeoutMS: 3000
    });
    console.log(`[MobIQ] MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[MobIQ] MongoDB connection failed (${error.message}). Running with high-speed in-memory seeded store.`);
    return false;
  }
};

module.exports = connectDB;
