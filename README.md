# 🌱 Fitoloka - Smart Agriculture & Greenhouse IoT Monitoring

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Realtime_DB-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Gemini AI](https://img.shields.io/badge/Google_Gemini-AI_Powered-8E75B2?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)

**Fitoloka** is a modern agricultural web application designed to empower farmers and agribusinesses with precision farming technology. It integrates real-time IoT microclimate sensor telemetry, automated greenhouse climate control, and Google Gemini AI-driven agricultural advisory insights.

---

## 🌟 Key Features

- **📊 Real-Time IoT Dashboard**: Live monitoring of air temperature (°C), relative humidity (%), and nutrient electrical conductivity / TDS (PPM) via Firebase Realtime Database.
- **🤖 Fitoloka AI Assistant**: Integrated with Google Gemini AI to analyze microclimate sensor data and provide customized recommendations for various crop types.
- **📈 Interactive Telemetry Charts**: Smooth area charts with dynamic gradients powered by Recharts for tracking microclimate trends.
- **🛡️ Secure Access & Land Authentication**: Dual verification model with Farm Tracking IDs and secret access PINs.
- **🌦️ Live Weather Monitoring**: Integrated OpenWeatherMap API for live municipal weather conditions across East Java.
- **🌱 Smart Agriculture Showcase**: Interactive portfolio, product catalog, and service presentations (Smart Irrigation, Precision Drone Farming, Automated Greenhouses).
- **📱 Fully Responsive Design**: Mobile-friendly UI crafted with Tailwind CSS, AOS animations, and Swiper.js.

---

## 🏗️ Tech Stack

- **Frontend Framework**: [React.js](https://react.dev/) (Vite bundler)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Flowbite React](https://flowbite-react.com/)
- **Icons & Visuals**: [React Icons](https://react-icons.github.io/react-icons/), [Recharts](https://recharts.org/), [ApexCharts](https://apexcharts.com/)
- **Backend & Database**: [Firebase Realtime Database](https://firebase.google.com/)
- **AI Integration**: [Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai) (Gemini)
- **APIs**: [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📁 Project Structure

```text
fitoloka/
├── public/                  # Static public assets (logo, icons)
├── src/
│   ├── assets/              # Compressed images and media assets
│   ├── components/          # Reusable UI & section components
│   │   ├── AboutPage.jsx
│   │   ├── Chart.jsx
│   │   ├── DashboardLayout.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PortoPage.jsx
│   │   ├── Portofolio.jsx
│   │   ├── Service.jsx
│   │   ├── ServicePage.jsx
│   │   ├── Weather.jsx
│   │   └── Youtube.jsx
│   ├── pages/               # Top-level view pages & routing
│   │   ├── About.jsx
│   │   ├── Admin.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Porto.jsx
│   │   └── Services.jsx
│   ├── App.jsx              # React Router configuration
│   ├── firebase.js          # Firebase SDK initialization
│   ├── index.css            # Global CSS & Tailwind imports
│   └── main.jsx             # Application root entry point
├── .env.example             # Environment variables template
├── eslint.config.js         # ESLint configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite build configuration
└── package.json             # Project dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/NiceTeamDiam/teknovest-nice_team.git
cd fitoloka
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy the `.env.example` template to create your local `.env` file:

```bash
cp .env.example .env
```

Open `.env` and fill in your API credentials:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project_id-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Google Gemini AI
VITE_GEMINI_API_KEY=your_gemini_api_key

# OpenWeatherMap API
VITE_OPENWEATHER_API_KEY=your_openweather_api_key
```

### 4. Run Development Server

```bash
npm run dev
```

The application will be running at `http://localhost:5173`.

### 5. Build for Production

```bash
npm run build
```

The compiled output will be generated inside the `dist/` directory.

---

## 🌐 Live Demo

- **Production URL**: [fitoloka.netlify.app](https://fitoloka.netlify.app/)
- **access dashboard user**: search LHN-001 and code is X7B9 

---

## 📄 License

This project was developed for the **TeknovistaFest 2024** competition. All rights reserved © 2026 Fitoloka.
