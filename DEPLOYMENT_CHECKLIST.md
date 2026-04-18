# ✅ Deployment Checklist - One Page Reference

**Use this checklist to ensure your deployment goes smoothly**

---

## 📋 Before You Start

**Required:**
- [ ] Computer with internet connection
- [ ] GitHub account (free at github.com)
- [ ] Project files ready

**Optional:**
- [ ] Custom domain name (rbagro.com, etc.)
- [ ] Credit card (only if buying domain)

---

## 🚀 Step 1: GitHub Setup (3 minutes)

- [ ] Go to github.com and log in
- [ ] Click **+** → **New repository**
- [ ] Name: `rb-agro-website`
- [ ] Create repository
- [ ] Upload all project files
- [ ] Click **Commit changes**

---

## 🚀 Step 2: Vercel Deployment (5 minutes)

- [ ] Go to vercel.com
- [ ] Sign up/login with GitHub
- [ ] Click **Add New...** → **Project**
- [ ] Import `rb-agro-website` repository
- [ ] Verify: Framework = Next.js (auto-detected)
- [ ] Add environment variable:
  - Name: `DATABASE_URL`
  - Value: `file:./db/custom.db`
- [ ] Click **Deploy**
- [ ] Wait for build completion (1-3 min)
- [ ] Click **Visit** to see your site

---

## 🚀 Step 3: Admin Setup (3 minutes)

- [ ] Go to `https://your-site.vercel.app/admin`
- [ ] Scroll to "First Time Setup"
- [ ] Enter admin credentials:
  - Email: rachitkalwar92@gmail.com
  - Password: admin@123
- [ ] Click **Create Admin Account**
- [ ] Login with these credentials

---

## 🚀 Step 4: Add Products (5+ minutes)

- [ ] Click **Manage Products**
- [ ] Click **Add Product**
- [ ] Fill in:
  - [ ] Product name
  - [ ] Category
  - [ ] Price
  - [ ] Image URL
  - [ ] Description
  - [ ] Stock status
- [ ] Click **Create Product**
- [ ] Repeat for all products

---

## ✅ Final Verification

**Check these items:**

**Public Site:**
- [ ] Homepage loads
- [ ] About page works
- [ ] Products page displays
- [ ] Contact page accessible
- [ ] Feedback form submits

**Admin Panel:**
- [ ] Can login at /admin
- [ ] Can view feedback
- [ ] Can add products
- [ ] Can edit products
- [ ] Can delete products

**Technical:**
- [ ] HTTPS enabled (green lock)
- [ ] Mobile responsive
- [ ] Images load correctly
- [ ] All links work

---

## 🌐 Optional: Custom Domain

**If you want your own domain (rbagro.com):**

- [ ] Buy domain from registrar (Namecheap, GoDaddy, etc.)
- [ ] Go to Vercel → Settings → Domains
- [ ] Add your domain
- [ ] Add DNS records in domain registrar:
  - Type: CNAME
  - Name: @
  - Value: cname.vercel-dns.com
- [ ] Wait 10-30 minutes
- [ ] Verify DNS propagated (green check in Vercel)

---

## 📝 Save This Info

**Keep these details safe:**

```
GitHub Repository:
URL: https://github.com/YOUR_USERNAME/rb-agro-website

Vercel URL:
Live Site: https://your-site.vercel.app
Admin URL: https://your-site.vercel.app/admin

Admin Credentials:
Email: rachitkalwar92@gmail.com
Password: admin@123

Domain (if applicable):
Domain: rbagro.com
Registrar: [Your Registrar]
```

---

## 🔄 How to Update (Future Changes)

**Updating your website is simple:**

1. [ ] Edit files on your computer
2. [ ] Test locally: `bun run dev`
3. [ ] Commit changes: `git add . && git commit -m "Update"`
4. [ ] Push: `git push`
5. [ ] Vercel auto-deploys in 1-2 minutes!

---

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Build failed | Check Vercel build logs, verify env vars |
| Admin not working | Clear browser cache, try incognito |
| Images not loading | Use https:// URLs |
| Page not found | Check if deployment is complete |
| 404 on /admin | Verify deployment finished |

---

## 📞 Need More Help?

- **Quick Start Guide**: [QUICK_START.md](./QUICK_START.md)
- **Detailed Guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Visual Flow**: [DEPLOYMENT_FLOW.md](./DEPLOYMENT_FLOW.md)
- **Vercel Docs**: https://vercel.com/docs

---

## 🎉 You're Done!

**Your RB Agro website is live!**

**Share your URL:** `https://your-site.vercel.app`

---

**Happy Deploying! 🚀**
