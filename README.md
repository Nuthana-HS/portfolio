# Nuthana H S — Portfolio

Personal developer portfolio built with React. Dark theme with blue accents.

---

## HOW TO RUN LOCALLY (step by step)

### Step 1 — Install Node.js (if you don't have it)
Download from: https://nodejs.org
Choose the "LTS" version. Install it normally.

To check it worked, open terminal and type:
```
node -v
```
You should see something like `v20.x.x`

---

### Step 2 — Open this folder in terminal
Right-click the `portfolio` folder → "Open in Terminal"
Or in VS Code: File → Open Folder → select `portfolio` → then open the Terminal inside VS Code.

---

### Step 3 — Install dependencies
```
npm install
```
This downloads all the libraries. Takes 1-2 minutes.

---

### Step 4 — Run locally
```
npm start
```
Opens automatically at http://localhost:3000
You'll see your portfolio live. Any change you save auto-refreshes.

---

## HOW TO DEPLOY ON GITHUB PAGES (free hosting)

### Step 1 — Create a GitHub repo
Go to github.com → New repository → name it `portfolio` → Create

### Step 2 — Push your code
```
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/Nuthana-HS/portfolio.git
git push -u origin main
```

### Step 3 — Install gh-pages
```
npm install gh-pages --save-dev
```

### Step 4 — Deploy
```
npm run deploy
```

Your portfolio will be live at:
https://Nuthana-HS.github.io/portfolio

---

## HOW TO DEPLOY ON VERCEL (alternative, even easier)

1. Go to https://vercel.com and sign in with GitHub
2. Click "New Project" → Import your portfolio repo
3. Click Deploy
4. Done — live in 1 minute at a vercel.app URL

---

## Project structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   └── Footer.js / Footer.css
│   ├── sections/
│   │   ├── Hero.js / Hero.css
│   │   ├── About.js / About.css
│   │   ├── Skills.js / Skills.css
│   │   ├── Projects.js / Projects.css
│   │   ├── Experience.js / Experience.css
│   │   ├── Certifications.js / Certifications.css
│   │   └── Contact.js / Contact.css
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## To customize

- Change your name/bio: edit `src/sections/About.js`
- Add a project: edit the `projects` array in `src/sections/Projects.js`
- Add a cert: edit the `certs` array in `src/sections/Certifications.js`
- Change colors: edit CSS variables in `src/index.css`
