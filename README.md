# 🎨 Artfolio Website

Artfolio is a modern web platform where artists can **showcase their art skills** by uploading artworks, managing their profiles, and allowing users to **request custom art** through a contact form.

The platform supports image uploads, artist profiles, and contact requests with a clean and responsive UI.

---

## 🌟 Features

### 🖼️ Artwork Management
- Upload artwork images using **ImageKit**
- Optimized image delivery with CDN
- Display artworks in a modern gallery

### 👤 Artist Profile
- Artist profile image
- Artist description / bio
- Showcase personal art style and skills

### 📩 Contact & Art Requests
- Contact form for users to request custom art
- Email notifications using **Nodemailer**
- Secure client-side form handling

### 🗄️ Database Management
- **Prisma ORM** for database operations
- **SQL database** for storing:
  - Artist profiles
  - Artwork details
  - Contact / art request data

### ⚡ Performance & UX
- Fast image loading with ImageKit
- Fully responsive design
- Smooth animations using Framer Motion

---

## 🛠️ Tech Stack

### Frontend
- **Next.js**
- **React**
- **Tailwind CSS**
- **Framer Motion**

### Backend / Services
- **Node.js**
- **Prisma ORM**
- **SQL Database**
- **Nodemailer**
- **ImageKit**

---

## 📁 Project Structure (Overview)

```

Artfolio_website/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── prisma/              # Prisma schema & migrations
│   └── schema.prisma
├── public/              # Static assets
├── utils/               # Helper functions
├── styles/              # Global styles
├── .env                 # Environment variables
└── README.md

````

---

## 🔐 Environment Variables

Create a `.env` file and add the following:

```env
# ImageKit
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint

# Email (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

# Jwt (jsonwebtoken)
JWT_SECRET="jwt_secret" # Added by `npx auth`. Read more: https://cli.authjs.dev

# Database
DATABASE_URL="sql_database_connection_url"
````

> ⚠️ Never commit your `.env` file to GitHub.

---

## 🧬 Prisma Setup

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Migrations

```bash
npx prisma migrate dev
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/PavishK/Artfolio_website.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Open 👉 `http://localhost:3000` in your browser.

---

## 📸 Image Upload Flow

1. Client uploads image
2. Image stored and optimized via **ImageKit**
3. Image URL saved in SQL database using **Prisma**
4. Image displayed in gallery

---

## 📬 Contact Form Flow

1. User submits art request
2. Data stored in SQL database via **Prisma**
3. **Nodemailer** sends email notification to admin

---

## 🎯 Use Case

* Artists showcasing portfolios
* Freelance artists receiving art requests
* Personal or professional art gallery website

---

## 🔗 Repository Link

👉 [https://github.com/PavishK/Artfolio_website](https://github.com/PavishK/Artfolio_website)

---

## 🖼️ Project Screenshots

> Below are some previews of the Artfolio website showcasing the UI and core features.

---

## 🙌 Future Enhancements

* User authentication
* Likes & comments on artworks
* Artwork categories & filters
* Admin dashboard
* Payment integration for commissions

---

## 🧑‍💻 Author

**Pavish K**
🌐 Portfolio: [https://www.pavishk.dev](https://www.pavishk.dev)

If you like this project, feel free to ⭐ the repository!