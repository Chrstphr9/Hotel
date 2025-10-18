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

The reservation system is now configured to send detailed emails to **somto565@gmail.com** when a reservation is submitted. 

### Setup Instructions

1. **Get a Resend API Key:**
   - Sign up at [https://resend.com](https://resend.com)
   - Create a new API key from your dashboard
   - Copy the API key

2. **Configure Environment Variables:**
   Create a `.env.local` file in your project root:
   ```bash
   RESEND_API_KEY=your_resend_api_key_here
   ```
   Replace `your_resend_api_key_here` with your actual Resend API key.

3. **Email Features:**
   - ✅ Sends formatted HTML emails to somto565@gmail.com
   - ✅ Includes all reservation details (dates, room type, guest info, special requests)
   - ✅ Calculates total cost automatically
   - ✅ Professional email template with Hotel Haven branding
   - ✅ Both text and HTML versions for better compatibility

### Email Content Includes:
- 📅 Check-in and check-out dates with full formatting
- 🏨 Room type and pricing information
- 👤 Complete guest information (name, email, phone)
- 📝 Special requests (if provided)
- 💰 Automatic total cost calculation
- ⏰ Submission timestamp

**Note:** Make sure to add your `.env.local` file to `.gitignore` to keep your API key secure.

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
