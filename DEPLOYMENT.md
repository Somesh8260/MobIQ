# MobIQ 🚀 Production Deployment Guide

This guide covers how to push **MobIQ** to GitHub and deploy both the **Backend (Render)** and **Frontend (Vercel)** with zero configuration hassles.

---

## 1. 🐙 Push Code to GitHub

### Step 1: Create a new repository on [GitHub](https://github.com/new)
- Repository name: `MobIQ` (or any name you prefer)
- Keep it **Public** or **Private** (do not check "Add README" or ".gitignore" since we already created them).

### Step 2: Push local code to your GitHub repo
Open your terminal in `e:\MobIQ` and run:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/MobIQ.git
git push -u origin main
```
*(Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username)*

---

## 2. ⚡ Deploy Backend to Render

1. Go to [Render Dashboard](https://dashboard.render.com/) and click **New +** → **Web Service**.
2. Connect your GitHub repository (`MobIQ`).
3. Fill in the deployment settings:
   - **Name**: `mobiq-api` (or your choice)
   - **Region**: Nearest to your users (e.g., Singapore / Frankfurt / Oregon)
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: `Free`
4. *(Optional)* Add Environment Variables in Render:
   - `PORT`: `5000`
   - `MONGODB_URI`: `<Your MongoDB Atlas Connection String>` *(Optional: if left blank, MobIQ automatically uses its fast built-in in-memory catalog)*
5. Click **Deploy Web Service**.
6. Once deployed, copy your Render backend URL (e.g. `https://mobiq-api.onrender.com`).

---

## 3. 🌐 Deploy Frontend to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/new) and import your GitHub repository (`MobIQ`).
2. Configure project settings:
   - **Project Name**: `mobiq`
   - **Framework Preset**: `Vite`
   - **Root Directory**: Click `Edit` and select `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add Environment Variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://mobiq-api.onrender.com/api` *(Your Render backend URL with `/api` suffix)*
4. Click **Deploy**.

---

## 4. 🔄 Automatic CI/CD
Every time you push changes to GitHub (`git push origin main`):
- Render will automatically re-deploy the backend.
- Vercel will automatically re-deploy the frontend.
