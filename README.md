# H&J Hotel Website

A modern, fully responsive 4-page hotel website built with Next.js and Tailwind CSS, featuring an elegant black, white, and gold color scheme.

## 🌟 Features

- **4 Complete Pages:**
  - **Home** - Hero section with "Quality and Design" messaging, hotel overview, room types, dining, and design sections
  - **Reservation** - Unique 3-step booking form with interactive date picker, room selection, and guest information
  - **Gallery** - Filterable image grid with category selection and lightbox modal view
  - **Contact Us** - Contact form, hotel information, and embedded map

- **Modern Design:**
  - Elegant black, white, and gold (#D4AF37) color palette
  - Smooth Framer Motion animations throughout
  - Fully responsive across all devices
  - Sticky navigation with scroll effects
  - Mobile-friendly hamburger menu

- **Interactive Features:**
  - Multi-step reservation form with validation
  - React DatePicker integration
  - Gallery lightbox with Yet Another React Lightbox
  - Smooth page transitions and hover effects

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The website will be available at `http://localhost:5000`

### Production Build

```bash
npm run build
npm start
```

## 📧 Email Configuration

Currently, reservation submissions are logged to the console. To enable actual email sending:

1. **Option 1 - Using Resend (Recommended):**
   - Set up the Resend integration in Replit
   - Update `/app/api/send-reservation/route.js` to use the Resend SDK

2. **Option 2 - Custom Email Service:**
   - Add your email service credentials as secrets
   - Update the API route with your email service configuration

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (JavaScript, App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** React Icons, React DatePicker, Yet Another React Lightbox
- **Image Source:** Unsplash (demo images)

## 📁 Project Structure

```
├── app/
│   ├── page.js              # Home page
│   ├── reservation/         # Reservation page
│   ├── gallery/            # Gallery page
│   ├── contact/            # Contact page
│   ├── api/                # API routes
│   ├── layout.js           # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.js       # Header navigation
│   └── Footer.js           # Footer component
├── public/                 # Static assets
└── tailwind.config.js     # Tailwind configuration
```

## 📝 Customization

### Colors
Update the gold color in `tailwind.config.js`:
```js
colors: {
  gold: {
    500: '#D4AF37',
    600: '#C5A028',
  },
}
```

### Images
Replace Unsplash URLs with your own hotel images in:
- `app/page.js` (home page)
- `app/reservation/page.js` (room types)
- `app/gallery/page.js` (gallery images)

### Hotel Information
Update contact details in:
- `components/Footer.js`
- `app/contact/page.js`

## 🎨 Design Credits

Design inspired by luxury hotel aesthetics with focus on quality, elegance, and modern sophistication.

## 📄 License

This project was created for H&J Hotel. All rights reserved.
# Hotel
