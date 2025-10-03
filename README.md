# Understandable AI Consultancy - Landing Page

A beautiful, accessible, and performant landing page for Understandable AI
Consultancy, built with vanilla web technologies following the Orlando design
philosophy.

## 🎨 Design Philosophy

This landing page follows the **Orlando** design principles:

- ✅ **Vanilla Technologies Only** - Pure HTML, CSS, and JavaScript (no
  frameworks)
- ✅ **BEM Methodology** - Clean, maintainable CSS architecture
- ✅ **Accessibility First** - WCAG 2.1 AA+ compliant
- ✅ **Mobile-First Responsive** - Optimized for all devices
- ✅ **Theme System** - Light/dark mode with localStorage persistence
- ✅ **Performance Conscious** - Optimized for Core Web Vitals

## 🚀 Features

### Core Functionality

- **Responsive Navigation** - Mobile-friendly menu with smooth scrolling
- **Theme Toggle** - Light/dark mode with system preference detection
- **Smooth Animations** - Scroll-triggered animations with reduced motion
  support
- **Scroll Spy** - Active navigation highlighting based on scroll position
- **Keyboard Navigation** - Full keyboard accessibility support

### Content Sections

1. **Hero Section** - Compelling value proposition with animated visual
2. **Values** - Core principles (Clarity, Efficiency, Pragmatism, Partnership)
3. **Services** - Comprehensive AI service offerings
4. **How It Works** - Simple 4-step process
5. **Why Choose Us** - Key differentiators
6. **Testimonials** - Real client feedback from actual customers
7. **Tech Stack** - Technologies and platforms
8. **Call to Action** - Clear next steps
9. **Footer** - Links and company information

## 📁 Project Structure

```
understandable-landing-page/
├── index.html          # Main landing page
├── styles/
│   └── main.css        # Complete stylesheet with BEM methodology
├── scripts/
│   └── main.js         # All interactive features
├── README.md           # This file
└── AGENTS.md           # Agent instructions and workspace context
```

## 🎯 Quick Start

### Option 1: Open Directly

Simply open `index.html` in a modern web browser.

### Option 2: Local Development Server (Recommended)

For the best development experience with theme persistence:

```bash
# Start live server with auto-refresh (detached mode)
nohup npx live-server . --port=8000 > /dev/null 2>&1 & sleep 2 && open http://localhost:8000
```

This will:

- ✅ Start a local server on `http://localhost:8000`
- ✅ Automatically open your browser
- ✅ Enable proper theme persistence
- ✅ Auto-refresh on file changes
- ✅ Run in background while you work

**Managing the server:**

```bash
# Check if server is running
lsof -i :8000

# Stop the server
kill $(lsof -t -i:8000)
```

## 🎨 Theme System

The landing page includes a sophisticated theme system:

### Features

- **Light & Dark Modes** - Toggle between themes
- **System Preference Detection** - Respects OS settings
- **LocalStorage Persistence** - Remembers user choice
- **Smooth Transitions** - Animated theme switching
- **Accessible** - Maintains contrast ratios in both modes

### CSS Variables

All colors, spacing, and design tokens are defined as CSS custom properties in
`:root` and can be easily customized:

```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #f59e0b;
  --spacing-md: 1rem;
  /* ... and many more */
}
```

## ♿ Accessibility

This landing page is built with accessibility as a priority:

- ✅ **Semantic HTML** - Proper heading hierarchy and landmarks
- ✅ **ARIA Labels** - Clear labels for interactive elements
- ✅ **Keyboard Navigation** - Full keyboard support
- ✅ **Focus Indicators** - Visible focus styles
- ✅ **Skip Links** - Quick navigation to main content
- ✅ **Reduced Motion** - Respects `prefers-reduced-motion`
- ✅ **Color Contrast** - WCAG AA compliant contrast ratios

## 📱 Responsive Design

Mobile-first responsive design with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

