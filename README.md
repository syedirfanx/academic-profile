# Syed Irfan — Academic & Research Profile

A modern academic research portfolio showcasing research trajectories, publications, technical projects, and background in Data Science and Machine Learning.

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js (v18 or v20+)
- npm (v9+)

### Installation
```bash
# Clone the repository
git clone https://github.com/syedirfanx/syedirfanx.github.io.git
cd syedirfanx.github.io

# Install dependencies
npm install

# Start local development server (runs on http://localhost:3000)
npm run dev
```

### Production Build
```bash
# Compile and create optimized production bundle in /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment from GitHub

### Option 1: GitHub Pages (Automatic via GitHub Actions)
This repository includes a pre-configured GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push this repository to GitHub (`main` branch).
2. Go to your GitHub repository **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build and deploy your site to `https://<your-username>.github.io/<repo-name>/` (or your custom domain).

### Option 2: Vercel / Netlify / Cloudflare Pages
1. Connect your GitHub repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. The platform will automatically detect the Vite React project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click **Deploy**.

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React + Custom SVG Monograms
- **Build Tool**: Vite 8
