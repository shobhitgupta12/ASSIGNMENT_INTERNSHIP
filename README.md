# Scroll-Driven Hero Section Animation

A premium, scroll-driven hero section animation inspired by modern web design standards. Built with Next.js, React, GSAP, and Tailwind CSS.

## 🎯 Features

- **Smooth Initial Load Animations**: Staggered headline and statistics reveal
- **Scroll-Based Animations**: Car element responds to scroll position with GSAP ScrollTrigger
- **High Performance**: Uses CSS transforms for 60fps animations
- **Fully Responsive**: Adapts beautifully to all screen sizes
- **Modern Tech Stack**: Next.js, React, GSAP, and Tailwind CSS
- **Premium Feel**: Smooth easing, natural motion, and fluid interactions

## 📋 Functional Requirements

### Hero Section Layout
- Full-screen hero section
- Letter-spaced headline: "WELCOME ITZFIZZ"
- Impact metrics/statistics with percentages and descriptions

### Initial Load Animation
- Smooth fade + movement for headline
- Staggered reveal for statistics
- Premium feel with proper easing

### Scroll-Based Animation
- Visual element (car) moves based on scroll position
- Smooth parallax effect
- Easing/interpolation for natural motion

### Performance
- Optimized animations using transform properties
- No heavy calculations on scroll
- Maintains 60fps performance

## 🛠 Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: GSAP (GreenSock Animation Platform) with ScrollTrigger
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Build & Deploy

To build for production:
```bash
npm run build
npm start
```

To export as static HTML:
```bash
npm run export
```

## 🌐 Live Demo

The project is hosted on GitHub Pages. Visit the live demo to see the scroll-driven animations in action.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/
│   ├── HeroSection.tsx    # Hero section with animations
│   └── ContentSection.tsx # Content below hero
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🎨 Key Components

### HeroSection.tsx
- Headline with letter-by-letter animation
- Statistics with staggered reveal
- Car SVG visual element with scroll-driven motion
- Scroll indicator

### ContentSection.tsx
- Additional content sections
- Feature cards
- Technical implementation details

## ✨ Animation Details

1. **Headline Animation**: Letters fade in and move up with staggered timing (0.05s each)
2. **Statistics Animation**: Stats fade in with 0.15s stagger delay, starting 0.3s after headline
3. **Scroll-Based Motion**: Car element translates and rotates based on scroll position with easing
4. **Parallax Effect**: Velocity-based micro-adjustments for depth

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

Created as a demonstration of modern web animation techniques using GSAP and scroll-triggered interactions.
