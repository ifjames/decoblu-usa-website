# DecoBlu USA Website

A professional automotive vinyl wrapping and customization company website built with React, TypeScript, and Node.js.

## 🚀 Features

- **Modern Responsive Design** - Mobile-first approach with Tailwind CSS
- **Professional Contact Form** - Dual email delivery system
- **Product Showcase** - Interactive slideshows for services and products
- **Email Integration** - Gmail SMTP with professional templates
- **Google Sheets Integration** - Optional form response logging
- **Production Ready** - Optimized build for Namecheap hosting

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Vite** for build tooling
- **Wouter** for routing

### Backend
- **Node.js** with Express
- **Nodemailer** for email delivery
- **Google Sheets API** for form logging
- **Passenger** for production deployment

## 📧 Email System

The contact form sends professional emails to:
- `info@decobluusa.com` (primary)
- `infodecoblu@gmail.com` (backup)

Features:
- Professional HTML email templates
- Form validation and sanitization
- Gmail SMTP configuration
- Error handling and fallbacks

## 🏗️ Project Structure

```
decoblu/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
├── server/                # Node.js backend
│   ├── index.ts          # Main server file
│   ├── routes.ts         # API routes
│   ├── emailService.ts   # Email handling
│   └── googleSheets.ts   # Sheets integration
├── shared/               # Shared types and schemas
└── deployment-package/   # Production build files
```

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create `.env` file:
   ```env
   USE_GMAIL=true
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   NODE_ENV=development
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment (Namecheap)

### Quick Deploy
1. Run deployment script:
   ```bash
   ./deploy-clean.bat
   ```

2. Upload `deployment-package` contents to Namecheap:
   - `package.json`
   - `index.js`
   - `public/` folder
   - `.htaccess`
   - `.env`

### Manual Deploy
See `NAMECHEAP_DEPLOYMENT.md` for detailed instructions.

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Environment mode | Yes |
| `USE_GMAIL` | Enable Gmail SMTP | Yes |
| `EMAIL_USER` | Gmail address | Yes |
| `EMAIL_PASS` | Gmail app password | Yes |
| `GOOGLE_SHEET_ID` | Google Sheets ID | No |
| `PORT` | Server port | No |

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript checking

## 📱 Contact Form Features

- Real-time validation
- Professional email templates
- Dual email delivery
- Optional Google Sheets logging
- Spam protection
- Mobile-responsive design

## 🎨 Design System

- **Colors**: Professional blue and gray palette
- **Typography**: Clean, modern fonts
- **Components**: Reusable UI components with Radix UI
- **Animations**: Smooth transitions with Framer Motion
- **Layout**: Responsive grid system

## 📄 License

Copyright © 2025 DecoBlu USA. All rights reserved.

## 🤝 Support

For support or questions about this website:
- Email: info@decobluusa.com
- Website: https://decobluusa.com

---

**Built with ❤️ for DecoBlu USA**
