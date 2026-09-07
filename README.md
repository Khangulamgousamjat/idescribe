# 📝 IDEASCRIBE

> **A connected workspace and modern note-taking platform designed for developers and creative teams.**

[![Owner](https://img.shields.io/badge/Owner-GOUS%20KHAN-blue.svg?style=for-the-badge&logo=github)](https://github.com/Khangulamgousamjat)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 👑 Project Owner & Creator

- **Owner & Developer:** **GOUS KHAN**
- **Repository:** [idescribe](https://github.com/Khangulamgousamjat/idescribe)

---

## ✨ Features

- 📑 **Block-Based Rich Text Editor:** Powered by BlockNote (Notion-like block editing experience).
- ⚡ **Real-Time Database & Backend:** Convex real-time reactive data sync.
- 🔐 **Authentication:** Enterprise-grade authentication powered by Clerk.
- 🖼️ **Image & File Storage:** Instant, scalable media uploads with EdgeStore.
- 🌓 **Light & Dark Theme:** Full dark-mode support with seamless theme switching.
- 🔍 **Command Palette:** Quick search across notes, canvases, and commands (`Cmd/Ctrl + K`).
- 🗑️ **Trash & Restore:** Safe note recovery and permanent deletion management.
- 🌐 **Public Publishing:** Share read-only canvas notes with live share links.
- 📱 **Fully Responsive:** Beautifully crafted UI on desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- **Backend & Database:** [Convex](https://www.convex.dev/)
- **Auth Provider:** [Clerk](https://clerk.com/)
- **File Storage:** [EdgeStore](https://edgestore.dev/)
- **Editor:** [BlockNote](https://www.blocknotejs.org/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v18+) and npm/yarn/pnpm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Khangulamgousamjat/idescribe.git
   cd idescribe
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   # Convex
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=

   # Clerk Auth
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   # EdgeStore
   EDGE_STORE_ACCESS_KEY=
   EDGE_STORE_SECRET_KEY=
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Start Convex backend:**
   ```bash
   npx convex dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see Ideascribe in action.

---

## 📄 License

This project is licensed under the MIT License - created and maintained by **GOUS KHAN**.