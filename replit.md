# DecoBlu USA - Surface Transformation Services

## Overview
A professional website for DecoBlu USA, a surface transformation company. The site features a modern, responsive design with a contact form system that includes email delivery and optional Google Sheets integration for form logging.

## Recent Changes
- **Oct 2, 2025**: Initial Replit environment setup completed
  - Installed missing dependencies (`cross-env`, `nanoid`)
  - Configured workflow for development server on port 5000
  - Verified Vite dev server with HMR working correctly
  - Email and Google Sheets services are optional (work without credentials)

## Project Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript, Tailwind CSS, Framer Motion, Wouter (routing)
- **Backend**: Node.js + Express, Nodemailer (email), Google Sheets API
- **Build Tools**: Vite (frontend), ESBuild (backend)
- **Database**: Drizzle ORM with in-memory storage (optional PostgreSQL support)

### Project Structure
```
decoblu/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components (Hero, Navigation, Products, etc.)
│   │   ├── pages/         # Page components (Home, Products, Contact)
│   │   └── lib/           # Utilities and query client
├── server/                # Node.js backend
│   ├── index.ts          # Main server file
│   ├── routes.ts         # API routes
│   ├── emailService.ts   # Email handling with Nodemailer
│   ├── googleSheets.ts   # Google Sheets integration
│   ├── vite.ts           # Vite dev server setup
│   └── storage.ts        # Storage interface
├── shared/               # Shared types and schemas
└── attached_assets/      # Static assets
```

### Key Features
- Modern responsive design with mobile-first approach
- Professional contact form with validation
- Dual email delivery system (Office 365/Gmail)
- Optional Google Sheets integration for form response logging
- Dark mode support with theme toggle
- Smooth scrolling animations
- Product and service showcases with interactive slideshows

### Development Setup
- **Server**: Runs on port 5000 (0.0.0.0 for Replit proxy support)
- **Vite**: Configured with `allowedHosts: true` for Replit environment
- **Environment**: Development mode uses Vite dev server with HMR
- **Production**: Uses optimized build served as static files

### Optional Integrations
The following features are optional and will work in fallback mode without configuration:
- **Email Service**: Configure `EMAIL_USER` and `EMAIL_PASS` environment variables
- **Google Sheets**: Configure `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, and `GOOGLE_SHEET_ID`

### Running the Project
- Development: `npm run dev` (configured in workflow "Start application")
- Build: `npm run build`
- Production: `npm start`
- Type Check: `npm run check`
- Database Push: `npm run db:push`

## User Preferences
- Use existing project structure and conventions
- Keep email and Google Sheets integrations optional
- Maintain professional, clean design aesthetic
