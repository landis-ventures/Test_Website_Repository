# Landis Ventures - Financial Automation Consulting Platform

## Overview

Landis Ventures is a comprehensive web application for a financial automation consulting company, featuring both marketing website functionality and lead generation tools. The platform showcases intelligent automation services for financial institutions with a professional dark-themed design optimized for the financial services industry.

The application now includes multiple pages with enhanced navigation, comprehensive contact form functionality with real-time validation, automatic redirects to thank-you pages, and an administrative dashboard for viewing consultation requests. Built with React and TypeScript, it provides a complete business solution for automation consulting services.

## Recent Changes (August 2025)

✓ Added comprehensive website structure with multiple pages
✓ Enhanced contact form with improved validation and user feedback  
✓ Created thank-you page with automatic redirect after form submission
✓ Implemented SEO optimization across all pages
✓ Added administrative dashboard for viewing consultation requests
✓ Enhanced footer with detailed navigation and contact information
✓ Improved responsive design and mobile navigation
✓ Added privacy policy and terms of service pages

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing with minimal overhead
- **State Management**: TanStack React Query for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **Forms**: React Hook Form with Zod validation for type-safe form handling and data validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **API Design**: RESTful endpoints with structured error handling and request/response logging
- **Development**: Vite for fast development builds and hot module replacement
- **Build System**: ESBuild for production bundling with ES modules support

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema versioning
- **Connection**: Neon Database serverless PostgreSQL for cloud-native data persistence
- **Fallback Storage**: In-memory storage implementation for development and testing scenarios
- **Form Data**: Consultation requests stored with comprehensive validation and retrieval capabilities
- **Admin Interface**: Dashboard for viewing and managing submitted consultation requests

### Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **Security**: Express session middleware with secure cookie configuration
- **User Management**: Basic user schema with username/password authentication ready for implementation

### Component Organization
- **Pages**: Home, About, Thank You, Privacy Policy, Terms of Service, Admin Dashboard, Custom 404
- **Core Components**: Header with navigation, Footer with links, SEO Head component for meta tags
- **Form Components**: Enhanced contact form with validation, analytics tracking, and user feedback
- **UI Library**: Comprehensive shadcn/ui component collection including forms, dialogs, navigation, and data display components
- **Page Structure**: Modular section-based architecture with reusable components for hero, services, process, values, and contact sections
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts and navigation patterns

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for modern React development patterns
- **TypeScript**: Full TypeScript support with strict type checking and modern ES features
- **Vite**: Development server and build tool with plugin ecosystem for React and TypeScript

### UI and Styling
- **Radix UI**: Complete suite of accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for design system consistency
- **Lucide React**: Feather-inspired icon library for consistent iconography
- **Class Variance Authority**: Type-safe utility for managing component variants and styling

### Data and Forms
- **TanStack React Query**: Powerful data synchronization and caching for server state management
- **Zod**: TypeScript-first schema validation for forms and API data validation
- **React Hook Form**: Performant forms library with minimal re-renders and built-in validation

### Database and Backend
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect for database operations and migrations
- **Neon Database**: Serverless PostgreSQL provider for cloud-native database hosting
- **Express.js**: Web framework with middleware ecosystem for API development

### Development and Build Tools
- **Replit Integration**: Vite plugins for Replit development environment and error handling
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **ESBuild**: Fast JavaScript bundler for production builds with tree shaking