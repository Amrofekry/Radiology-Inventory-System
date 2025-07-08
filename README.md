# Radiology Inventory System

A comprehensive web application for managing radiology equipment inventory with AI-powered features.

## Features

- Equipment inventory management with detailed tracking
- Maintenance scheduling and status monitoring
- QR code generation for equipment identification
- AI-powered insights using Google Gemini API
- Responsive design with modern UI
- Real-time data visualization and analytics

## Run Locally

**Prerequisites:** Node.js 18+ and npm

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Amrofekry/Radiology-Inventory-System.git
   cd Radiology-Inventory-System
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` and set your `GEMINI_API_KEY` (get one from [Google AI Studio](https://ai.google.dev/aistudio))

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment

This application is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment:** Every push to the `main` branch triggers automatic deployment
2. **Manual Deployment:** Use the "Actions" tab in GitHub to manually trigger deployment
3. **Environment Variables:** Set `GEMINI_API_KEY` in your repository secrets for production deployment

### Production URL
The application is automatically deployed to: `https://amrofekry.github.io/Radiology-Inventory-System/`

## Technology Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** TailwindCSS
- **Charts:** Recharts
- **AI:** Google Gemini API
- **QR Codes:** qrcode library
- **Deployment:** GitHub Pages via GitHub Actions
