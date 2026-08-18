const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mobiq';
    // Set low timeout so if local mongo isn't active, we fail fast & use in-memory store smoothly
    const conn = await mongoose.connect(connUri, {
      serverSelectionTimeoutMS: 2000
    });
    console.log(`[MobIQ] MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[MobIQ] MongoDB connection failed (${error.message}). Running with high-speed in-memory seeded store.`);
    return false;
  }
};

module.exports = connectDB;
