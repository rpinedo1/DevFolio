# Professional Portfolio Website

## Overview

This is a modern, professional portfolio website built for Ramiro E. Pinedo, a Software Development Engineer with 7+ years of experience at Amazon and Intel. The application showcases a clean, LinkedIn-inspired design that emphasizes professional credibility and technical expertise. The portfolio presents work experience, skills, projects, and contact information in a recruiter-friendly format optimized for both desktop and mobile viewing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a **React-based Single Page Application (SPA)** with TypeScript for type safety and maintainability. The frontend follows a component-driven architecture using:

- **Component Structure**: Modular components for each portfolio section (Hero, About, Experience, Skills, Projects, Contact) with reusable UI components
- **Styling System**: Tailwind CSS with a custom design system featuring CSS variables for theme consistency and dark/light mode support
- **UI Framework**: shadcn/ui component library built on Radix UI primitives for accessibility and consistent design patterns
- **Routing**: Wouter for lightweight client-side routing, though the main application is primarily a single-page layout with smooth scrolling navigation
- **State Management**: React hooks and TanStack Query for server state management

### Backend Architecture
The application implements a **minimal Express.js server** with the following characteristics:

- **API Layer**: Express.js server providing REST endpoints for resume downloads and potential future data services
- **Static Serving**: Serves the built React application and static assets
- **Development Setup**: Vite development server integration for hot reloading and fast development experience
- **File Serving**: Dedicated endpoint for resume PDF downloads from attached assets

### Data Storage Solutions
The application uses a **hybrid storage approach**:

- **In-Memory Storage**: MemStorage class implementing IStorage interface for potential user data (currently minimal usage)
- **Database Ready**: Drizzle ORM configured with PostgreSQL schema for future database integration
- **Static Assets**: Professional images and documents served directly from the filesystem
- **Schema Design**: Simple user table structure with UUID primary keys and unique constraints

### Authentication and Authorization
Currently implements **minimal authentication infrastructure**:

- **Storage Interface**: IStorage interface defines user CRUD operations for future authentication needs
- **Session Ready**: Infrastructure in place for session management with connect-pg-simple for PostgreSQL session storage
- **No Current Auth**: The portfolio website currently operates without user authentication as it's a public showcase

### Theme and Design System
The application implements a **sophisticated theming architecture**:

- **CSS Variables**: Comprehensive color system using HSL values for precise color control
- **Dark/Light Mode**: Toggle-based theme switching with localStorage persistence and system preference detection
- **Typography**: Inter font family for clean, professional typography with JetBrains Mono for code snippets
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints ensuring optimal viewing across devices
- **Professional Aesthetics**: LinkedIn-inspired design with subtle gradients, shadows, and hover effects

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with TypeScript support
- **Express.js**: Backend web server framework
- **Vite**: Development server and build tool with fast HMR

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Radix UI**: Accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-built component library with customizable design tokens
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe component variant management

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development and Build Tools
- **TypeScript**: Static type checking and enhanced development experience
- **PostCSS**: CSS processing with Autoprefixer for vendor prefixes
- **ESBuild**: Fast JavaScript bundling for production builds

### Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation support
- **Zod**: Runtime type validation and schema definition
- **date-fns**: Date manipulation and formatting utilities

The architecture prioritizes professional presentation, performance, and maintainability while providing a solid foundation for future enhancements such as user authentication, content management, or expanded functionality.