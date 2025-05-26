# Shriyansh Raj - Personal Portfolio

A modern, responsive personal portfolio website showcasing my professional experience, projects, and technical expertise as a Flutter Engineer. Built with cutting-edge web technologies and optimized for performance and accessibility.

<img width="1840" alt="Portfolio Screenshot" src="https://github.com/Shriyanshx/portfolio/assets/109217699/c8e49b8b-c5d9-443d-8374-b5c1ea7c509e">

## 🚀 Tech Stack

### Core Technologies
- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS framework
- **Runtime**: [React 18](https://react.dev/) - Modern React with concurrent features

### UI Components & Libraries
- **Icons**: [Material-UI Icons](https://mui.com/material-ui/material-icons/) - Comprehensive icon library
- **GitHub Integration**: [react-github-calendar](https://github.com/grubersjoe/react-github-calendar) - GitHub contribution calendar
- **Animations**: [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) - Scroll-based animations

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **PostCSS**: Advanced CSS processing with Autoprefixer
- **Build System**: Next.js built-in bundler with Webpack

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── landing.css        # Landing page specific styles
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   └── widgets/           # Reusable UI components
│       ├── bio.tsx        # About section component
│       ├── chip.tsx       # Technology chip component
│       ├── description_point.tsx  # Experience bullet points
│       ├── experience.tsx # Experience card component
│       ├── project.tsx    # Project showcase component
│       ├── social_media_icons.tsx # Social links component
│       └── svgs.tsx       # Custom SVG components
public/                    # Static assets
├── resume.pdf            # Downloadable resume
├── shriyansh.jpeg        # Profile image
└── *.png                 # Project screenshots
```

## ⚡ Features

### Performance Optimizations
- **Static Site Generation (SSG)** - Pre-rendered at build time for optimal loading
- **Image Optimization** - Next.js Image component with automatic WebP conversion
- **Code Splitting** - Automatic bundle splitting for faster page loads
- **Prefetching** - Link prefetching for seamless navigation

### User Experience
- **Responsive Design** - Mobile-first approach with Tailwind CSS breakpoints
- **Interactive Cursor** - Dynamic gradient following mouse movement
- **Smooth Scrolling** - Section-based navigation with smooth scroll behavior
- **Accessibility** - ARIA labels, semantic HTML, and keyboard navigation
- **Dark Theme** - Professional dark color scheme optimized for readability

### Dynamic Content
- **GitHub Calendar Integration** - Live contribution data from GitHub API
- **Downloadable Resume** - PDF resume accessible via direct link
- **External Links** - Proper handling with `rel="noopener noreferrer"`

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shriyanshx/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## 📦 Deployment

### Vercel (Recommended)
This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy with automatic CI/CD on every push

### Manual Deployment
```bash
# Build the application
npm run build

# The output will be in the .next directory
# Deploy the .next directory to your hosting provider
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:
```bash
# Example - no environment variables currently required
# NEXT_PUBLIC_API_URL=your-api-url
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Extended gradient utilities
- Custom color scheme
- Responsive breakpoints optimized for portfolio layout

### TypeScript Configuration
- Strict mode enabled for type safety
- Path aliases configured for clean imports
- Next.js plugin for optimal integration

## 🎨 Design System

### Color Palette
- **Primary Background**: `slate-900` - Deep dark background
- **Text Primary**: `slate-200` - High contrast white text
- **Text Secondary**: `slate-400` - Muted gray for secondary content
- **Accent**: `teal-300` - Bright teal for highlights and interactions
- **Selection**: `teal-300` background with `teal-900` text

### Typography
- **Font**: System font stack for optimal performance
- **Hierarchy**: Responsive font sizes with `clamp()` functions
- **Line Height**: Optimized for readability with `leading-relaxed`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: [iShreeyansh@gmail.com](mailto:iShreeyansh@gmail.com)
- **Phone**: [+91 9685962799](tel:+919685962799)
- **GitHub**: [@Shriyanshx](https://github.com/Shriyanshx)
- **LinkedIn**: [Connect on LinkedIn](https://linkedin.com/in/shriyansh-raj)

---

**Built with ❤️ using Next.js and TypeScript**
