# DecoBlu USA - Architectural Vinyl Wrap Showcase

## Overview

DecoBlu USA is a professional architectural vinyl wrap company specializing in premium interior transformations. The application is a modern, responsive website showcasing their services for cabinet wrapping, wall covering, ceiling applications, and custom interior design solutions. Built as a single-page application with a dedicated catalog page, it features smooth animations, modern design elements, and comprehensive service information to attract and convert potential customers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based architecture with TypeScript for type safety. The frontend is built using Vite as the build tool and bundler, providing fast development and optimized production builds. The component structure follows a modular approach with reusable UI components and page-specific components.

**Key Frontend Decisions:**
- **React with TypeScript**: Chosen for component-based architecture and type safety
- **Vite**: Selected for fast development server and optimized builds
- **Wouter**: Lightweight routing solution instead of React Router for smaller bundle size
- **Component Organization**: Clear separation between UI components, page components, and examples

### Styling and Design System
The application implements a comprehensive design system based on Tailwind CSS with custom theming capabilities.

**Design System Components:**
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Shadcn/ui Components**: Pre-built, accessible UI components with consistent styling
- **Custom Theme Provider**: Light/dark mode support with CSS custom properties
- **Design Guidelines**: Specific color palette inspired by monsterwraps.co.uk with blue branding
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

**Typography and Visual Elements:**
- **Google Fonts**: Montserrat for headings, Open Sans for body text
- **Animation System**: Framer Motion for smooth scroll animations and transitions
- **Color Scheme**: Blue-focused palette (Brand Blue: 220 100% 45%, Deep Blue: 220 80% 35%)

### State Management and Data Flow
The application uses a combination of React Query for server state and React Context for client state management.

**State Management Decisions:**
- **TanStack React Query**: Handles API requests, caching, and server state synchronization
- **React Context**: Theme management and global UI state
- **Local Component State**: Form handling and component-specific interactions

### Backend Architecture
The backend follows a minimal Express.js architecture with a modular storage interface.

**Backend Structure:**
- **Express.js Server**: RESTful API with middleware for logging and error handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Development Setup**: Vite integration for seamless development experience

**Storage Design:**
- **IStorage Interface**: Defines CRUD operations for data persistence
- **MemStorage Implementation**: In-memory storage for development and testing
- **Database Ready**: Architecture supports easy migration to persistent databases

### Development and Build System
The project uses modern development tooling for efficient development and deployment.

**Build Configuration:**
- **TypeScript Configuration**: Strict type checking with path aliases for clean imports
- **Vite Configuration**: Optimized for both development and production
- **Replit Integration**: Special plugins for Replit development environment
- **Asset Management**: Organized asset structure with proper aliasing

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react**: React support for Vite build system
- **express**: Node.js web framework for backend API
- **typescript**: Type safety and development tooling

### UI and Design Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library for smooth UI transitions
- **class-variance-authority**: Type-safe variant management for components
- **clsx & tailwind-merge**: Utility functions for conditional classes

### State Management Dependencies
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing solution
- **react-hook-form**: Form handling with validation

### Database and Storage Dependencies
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management tools
- **@neondatabase/serverless**: Serverless PostgreSQL database adapter
- **connect-pg-simple**: PostgreSQL session store for Express

### Development Dependencies
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **postcss & autoprefixer**: CSS processing and vendor prefixing
- **date-fns**: Date manipulation utilities

### Asset Dependencies
The application includes a curated collection of catalog images and stock photos stored in the attached_assets directory, featuring Infeel V17 digital catalog pages and modern interior design imagery to showcase architectural vinyl applications.