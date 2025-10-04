# Moniepoint Landing Page Revamp 🚀

This is a modern, responsive landing page revamp for **[Moniepoint](https://moniepoint-revamp.vercel.app/)** built with **Next.js App Router**, **Tailwind CSS**, and the **Onest font**.  
It is optimized for performance, accessibility, SEO, and beautiful user experience.

![Moniepoint Preview](https://moniepoint-revamp.vercel.app/og-image.jpg)

---

## ✨ Features

- ⚡ **Next.js 14 App Router** – Modern file-based routing and server components.
- 🎨 **Tailwind CSS** – Fully customized theme with brand colors and gradients.
- 🖋️ **Onest Font** – Clean, modern typography imported with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts).
- 🔍 **SEO Optimized** – Proper metadata, Open Graph, and Twitter card support.
- 📱 **Responsive Design** – Mobile-first, works seamlessly on all devices.
- 🌙 **Custom UI Components** – Gradient buttons, modern CTAs, and brand-aligned visuals.

---

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

You can start editing the UI by modifying `app/page.tsx`.
The page auto-updates as you edit.

---

## 🛠️ Project Structure

```text
├── app/
│   ├── layout.tsx       # Root layout with Onest font + metadata
│   └── page.tsx         # Main landing page
├── public/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── og-image.jpg     # Social sharing preview image
├── styles/
│   └── globals.css      # Tailwind + custom theme variables
├── tailwind.config.ts   # Tailwind configuration
└── package.json
```

---

## 🎨 Theming

This project uses **CSS variables** to define brand colors and gradients:

```css
:root {
  --primary: #001335;
  --secondary: #0A70FF;
  --background: #FFFFFF;
  --button: #002C88;
  --accent: #2191FF;
}
```

The **Onest font** is loaded with `next/font` and applied globally:

```ts
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});
```

---

## 👥 Credits

* **Development:** [DevDanny](https://x.com/dannyclassi_c)
* **Design:** [UncleNebo](https://x.com/Agbanebbie)

---

## 📚 Learn More

* [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js features and API.
* [Tailwind CSS Docs](https://tailwindcss.com/docs) – Utility-first CSS framework.
* [Learn Next.js](https://nextjs.org/learn) – Interactive tutorial for beginners.

---

## 🚀 Deployment

Deploy this project easily on [Vercel](https://vercel.com):

1. Push your project to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Vercel will detect Next.js automatically and set up CI/CD.

More details: [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

### 🏦 About

This project is a **UI/UX revamp** of Moniepoint’s landing page — modernizing the look and feel, improving branding consistency, and optimizing for SEO and responsiveness.
