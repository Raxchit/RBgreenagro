# 🚀 RB GREEN AGRO BANGYA INDUSTRIES PVT LTD - Complete Deployment Guide

**Deploy your RB GREEN AGRO BANGYA INDUSTRIES PVT LTD agriculture fertilizer website from scratch to production**

## ⚠️ SECURITY WARNING

**CRITICAL:** Never use default or example credentials in production. Always create unique, strong passwords and keep them secure. Do not commit credentials to version control.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Understanding Your Options](#understanding-your-options)
3. [Preparation Checklist](#preparation-checklist)
4. [Deployment Methods](#deployment-methods)
   - [Method 1: Vercel (Easiest & Free - Recommended)](#method-1-vercel-easiest--free--recommended)
   - [Method 2: Netlify (Free & Simple)](#method-2-netlify-free--simple)
   - [Method 3: Traditional VPS Hosting](#method-3-traditional-vps-hosting)
5. [Post-Deployment Steps](#post-deployment-steps)
6. [Maintenance & Updates](#maintenance--updates)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### What You Need Before Starting

✅ **A Computer** with internet access  
✅ **A GitHub Account** (free) - Create at [github.com](https://github.com)  
✅ **Basic Computer Skills** - No programming knowledge needed  
✅ **Your Website Files** - Already completed in this project  

### Optional but Helpful

- **Custom Domain Name** (like rbagro.com) - Optional, costs ~$10-15/year
- **Credit Card** (only needed if buying custom domain)
- **Email Address** for account registration

---

## Understanding Your Options

### Option Comparison Table

| Platform | Difficulty | Cost | Best For | Time to Deploy |
|----------|-----------|------|----------|----------------|
| **Vercel** | ⭐ Very Easy | Free | Most users | 5-10 minutes |
| **Netlify** | ⭐⭐ Easy | Free | Alternative | 5-10 minutes |
| **VPS/DigitalOcean** | ⭐⭐⭐⭐ Hard | $5-10/month | Advanced users | 1-2 hours |

### Our Recommendation: **Vercel**

**Why Vercel?**
- ✅ 100% Free for this project
- ✅ Automatic SSL (HTTPS) included
- ✅ Fast deployment (5 minutes)
- ✅ Custom domain support
- ✅ Built by Next.js creators (best performance)
- ✅ Automatic backups
- ✅ No technical knowledge required

---

## Preparation Checklist

Before deploying, make sure these are complete:

### Step 1: Test Locally (Optional but Recommended)

If you have the files locally:

```bash
# Install dependencies (if not already done)
bun install

# Run the development server
bun run dev
```

Visit `http://localhost:3000` to verify everything works.

### Step 2: Prepare Your Files

Make sure you have:
- ✅ All project files
- ✅ `package.json` file
- ✅ `prisma` folder with `schema.prisma`
- ✅ No `.env.local` file with secrets (don't upload this)

---

## Deployment Methods

---

## Method 1: Vercel (Easiest & Free - Recommended) ⭐

### Phase 1: Setup Your GitHub Repository (Required)

Vercel connects to GitHub to automatically deploy your website.

#### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in (or sign up for free)
2. Click the **+** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `rb-agro-website` (or any name you prefer)
   - **Description**: RB GREEN AGRO BANGYA INDUSTRIES PVT LTD agriculture fertilizer website
   - **Public/Private**: Choose either (doesn't matter for free hosting)
5. Click **"Create repository"**

#### Step 2: Upload Your Files

**Option A: Using GitHub Website (Easiest)**

1. After creating the repository, you'll see options
2. Scroll down to the section that says "push an existing repository from the command line"
3. **BUT** - Since you're uploading for the first time, use the **"uploading an existing file"** option:
   - Look for "uploading an existing file" link
   - Or simply drag and drop your entire project folder
   - Click **"Upload files"**
   - Wait for upload to complete
   - Click **"Commit changes"**

**Option B: Using Command Line (If you're comfortable)**

Open terminal/command prompt in your project folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - RB GREEN AGRO BANGYA INDUSTRIES PVT LTD website"

# Add your repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/rb-agro-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Phase 2: Deploy on Vercel

#### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. **Sign up with GitHub** (recommended) - this makes deployment easier
4. Follow the setup instructions

#### Step 2: Import Your Repository

1. After logging in to Vercel, click **"Add New..."** button
2. Select **"Project"**
3. You'll see your GitHub repositories
4. Find `rb-agro-website` (or your repository name)
5. Click **"Import"**

#### Step 3: Configure Project Settings

Vercel will detect Next.js automatically. Review these settings:

**Framework Preset:**
- Framework: **Next.js**
- Root Directory: **./** (default is correct)
- Build Command: **bun run build** (should be auto-detected)
- Output Directory: **.next** (should be auto-detected)
- Install Command: **bun install** (should be auto-detected)

**Environment Variables:**
This is important! Click **"Environment Variables"** section and add:

| Name | Value |
|------|-------|
| `DATABASE_URL` | `file:./db/custom.db` |

#### Step 4: Deploy

1. Click the **"Deploy"** button
2. Wait for deployment (usually 1-3 minutes)
3. You'll see a progress bar and build logs
4. When finished, you'll see **"Congratulations!"** message
5. Click the **"Visit"** button or use the provided URL

**Your website is now LIVE!** 🎉

### Phase 3: Set Up Custom Domain (Optional but Recommended)

If you want to use your own domain (like `rbagro.com` or `rbagro.com.np`):

#### Step 1: Purchase Domain

1. Buy a domain from any registrar:
   - Namecheap (namecheap.com)
   - GoDaddy (godaddy.com)
   - Domain.com
   - Nepal-based: eHostingServer.com.np, mercantile.com.np

#### Step 2: Add Domain in Vercel

1. In your Vercel project dashboard
2. Go to **Settings** → **Domains**
3. Click **"Add"** button
4. Enter your domain (e.g., `rbagro.com`)
5. Choose if you want `www.rbagro.com` to redirect (recommended)

#### Step 3: Update DNS Settings

Vercel will show you DNS records to add. Log into your domain registrar and add these records:

**For `rbagro.com`:**
- Type: `CNAME`
- Name: `@` (or leave blank depending on registrar)
- Value: `cname.vercel-dns.com`

**For `www.rbagro.com`:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

#### Step 4: Verify

Wait 5-10 minutes (sometimes up to 24 hours) for DNS to propagate. Vercel will show a green checkmark when complete.

---

## Method 2: Netlify (Free & Simple)

Netlify is an alternative to Vercel. Here's how to deploy:

### Step 1: Create Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Connect your GitHub account

### Step 2: Deploy Your Site

1. Click **"Add new site"** → **"Import an existing project"**
2. Select your GitHub repository
3. Configure build settings:

**Build Settings:**
- Build command: `bun run build`
- Publish directory: `.next`

**Environment Variables:**
- Add `DATABASE_URL` = `file:./db/custom.db`

4. Click **"Deploy site"**

### Step 3: Access Your Site

Netlify will generate a random URL like:
- `https://calm-mountain-123456.netlify.app`

You can add a custom domain in **Domain settings**.

---

## Method 3: Traditional VPS Hosting

This method requires more technical knowledge. You'll need:
- A VPS provider (DigitalOcean, Linode, AWS, etc.)
- Basic Linux command line knowledge
- About 1-2 hours

### Quick Overview (For Advanced Users)

1. **Buy VPS** - DigitalOcean $5/month (Ubuntu)
2. **SSH into Server:**
   ```bash
   ssh root@your-server-ip
   ```
3. **Install Dependencies:**
   ```bash
   apt update
   apt install -y nodejs npm git nginx
   npm install -g bun
   ```
4. **Clone Your Repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/rb-agro-website.git
   cd rb-agro-website
   ```
5. **Build the App:**
   ```bash
   bun install
   bun run build
   ```
6. **Setup PM2 (Process Manager):**
   ```bash
   npm install -g pm2
   pm2 start bun --name "rb-agro" -- start
   pm2 save
   pm2 startup
   ```
7. **Configure Nginx as Reverse Proxy**
8. **Setup SSL with Let's Encrypt**

---

## Post-Deployment Steps

After your website is live, complete these steps:

### 1. Access Your Admin Panel

Your admin panel is at:
```
https://your-domain.com/admin
```

### 2. Initialize Your Admin Account

Since this is a new deployment:

1. Visit `https://your-domain.com/admin`
2. Scroll to **"First Time Setup"** section
3. Enter your admin credentials:
   - **Email**: [YOUR_ADMIN_EMAIL]
   - **Password**: [YOUR_SECURE_PASSWORD]
4. Click **"Create Admin Account"**
5. Login with these credentials

### 3. Add Your Products

1. In admin dashboard, click **"Manage Products"**
2. Click **"Add Product"**
3. Add your fertilizer products:
   - Name (e.g., "Urea Fertilizer 46%")
   - Category (Organic/NPK/Micronutrient)
   - Price (e.g., "1200")
   - Image URL (use publicly accessible images)
   - Description
   - Stock status
4. Repeat for all products

### 4. Test Everything

Go through these checklists:

**Public Site:**
- [ ] Homepage loads correctly
- [ ] About page displays content
- [ ] Products page shows catalog
- [ ] Contact page is accessible
- [ ] Feedback form works

**Admin Panel:**
- [ ] Can login at /admin
- [ ] Can view feedback submissions
- [ ] Can add new products
- [ ] Can edit existing products
- [ ] Can delete products

---

## Maintenance & Updates

### How to Update Your Website

After deployment, making changes is easy:

#### 1. Make Changes Locally

Edit your website files on your computer.

#### 2. Test Changes

```bash
bun run dev
```

Verify changes work at `http://localhost:3000`

#### 3. Push to GitHub

```bash
git add .
git commit -m "Update: describe your changes"
git push
```

#### 4. Automatic Deployment

**With Vercel:** Deployment happens automatically within 1-2 minutes!  
**With Netlify:** Same, automatic deployment on push!

### Backup Your Data

#### For SQLite (Database):

1. Download the database file from your server periodically
2. Location: `db/custom.db`
3. Store backups safely

#### For Vercel:

Vercel provides automatic backups. Check:
- Project → Deployments → Previous deployments

### Monitor Your Website

- **Check regularly** that the site is accessible
- **Test forms** weekly
- **Update content** as needed
- **Review feedback** in admin panel

---

## Troubleshooting

### Common Issues & Solutions

#### Issue 1: "Build Failed" in Vercel

**Solution:**
1. Check the build logs for errors
2. Ensure `package.json` has correct scripts
3. Verify environment variables are set correctly
4. Try redeploying: Deployments → Redeploy

#### Issue 2: Images Not Loading

**Solution:**
1. Ensure image URLs are publicly accessible
2. Use https:// for image URLs (not http://)
3. Test images in browser directly
4. Consider using image hosting services like:
   - Cloudinary (free tier available)
   - Imgur
   - Your own hosting

#### Issue 3: Admin Panel Not Working

**Solution:**
1. Clear browser cache and cookies
2. Try in incognito/private mode
3. Check browser console for errors (F12 → Console)
4. Verify database is initialized
5. Recreate admin account if needed

#### Issue 4: Website Loading Slowly

**Solution:**
1. Optimize images (compress before upload)
2. Use Next.js Image component (already implemented)
3. Consider using CDN for static assets
4. Check Vercel Analytics for bottlenecks

#### Issue 5: Database Issues

**Solution:**
1. Check DATABASE_URL environment variable
2. Verify database file exists
3. For SQLite, ensure db folder exists
4. Check file permissions

#### Issue 6: Feedback Form Not Submitting

**Solution:**
1. Check API route is deployed
2. Verify database connection
3. Check browser console for errors
4. Test API endpoint directly

---

## Getting Help

### Resources

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues**: Check repository issues tab
- **Stack Overflow**: Search for your specific error

### Contact Support

If you need professional help:
- Consider hiring a developer on:
  - Upwork.com
  - Fiverr.com
  - Freelancer.com

---

## Security Best Practices

### Important Security Tips

1. **Never share** your admin credentials
2. **Use strong passwords** (minimum 12 characters)
3. **Change default passwords** regularly
4. **Keep dependencies updated**
5. **Monitor feedback submissions** for spam
6. **Backup your database regularly**
7. **Enable HTTPS** (automatic on Vercel/Netlify)
8. **Don't commit** `.env` files to GitHub

---

## Cost Summary

### Free Options (Recommended)

| Service | Cost | What You Get |
|---------|------|--------------|
| Vercel | **$0** | Hosting, SSL, CDN |
| GitHub | **$0** | Code repository |
| Custom Domain | **$0-$15/year** | Your own domain (optional) |

### Paid Options

| Service | Cost | Why Pay |
|---------|------|---------|
| Custom Domain | $10-15/year | Professional appearance |
| VPS Hosting | $5-10/month | Full control |
| Cloudinary | Free tier | Better image hosting |

---

## Summary Checklist

### Before Deploying:
- [ ] Files tested locally
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created

### During Deployment:
- [ ] Repository imported to Vercel
- [ ] Environment variables added
- [ ] Deployment successful
- [ ] Website accessible

### After Deploying:
- [ ] Admin account created
- [ ] Products added
- [ ] All features tested
- [ ] Custom domain configured (optional)
- [ ] Backup plan in place

---

## 🎉 Congratulations!

Your RB GREEN AGRO BANGYA INDUSTRIES PVT LTD website is now live! Here's what you've achieved:

✅ Professional website for your agriculture fertilizer business  
✅ Online presence 24/7  
✅ Admin panel for easy management  
✅ Product catalog for customers  
✅ Contact and feedback forms  
✅ Free hosting (or minimal cost)  
✅ SSL security included  
✅ Easy updates through GitHub  

---

## Next Steps

Now that your site is live:

1. **Share your website** with customers
2. **Update products** regularly
3. **Monitor feedback** and respond
4. **Improve content** based on customer needs
5. **Consider adding** new features as you grow

---

**Need Help?**  
Check the troubleshooting section or seek professional assistance if needed.

---

**Last Updated:** {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

---

*Built for RB GREEN AGRO BANGYA INDUSTRIES PVT LTD - Quality Fertilizers for Better Harvests* 🌾
