# S&W Hotel Website

## Overview
A modern, fully responsive 4-page hotel website built with Next.js (JavaScript) and Tailwind CSS. Features elegant black, white, and gold color scheme inspired by luxury hotel design.

## Recent Changes (October 15, 2025)
- Initial project setup with Next.js 15, Tailwind CSS, and modern animations
- Created all 4 pages: Home, Reservation, Gallery, Contact Us
- Implemented unique reservation page with multi-step form and interactive animations
- Added gallery with category filtering and lightbox functionality
- Integrated responsive navigation with mobile menu
- Set up email notification system for reservations (currently logs to console)

## Project Architecture

### Pages
- **Home** (`/`): Hero section, hotel overview, room types, dining, design sections
- **Reservation** (`/reservation`): 3-step booking form with date picker, room selection, guest info
- **Gallery** (`/gallery`): Filterable image grid with lightbox modal
- **Contact Us** (`/contact`): Contact form, hotel info, embedded map

### Components
- `Navigation.js`: Sticky header with transparent-to-solid scroll effect, mobile menu
- `Footer.js`: Hotel info, quick links, contact details, social media

### Styling
- Tailwind CSS with custom gold colors (#D4AF37)
- Framer Motion for smooth animations
- Custom datepicker styling

### Email Integration
**Note**: User declined Resend integration setup. Currently, reservation emails are logged to console. To enable actual email sending in the future:
- Option 1: Set up Resend integration via Replit
- Option 2: Add email service credentials (SMTP, SendGrid, etc.) as secrets and update `/app/api/send-reservation/route.js`

## Tech Stack
- Next.js 15 (JavaScript, App Router)
- React 18
- Tailwind CSS
- Framer Motion (animations)
- React DatePicker
- Yet Another React Lightbox
- React Icons

## Running the Project
```bash
npm run dev  # Starts on port 5000
```

## User Preferences
- No TypeScript (JavaScript only)
- Modern, elegant design with luxury hotel aesthetic
- Black, white, and gold color palette
- Smooth animations and transitions
- Fully responsive across all devices
