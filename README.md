# 🎨 Artfolio Website

**Artfolio** is a modern web platform where artists can **showcase their artwork**, manage profiles, and receive **custom art requests** from users — all through a clean, responsive, and high-performance interface.

---

## 🌍 Project Live

🚀 **Live Website:**  
👉 https://artfolio-website.vercel.app/artwork/home

---

## 🌟 Overview

Artfolio enables artists to:
- Upload and showcase artworks
- Maintain a professional artist profile
- Receive art requests via contact forms
- Deliver fast, optimized images with CDN support

Built with a modern **Next.js + Prisma** stack for performance and scalability.

---

## ✨ Features

### 🖼️ Artwork Management
- Upload artwork images using **ImageKit**
- CDN-optimized image delivery
- Modern gallery layout

### 👤 Artist Profile
- Profile image
- Artist bio & description
- Showcase personal art style and skills

### 📩 Contact & Art Requests
- User contact form for custom art requests
- Email notifications via **Nodemailer**
- Secure form handling

### 🗄️ Database Management
- **Prisma ORM**
- **SQL Database** storing:
  - Artist profiles
  - Artwork details
  - Contact requests

### ⚡ Performance & UX
- Fast image loading
- Fully responsive UI
- Smooth animations with **Framer Motion**

---

## 🛠️ Tech Stack

### 🎨 Frontend
- Next.js
- React
- Tailwind CSS
- Framer Motion

### ⚙️ Backend / Services
- Node.js
- Prisma ORM
- SQL Database
- Nodemailer
- ImageKit

---

## 📁 Project Structure

```

Artfolio_website/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
├── prisma/              # Prisma schema & migrations
│   └── schema.prisma
├── public/              # Static assets
├── utils/               # Helper functions
├── styles/              # Global styles
├── .env                 # Environment variables (ignored)
└── README.md

````

---

## 🔐 Environment Variables

Create a `.env` file:

```env
# ImageKit
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint

# Email (Nodemailer)
EMAIL_USER=your_email
EMAIL_PASS=your_password

# Auth
JWT_SECRET=your_jwt_secret

# Database
DATABASE_URL=your_database_url
````

> ⚠️ Never commit `.env` files to GitHub.

---

## 🧬 Prisma Setup

Generate client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/PavishK/Artfolio_website.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

📍 Open `http://localhost:3000`

---

## 📸 Screenshots

### 🏠 Home Page

<img src="https://github.com/user-attachments/assets/7f2eca9a-5d48-43e6-8f86-4ba732122683" width="100%" />

### 🎨 Artwork Gallery

<img src="https://github.com/user-attachments/assets/4a231b8b-43be-4d31-a12e-1ca3bb4c84a4" width="100%" />

### 👤 About Page

<img src="https://github.com/user-attachments/assets/9523a491-d7a3-4e6a-a7bc-6db0b926c87d" width="100%" />

### 📩 Contact Page

<img src="https://github.com/user-attachments/assets/f97e77a9-0124-4b0b-8a10-ba9cbafa2d30" width="100%" />

### 🔐 Dashboard

<img src="https://github.com/user-attachments/assets/4394ac42-2a1b-4222-a3fc-b311446c44b6" width="100%" />

### 🗄️ Management Panel

<img src="https://github.com/user-attachments/assets/47a2fecc-d937-4aa4-babc-f954f58cfb30" width="100%" />

---

## 🎯 Use Cases

* Artist portfolio websites
* Freelance art showcase
* Art commission platforms
* Personal creative branding

---

## 🔗 Repository

👉 [https://github.com/PavishK/Artfolio_website](https://github.com/PavishK/Artfolio_website)

---

## 🙌 Future Enhancements

* User authentication
* Likes & comments
* Artwork filters & categories
* Admin dashboard
* Payment integration for commissions

---

## 🧑‍💻 Author

**Pavish K**
🌐 Portfolio: [https://www.pavishk.dev](https://www.pavishk.dev)

⭐ If you like this project, don’t forget to **star the repository!**