All components adapt gracefully across all screen sizes.

## 🛠️ Customization

### Changing Colors

Update CSS variables in `styles/main.css`:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

### Adding Content

Edit sections in `index.html` - all content is clearly marked with BEM class
names.

### Modifying Behavior

JavaScript is organized into classes in `scripts/main.js`:

- `ThemeManager` - Theme switching
- `NavigationManager` - Navigation and scrolling
- `ScrollAnimations` - Scroll-triggered animations
- `PerformanceOptimizer` - Performance features
- `AnalyticsManager` - Tracking (placeholder)

## 🚀 Deployment

This is a static website that can be deployed anywhere:

### Deployment Options

- **Netlify** - Drag and drop or connect repository
- **Vercel** - Import from Git
- **GitHub Pages** - Push to `gh-pages` branch
- **AWS S3** - Upload files to S3 bucket
- **Any Static Host** - Just upload the files

### Build Process

None required! This is vanilla HTML, CSS, and JavaScript with no build step.

## 📊 Performance

Optimized for excellent performance:

- ✅ **No Dependencies** - Zero external libraries
- ✅ **Minimal File Sizes** - Optimized CSS and JavaScript
- ✅ **Progressive Enhancement** - Works without JavaScript
- ✅ **Efficient Animations** - CSS-only where possible
- ✅ **Lazy Loading Ready** - Infrastructure for future image optimization

## 🧪 Browser Support

Tested and working in:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Structure

### Services Offered

1. AI Strategy & Roadmap Development
2. Custom AI Solution Development
3. LLM & Generative AI Implementation
4. AI Workflow Automation
5. AI Proof of Concept (POC) Development
6. AI Training & Knowledge Transfer

### Value Propositions

- **Clarity** - Simple, actionable explanations
- **Efficiency** - Quick results without complexity
- **Pragmatism** - Real-world solutions
- **Partnership** - Collaborative approach

### Key Differentiators

- No Jargon Zone
- Rapid Prototyping (weeks not months)
- Knowledge Transfer
- Honest Assessment
- End-to-End Support
- Boutique Expertise

## 🔧 Technical Details

### CSS Architecture

- **BEM Naming Convention** - Block__Element--Modifier
- **Component-Based** - Modular, reusable styles
- **CSS Custom Properties** - Comprehensive design system
- **Mobile-First** - Base styles for mobile, enhanced for larger screens

### JavaScript Architecture

- **Class-Based** - Object-oriented organization
- **Modular** - Separate concerns into classes
- **Vanilla ES6+** - Modern JavaScript features
- **Event-Driven** - Efficient event handling
- **Performance-Conscious** - Debouncing and throttling

## 📚 Documentation

### BEM Methodology

All CSS classes follow BEM naming:

- **Block**: `.header`, `.hero`, `.service-card`
- **Element**: `.header__logo`, `.hero__title`, `.service-card__icon`
- **Modifier**: `.btn--primary`, `.btn--large`, `.nav__link--active`

### Component Naming

Components are self-documenting through their class names:

```html
<article class="service-card">
  <div class="service-card__icon">🛠️</div>
  <h3 class="service-card__title">Title</h3>
  <p class="service-card__description">Description</p>
</article>
```

## 🎓 Learning Resources

This project demonstrates:

- Vanilla web development best practices
- Accessibility-first design
- BEM CSS methodology
- Theme system implementation
- Responsive design patterns
- Performance optimization techniques

## 📄 License

© 2025 Understandable. All rights reserved.

## 🤝 Contributing

This is a private landing page for Understandable AI Consultancy. For questions
or suggestions, contact the team.

## 📞 Contact

- **Email**: hello@understandable.ai
- **Website**: [To be deployed]
- **LinkedIn**: [Company page]
- **GitHub**: [Open-source contributions]

---

**Built with ❤️ using vanilla web technologies**

_Last Updated: October 3, 2025_
