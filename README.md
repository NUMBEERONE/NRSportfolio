# Manoj Oli — GRC Intern Portfolio

A professional portfolio website for **Manoj Oli**, GRC Intern, built with **Next.js 16 + TypeScript + Tailwind CSS**.

## ✨ Sections

| Section | Description |
|---|---|
| 🏠 Hero | Name, title, stats, profile card, CTA buttons |
| 👤 About | Bio, qualities, info card with skills tags |
| 🛡️ Skills | 8 GRC competency cards + tools proficiency bars |
| ⚙️ How I Work | 5-step process (navy dark section) + scope |
| 💼 Experience | Timeline with NRS internship + volunteer work |
| 🏆 Certifications | Status-tagged cert cards + education banner |
| 📁 Projects | 4 GRC project cards with outcomes + tags |
| 📬 Contact | Contact form + info + availability card |
| 🦶 Footer | 4-col footer with dark navy background |

## 🎨 Design

- **Primary**: Navy Blue (`#0f2a4a`) — same as reference
- **Accent**: Orange (`#f5820a`) — same as reference
- **Style**: Cards, numbered steps, clean typography

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. In the project folder:
vercel

# 3. Follow prompts — it auto-detects Next.js
# 4. Your site will be live at: https://manoj-oli-portfolio.vercel.app
```

### Option 2: GitHub + Vercel Dashboard

1. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/manoj-oli-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Click **Deploy** — done! 🎉

## 🛠️ Local Development

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
```

## 📝 Customization

Update personal info in these files:

| File | What to update |
|---|---|
| `components/HeroSection.tsx` | Name, bio, stats |
| `components/AboutSection.tsx` | About text, qualities |
| `components/ExperienceSection.tsx` | Job history |
| `components/CertificationsSection.tsx` | Certs & education |
| `components/ProjectsSection.tsx` | GRC projects |
| `components/ContactSection.tsx` | Email, LinkedIn, location |
| `components/Footer.tsx` | Social links |
| `app/layout.tsx` | SEO metadata |
