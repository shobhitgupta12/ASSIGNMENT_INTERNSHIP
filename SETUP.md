# Setup and Deployment Guide

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps to Run Locally

1. **Clone the repository** (if starting from GitHub)
   ```bash
   git clone https://github.com/YOUR_USERNAME/car-scroll-animation.git
   cd car-scroll-animation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top-right and select **New repository**
3. Name it `car-scroll-animation` (or your preferred name)
4. Choose **Public** (required for GitHub Pages)
5. Click **Create repository**

### Step 2: Push Local Code to GitHub

From your project directory:

```bash
git remote add origin https://github.com/YOUR_USERNAME/car-scroll-animation.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (near the top right)
3. In the left sidebar, click **Pages**
4. Under "Source", select **GitHub Actions**
5. The workflow will automatically deploy your project

### Step 4: Access Your Live Demo

Once deployed, your site will be available at:
```
https://YOUR_USERNAME.github.io/car-scroll-animation
```

## Project Structure

```
car-scroll-animation/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages deployment
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page
│   └── globals.css             # Global styles
├── components/
│   ├── HeroSection.tsx         # Hero section with animations
│   └── ContentSection.tsx      # Content below hero
├── next.config.js              # Next.js config for GitHub Pages
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
└── README.md                   # Project documentation
```

## Key Features Implemented

✅ **Hero Section with Letter-Spaced Headline**
- "WELCOME ITZFIZZ" with individual letter animations

✅ **Initial Load Animations**
- Staggered headline reveal (fade + movement)
- Staggered statistics reveal

✅ **Scroll-Based Animations**
- Car element responds to scroll position
- Parallax effect with velocity calculation
- Smooth opacity transitions

✅ **Performance Optimized**
- Uses CSS transform properties
- 60fps animations
- Lightweight and responsive

## Technologies Used

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **PostCSS & Autoprefixer** - CSS processing

## Customization

### Change Hero Text
Edit `components/HeroSection.tsx`:
```typescript
{'WELCOME ITZFIZZ'.split('').map((letter, idx) => (
```

### Update Statistics
In `components/HeroSection.tsx`, modify the `statistics` array:
```typescript
const statistics: Statistic[] = [
  { value: '98%', label: 'Your Label' },
  // Add more statistics
];
```

### Adjust Animation Timing
In `components/HeroSection.tsx`, modify GSAP animation parameters:
```typescript
gsap.from(letters, {
  duration: 0.6,      // Change animation duration
  stagger: 0.05,      // Change letter delay
  ease: 'power2.out', // Change easing
});
```

### Modify Colors
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      dark: '#1a1a1a',
      accent: '#ff6b35', // Change accent color
    },
  },
},
```

## Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages Not Updating
1. Check that `basePath` in `next.config.js` matches your repo name
2. Verify GitHub Actions workflow completed successfully
3. Clear browser cache or use incognito mode

### Animations Not Smooth
- Ensure GSAP is properly imported
- Check that ScrollTrigger plugin is registered
- Verify browser hardware acceleration is enabled

## Performance Tips

- The site uses static export for GitHub Pages (no server needed)
- All animations use transform properties for optimal performance
- Images are optimized automatically by Next.js
- Code is minified and optimized during build

## Support

For issues or questions:
1. Check the [GSAP documentation](https://gsap.com/docs)
2. Review [Next.js docs](https://nextjs.org/docs)
3. Check [Tailwind CSS docs](https://tailwindcss.com/docs)

## License

MIT License - Free to use for personal and commercial projects
