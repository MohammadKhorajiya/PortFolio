# Mohammad Khorajiya - Developer Portfolio

A modern, minimalist, dark-themed developer portfolio built for **Mohammad Khorajiya**—Java Backend Developer. Inspired by high-end modern developer portfolios, featuring glassmorphism design, Framer Motion animations, subtle cursor spotlight effects, and clean responsive components.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+)

---

## 📁 File Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Glassmorphism header with mobile drawer & section indicator
│   │   ├── Hero.jsx         # Main hero section with headline, badges, and CTAs
│   │   ├── About.jsx        # Java Backend experience, stats, and focus areas
│   │   ├── Skills.jsx       # Categorized skills (Languages, Backend, Database, Tools)
│   │   ├── Projects.jsx     # Production Java Spring API showcase cards with modal view
│   │   ├── Experience.jsx   # Work experience, BCA degree, and certifications timeline
│   │   ├── Resume.jsx       # Dedicated resume download section with key highlights
│   │   ├── Contact.jsx      # Interactive contact form & direct channels
│   │   └── Footer.jsx       # Minimal footer with social links & back-to-top button
│   │
│   ├── data/
│   │   └── portfolio.js     # Centralized profile & resume data configuration file
│   │
│   ├── App.jsx              # Main App layout with ambient cursor spotlight
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind CSS directives & global dark themes
│
├── public/
│   └── resume.pdf           # Downloadable Resume PDF
│
├── package.json
└── README.md
```

---

## ⚙️ Central Data Configuration (`src/data/portfolio.js`)

All portfolio content is decoupled into `src/data/portfolio.js`. To update your bio, skills, projects, contact details, or links:

1. Open `src/data/portfolio.js`
2. Modify any field (e.g. `personal`, `skillCategories`, `projects`, `timeline`, `certifications`)
3. Save the file—the portfolio will immediately reflect your updates!

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```

Open `http://localhost:5173` in your web browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist` directory.
