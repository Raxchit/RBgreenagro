# RB GREEN AGRO BANGYA INDUSTRIES PVT LTD - Agriculture Fertilizer Supplier Website

A full-stack website for RB GREEN AGRO BANGYA INDUSTRIES PVT LTD, an agriculture fertilizer supplier based in Nighad, Nepal. Built with Next.js 16, TypeScript, Prisma, and shadcn/ui.

## 🌾 Business Information

- **Name:** RB GREEN AGRO BANGYA INDUSTRIES PVT LTD
- **Location:** Nighad, Nepal
- **Phone:** +977 9822217062
- **Email:** rbagro100@gmail.com

## ✨ Features

### Public Website
- **Homepage** - Attractive landing page with company introduction, mission, and product showcase
- **About Page** - Comprehensive information about the company, mission, vision, and team
- **Products Catalog** - Browse all available fertilizers with images, descriptions, and pricing
- **Contact Page** - Contact information with phone, email, and location
- **Feedback Form** - Allow customers to submit inquiries and feedback

### Admin Panel
- **Secure Admin Login** - Password-protected admin dashboard
- **Feedback Management** - View all customer feedback in one place
- **Product Management** - Full CRUD operations for products:
  - Add new products with images
  - Edit existing products
  - Delete products
  - Manage stock status

### Admin Access
- Admin panel is accessible only at `/admin`
- No visible link on public pages (hidden from common users)
- Admin can access by visiting the URL directly

## 🛠 Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI component library
- **Lucide Icons** - Modern icon set

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma ORM** - Type-safe database client
- **SQLite** - Lightweight database (can be migrated to MongoDB)

### Authentication
- **bcryptjs** - Secure password hashing
- **LocalStorage** - Session management (for admin)

## 📦 Project Structure

```
my-project/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── admin/            # Admin panel pages
│   │   │   ├── page.tsx       # Admin login & dashboard
│   │   │   ├── feedback/      # Feedback management
│   │   │   └── products/     # Product management
│   │   ├── api/              # API routes
│   │   │   ├── auth/         # Authentication
│   │   │   ├── feedback/     # Feedback operations
│   │   │   ├── init-admin/   # Admin initialization
│   │   │   └── products/     # Product CRUD
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── feedback/         # Feedback form
│   │   ├── products/         # Products catalog
│   │   ├── page.tsx          # Homepage
│   │   └── layout.tsx        # Root layout
│   ├── components/
│   │   ├── navigation.tsx    # Navigation bar
│   │   ├── footer.tsx        # Footer component
│   │   └── ui/               # shadcn/ui components
│   └── lib/
│       ├── db.ts            # Prisma client
│       └── utils.ts         # Utility functions
├── db/                       # Database files
├── public/                   # Static assets
├── DEPLOYMENT.md            # Deployment guide
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and Bun installed
- Git installed

### Installation

1. **Clone the repository:**
```bash
git clone <your-repository-url>
cd my-project
```

2. **Install dependencies:**
```bash
bun install
```

3. **Set up the database:**
```bash
bun run db:push
```

4. **Start the development server:**
```bash
bun run dev
```

5. **Open your browser:**
Navigate to `http://localhost:3000`

### Setting Up Admin Account

1. Visit `http://localhost:3000/admin`
2. Scroll down to the "First Time Setup" section
3. Enter your admin email and password
4. Click "Create Admin Account"
5. Login with your new credentials

### Adding Products

1. Login to the admin panel at `/admin`
2. Click "Manage Products"
3. Click "Add Product"
4. Fill in the product details:
   - Product Name
   - Category (Organic Fertilizers, NPK Fertilizers, Micronutrients)
   - Price (in Rupees)
   - Image URL (publicly accessible)
   - Description
   - Stock status
5. Click "Create Product"

## 🌐 Pages Overview

### Homepage (`/`)
- Hero section with company introduction
- Statistics section (500+ farmers, 50+ products, 8+ years)
- Mission & Vision cards
- Why Choose Us section
- Product categories preview
- Call-to-action section

### About Page (`/about`)
- Company story and history
- Mission, Vision, Values
- What we offer section
- Why Choose RB GREEN AGRO BANGYA INDUSTRIES PVT LTD
- Meet the team
- Contact information

