# RB Agro - Deployment Guide

This guide will help you deploy your RB Agro agriculture fertilizer supplier website to production.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)
- [Deployment Options](#deployment-options)
  - [Option 1: Vercel (Recommended)](#option-1-vercel-recommended)
  - [Option 2: Netlify](#option-2-netlify)
  - [Option 3: Self-Hosting](#option-3-self-hosting)
- [Post-Deployment Setup](#post-deployment-setup)
- [Admin Setup](#admin-setup)
- [Maintenance](#maintenance)

## Prerequisites

Before deploying, ensure you have:

- Node.js 18+ and Bun installed
- Git installed
- A Vercel, Netlify, or hosting provider account
- (Optional) MongoDB Atlas account (if migrating from SQLite)

## Local Setup

1. Clone the repository:
```bash
git clone <your-repository-url>
cd my-project
```

2. Install dependencies:
```bash
bun install
```

3. Set up the database:
```bash
bun run db:push
```

4. Run the development server:
```bash
bun run dev
```

5. Visit `http://localhost:3000` to verify everything works.

## Database Setup

### Using SQLite (Default)

The project is configured to use SQLite by default. The database file is located at `db/custom.db`.

No additional setup is required for SQLite.

### Migrating to MongoDB Atlas (Optional)

If you want to use MongoDB Atlas instead of SQLite:

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster and database
3. Get your connection string from Atlas
4. Install MongoDB dependencies:
```bash
bun add mongodb
```

5. Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

6. Update your environment variable:
```env
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/rbagro?retryWrites=true&w=majority"
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="file:./db/custom.db"

# For MongoDB (if using)
# DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/rbagro"

# NextAuth (optional, for advanced auth)
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-secret-key-here"
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest platform for deploying Next.js applications.

#### Step 1: Prepare for Deployment

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/rb-agro.git
git push -u origin main
```

#### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `bun run build`
   - Output Directory: `.next`
   - Install Command: `bun install`
5. Add environment variables:
   - `DATABASE_URL` = your database connection string
6. Click "Deploy"
7. Wait for deployment to complete (usually 2-3 minutes)

#### Step 3: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain (e.g., `rbagro.com`)
3. Follow the DNS instructions provided by Vercel

### Option 2: Netlify

Netlify is another great option for deployment.

#### Step 1: Build for Production

```bash
bun run build
```

#### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" > "Deploy manually"
3. Drag and drop your `.next` folder or connect your Git repository
4. Configure build settings:
   - Build command: `bun run build`
   - Publish directory: `.next`
5. Add environment variables in Site Settings > Environment variables
6. Deploy

### Option 3: Self-Hosting

For self-hosting, you can use:

#### Using Docker

1. Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json bun.lockb ./
RUN npm install -g bun
RUN bun install
COPY . .
RUN bun run build
EXPOSE 3000
CMD ["bun", "start"]
```

2. Build and run:
```bash
docker build -t rb-agro .
docker run -p 3000:3000 --env-file .env rb-agro
```

#### Using PM2

1. Build the project:
```bash
bun run build
```

2. Start with PM2:
```bash
pm2 start bun --name "rb-agro" -- start
pm2 save
pm2 startup
```

## Post-Deployment Setup

### 1. Admin Account Setup

After deployment, you need to create an admin account:

1. Visit `https://your-domain.com/admin`
2. You'll see a login screen
3. First, scroll down to "First Time Setup" section
4. Enter your admin email and password
5. Click "Create Admin Account"
6. You can now login with these credentials

### 2. Add Products

1. Login to admin panel at `/admin`
2. Click "Manage Products"
3. Click "Add Product"
4. Fill in product details:
   - Product Name
   - Category (Organic Fertilizers, NPK Fertilizers, Micronutrients)
   - Price (in Rupees)
   - Image URL (can use a hosted image or data URI)
   - Description
   - Stock status
5. Click "Create Product"

### 3. Test All Features

Verify all functionality works:
- [ ] Homepage loads correctly
- [ ] About page displays content
- [ ] Products page shows catalog
- [ ] Contact page is accessible
- [ ] Feedback form submits correctly
- [ ] Admin login works
- [ ] Can view feedback in admin
- [ ] Can add/edit/delete products

## Admin Setup

### Creating Admin Account

The admin account can only be created from the admin dashboard:

1. Navigate to `/admin`
2. Login with temporary credentials or create new account
3. In the dashboard, find the "First Time Setup" card
4. Enter email and password for your admin account
5. Click "Create Admin Account"

**Important:** Store your admin credentials securely. If you lose them, you'll need to reset them through the database.

### Resetting Admin Password

If you forget your admin password:

1. Access your database directly
2. Delete the admin record or reset the password hash
3. Create a new admin account using the setup form

### Accessing Admin Panel

- Admin URL: `https://your-domain.com/admin`
- Admin is NOT linked from public pages (as requested)
- Access only by visiting the URL directly

## Maintenance

### Regular Updates

1. Update dependencies:
```bash
bun update
```

2. Test changes locally:
```bash
bun run dev
```

3. Deploy updates:
```bash
git add .
git commit -m "Update description"
git push
```

### Database Backups

#### For SQLite

Back up the `db/custom.db` file regularly:
```bash
cp db/custom.db backups/custom-$(date +%Y%m%d).db
```

#### For MongoDB Atlas

MongoDB Atlas provides automatic backups. Check your Atlas dashboard for backup configurations.

### Monitoring

- Monitor Vercel/Netlify logs for errors
- Set up error tracking (e.g., Sentry)
- Regularly check the admin panel for feedback
- Monitor website uptime with tools like UptimeRobot

## Troubleshooting

### Build Errors

If deployment fails:

1. Check environment variables are set correctly
2. Verify all dependencies are installed
3. Check the build logs for specific errors
4. Ensure `DATABASE_URL` is correctly configured

### Database Connection Issues

- Verify the database URL is correct
- Check firewall rules if using external database
- For MongoDB Atlas, ensure IP whitelist includes your deployment server

### Images Not Loading

- Ensure image URLs are publicly accessible
- For self-hosted images, use a CDN or properly configure CORS
- Consider using services like Cloudinary for image hosting

## Performance Optimization

1. **Image Optimization**
   - Use Next.js Image component for better optimization
   - Compress images before uploading
   - Consider using a CDN

2. **Database Optimization**
   - Add indexes for frequently queried fields
   - Use connection pooling
   - Cache frequently accessed data

3. **Caching**
   - Implement Redis for advanced caching (optional)
   - Use Next.js built-in caching features

## Security Best Practices

1. **Environment Variables**
   - Never commit `.env` files
   - Use strong, unique passwords
   - Rotate secrets regularly

2. **HTTPS**
   - Always use HTTPS in production
   - Most platforms provide free SSL certificates

3. **Rate Limiting**
   - Implement rate limiting on API endpoints
   - Protect against DDoS attacks

4. **Regular Updates**
   - Keep dependencies updated
   - Apply security patches promptly

## Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit [Prisma documentation](https://www.prisma.io/docs)
- Contact development support if available

## License

This project is proprietary and belongs to RB Agro.

---

**Last Updated:** {new Date().toLocaleDateString()}
