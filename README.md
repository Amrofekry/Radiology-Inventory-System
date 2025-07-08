# Radiology Equipment Inventory System

A modern web application for managing radiology equipment inventory with AI-powered search capabilities using Google's Gemini API.

## Features

- 📊 **Dashboard** - Overview of equipment status and metrics
- 🔍 **AI-Powered Search** - Natural language queries using Gemini API
- 📋 **Equipment Management** - Add, edit, and track medical equipment
- 🏥 **Multi-location Support** - Buildings, departments, and rooms
- 📈 **Analytics** - Equipment value and status reporting
- 🔧 **Maintenance Tracking** - Schedule and track maintenance activities

## Run Locally

**Prerequisites:** Node.js 18 or higher

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
   Edit `.env.local` and set your `GEMINI_API_KEY` to your actual Gemini API key.
   Get your API key from: https://makersuite.google.com/app/apikey

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deploy to GitHub Pages

This repository is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the application
3. The app will be available at: `https://yourusername.github.io/Radiology-Inventory-System/`

### Manual Deployment

If you want to deploy manually:

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## Environment Variables

- `GEMINI_API_KEY`: Your Google Gemini API key for AI-powered search functionality

## Technology Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **AI**: Google Gemini API
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