### Products Page (`/products`)
- Product catalog with images
- Category filter
- Product cards with:
  - Product image
  - Name and category
  - Description
  - Price
  - Stock status
  - Contact to buy button

### Contact Page (`/contact`)
- Contact information cards (location, phone, email)
- Contact form
- Business hours
- Map placeholder
- Quick contact information

### Feedback Page (`/feedback`)
- Feedback submission form
- Why feedback matters section
- Contact link for urgent help

### Admin Panel (`/admin`)
- Secure login
- Dashboard with quick access
- View all feedback
- Manage products (CRUD)
- Initialize admin account

## 🔐 Security Features

- Password hashing with bcrypt
- Admin-only pages (no public links)
- Session-based authentication
- Input validation
- SQL injection prevention (Prisma ORM)

## 📱 Responsive Design

- Mobile-first approach
- Fully responsive layout
- Touch-friendly navigation
- Optimized for all screen sizes

## 🗄️ Database Schema

### Product
- id, name, description, image, category, price, inStock, timestamps

### Feedback
- id, name, email, phone, message, createdAt

### Admin
- id, email, password, timestamps

## 📝 Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL="file:./db/custom.db"
```

For MongoDB Atlas (optional):
```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/rbagro"
```

## 🚢 Deployment

**Deploy your website to production with our comprehensive guides:**

### 📚 Choose Your Guide:

1. **[QUICK_START.md](./QUICK_START.md)** ⭐ **Start Here!**
   - Deploy in 10-15 minutes
   - Step-by-step simple instructions
   - Perfect for beginners
   - **Recommended for first-time deployment**

2. **[DEPLOYMENT.md](./DEPLOYMENT.md)**
   - Comprehensive, detailed guide
   - Multiple deployment options
   - Troubleshooting section
   - Post-deployment maintenance

3. **[DEPLOYMENT_FLOW.md](./DEPLOYMENT_FLOW.md)**
   - Visual diagrams of deployment process
   - Architecture overview
   - Platform comparisons
   - Time and cost breakdown

### 🚀 Quick Deployment with Vercel (Recommended)

**Fastest way to get online - 10 minutes, completely free!**

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/rb-agro-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (free)
   - Click "Add New Project"
   - Import your repository
   - Add environment variable: `DATABASE_URL` = `file:./db/custom.db`
   - Click "Deploy"

3. **Your website is live!** 🎉

### 📋 Deployment Options Comparison

| Platform | Cost | Time to Deploy | Difficulty |
|----------|------|----------------|------------|
| **Vercel** (Recommended) | $0 | 10 minutes | ⭐ Very Easy |
| Netlify | $0 | 10 minutes | ⭐⭐ Easy |
| VPS/DigitalOcean | $5-10/month | 1-2 hours | ⭐⭐⭐⭐ Advanced |

### ✅ After Deployment Checklist

- [ ] Website loads at your URL
- [ ] Admin panel accessible at `/admin`
- [ ] Create admin account
- [ ] Add your products
- [ ] Test all forms (feedback, contact)
- [ ] Verify mobile responsiveness
- [ ] Set up custom domain (optional)

## 🧪 Running Tests

Check code quality:
```bash
bun run lint
```

## 📄 License

This project is proprietary and belongs to RB GREEN AGRO BANGYA INDUSTRIES PVT LTD.

## 👨‍💻 Development

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Use the Navigation and Footer components

### Adding New API Routes

1. Create a new folder in `src/app/api/`
2. Add a `route.ts` file
3. Export HTTP methods (GET, POST, PUT, DELETE)

### Modifying Database Schema

1. Edit `prisma/schema.prisma`
2. Run `bun run db:push`
3. Use Prisma Client in your code

## 🤝 Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit [Prisma documentation](https://www.prisma.io/docs)
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help

## � Security Notice

**Important:** Never commit admin credentials or sensitive information to version control. Always use environment variables for secrets and change default passwords immediately after setup.

For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

---

**Built with ❤️ for RB GREEN AGRO BANGYA INDUSTRIES PVT LTD**
