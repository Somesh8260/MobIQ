# MobIQ 📱⚡

> **Next-Gen Smartphone Recommendation, Deep Spec Comparison & Multi-Store Price Intelligence Hub**  
> Built with the **MERN Stack** (MongoDB, Express.js, React 18, Node.js) with Tailwind CSS, Chart.js, and Lucide icons.

---

## 🌟 Key Features

1. **🤖 AI Recommendation Wizard ("Find My Phone")**
   - 4-step interactive questionnaire with budget slider, priorities (Gaming, Camera, Battery, Clean OS, Value), brand preferences, and must-have hardware features.
   - Computes tailored match percentage, "Why this phone fits you" bullets, and celebratory confetti effects.

2. **⚔️ Side-by-Side Comparison Arena (Up to 4 Phones)**
   - Automatic category champions (Speed King, Best Camera, Battery King, Brightest Display, Value Champion, Overall Winner).
   - Visual comparison bars for AnTuTu v10 benchmarks, Geekbench 6 scores, camera sensor matrices, peak nits, charging speeds, and live retailer prices.

3. **📉 Multi-Store Live Price Tracker & "Best Time to Buy" Predictor**
   - Compare pricing across **Amazon**, **Flipkart**, **Croma**, **Reliance Digital**, and **Official Store**.
   - Interactive historical price chart showing Launch MRP, Festival Sales (Flipkart Big Billion Days & Amazon Great Indian Festival), all-time low, all-time high, and average price.
   - "Best Time to Buy" AI verdict badge (**BUY NOW - All-Time Low**, **Good Deal**, **Wait for Sale**).
   - Price drop alert modal with simulated instant notification registration.

4. **📱 Explore Catalog & Filter Engine**
   - Multi-facet filters (budget slider, brand checkboxes, category pills, AnTuTu benchmark slider, 5G, OIS, Fast charging).
   - Detailed specifications modal with pros & cons, full camera breakdowns, and live buy links.
   - Floating bottom Compare Tray for quick multi-phone comparison.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS v4, Chart.js, `react-chartjs-2`, `lucide-react`, `canvas-confetti`
- **Backend**: Node.js, Express.js, MongoDB / Mongoose (with hybrid in-memory fallback)
- **APIs**:
  - `GET /api/phones` - Filtered smartphone catalog
  - `GET /api/phones/:id` - Full phone details & price history
  - `GET /api/compare?ids=id1,id2,id3` - Side-by-side comparison & category winners
  - `POST /api/recommend` - AI recommendation engine
  - `GET /api/price-tracker` - Trending price drops and multi-store analytics
  - `POST /api/price-alert` - Register price drop alert

---

## 🚀 Running the Project Locally

### 1. Install Dependencies
```bash
npm install
npm --prefix server install
npm --prefix client install
```

### 2. Run Both Backend & Frontend Concurrently
```bash
npm run dev
```

- **Frontend Application**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`
