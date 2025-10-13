# Deployment Guide

This guide will help you deploy your personal website to various hosting platforms.

## 🚀 Quick Start - GitHub Pages

### Method 1: Direct Upload (Easiest)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `your-username.github.io` (replace with your actual username)
   - Make it public

2. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all your website files
   - Commit the changes

3. **Your Site is Live!**
   - Visit `https://your-username.github.io`
   - Your website should be live within a few minutes

### Method 2: Git Commands (Recommended)

1. **Initialize Git Repository**
   ```bash
   cd personal-website
   git init
   git add .
   git commit -m "Initial commit - Personal website"
   ```

2. **Connect to GitHub**
   ```bash
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

## 🌐 Other Hosting Options

### Netlify (Recommended Alternative)

1. **Sign up** at [Netlify](https://netlify.com)
2. **Deploy Options**:
   - **Drag & Drop**: Simply drag your website folder to Netlify
   - **Git Integration**: Connect your GitHub repository
   - **CLI**: Use Netlify CLI for advanced deployments

3. **Custom Domain**: Add your own domain name (optional)

### Vercel

1. **Sign up** at [Vercel](https://vercel.com)
2. **Import Project**: Connect your GitHub repository
3. **Deploy**: Automatic deployment on every push

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Deploy**
   ```bash
   firebase deploy
   ```

## 📝 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Replace all placeholder content with your actual information
- [ ] Update contact email address
- [ ] Add your actual profile photo
- [ ] Update project descriptions and links
- [ ] Test the website on different devices
- [ ] Check all links work correctly
- [ ] Verify dark mode toggle works
- [ ] Test mobile navigation
- [ ] Add your resume PDF (if ready)

## 🔧 Custom Domain Setup

### GitHub Pages with Custom Domain

1. **Add Domain File**
   - Create a file named `CNAME` in your repository root
   - Add your domain name (e.g., `yourname.com`)

2. **Configure DNS**
   - Add CNAME record pointing to `your-username.github.io`
   - Or add A records pointing to GitHub Pages IPs

3. **Enable HTTPS**
   - In GitHub Pages settings, check "Enforce HTTPS"

### Netlify with Custom Domain

1. **Add Domain in Netlify Dashboard**
2. **Update DNS Records**
3. **Enable HTTPS** (automatic with Netlify)

## 📊 Analytics Setup

### Google Analytics

1. **Create Google Analytics Account**
2. **Get Tracking ID**
3. **Add to Your Website**
   ```html
   <!-- Add to <head> section of all HTML files -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

## 🛡️ Security Considerations

- **Contact Form**: Use a service like Formspree instead of direct email
- **HTTPS**: Always use HTTPS in production
- **Content Security Policy**: Add CSP headers if needed
- **Regular Updates**: Keep your content and dependencies updated

## 🔄 Continuous Deployment

### Automatic Updates

1. **Connect Repository** to your hosting platform
2. **Enable Auto-Deploy** on push to main branch
3. **Test Changes** on a staging branch first

### Workflow Example

```bash
# Make changes to your website
git add .
git commit -m "Update project information"
git push origin main

# Website automatically deploys (if connected)
```

## 🐛 Troubleshooting

### Common Issues

**Website not loading:**
- Check if repository is public
- Verify GitHub Pages is enabled
- Wait a few minutes for propagation

**Images not showing:**
- Check file paths are correct
- Ensure images are committed to repository
- Use relative paths (e.g., `./assets/images/photo.jpg`)

**Dark mode not working:**
- Check browser console for JavaScript errors
- Ensure script.js is loaded correctly
- Test on different browsers

**Mobile menu not working:**
- Check if JavaScript is enabled
- Verify hamburger button has correct IDs
- Test touch events on mobile devices

### Getting Help

1. **Check Browser Console** for error messages
2. **Validate HTML** using W3C validator
3. **Test on Multiple Browsers** and devices
4. **Check Hosting Platform Logs** for server errors

## 📱 Mobile Testing

Test your website on:
- **Desktop**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Tablet**: iPad, Android tablets
- **Different Screen Sizes**: Use browser dev tools

## 🎯 Performance Optimization

### Before Deployment

- [ ] Optimize images (compress, use WebP when possible)
- [ ] Minify CSS and JavaScript (optional)
- [ ] Test loading speed with PageSpeed Insights
- [ ] Enable compression on your hosting platform

### After Deployment

- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Monitor with analytics
- [ ] Regular performance reviews

---

**Your website is now ready to impress potential employers!** 🎉

Remember to keep your content updated and regularly check for any issues.
