<<<<<<< HEAD
# Personal Website - Phong Vu

A modern, responsive personal website built with HTML, CSS, and JavaScript. Perfect for showcasing your portfolio, projects, and professional information for internship applications.

## 🚀 Features

- **Modern Design**: Clean, minimal design inspired by contemporary web development practices
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes with persistent user preference
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Animations**: Subtle animations and transitions for better user experience
- **SEO Optimized**: Semantic HTML structure for better search engine visibility
- **Accessibility**: Keyboard navigation and screen reader friendly
- **GitHub Pages Ready**: Optimized for easy deployment on GitHub Pages

## 📁 Project Structure

```
personal-website/
├── index.html          # Home page
├── projects.html       # Projects showcase
├── resume.html         # Resume and experience
├── about.html          # About me section
├── contact.html        # Contact information and form
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── assets/             # Images and other assets (create as needed)
│   ├── images/
│   └── icons/
└── README.md           # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#3b82f6) - Professional and trustworthy
- **Secondary**: Gray (#64748b) - Neutral and modern
- **Accent**: Amber (#f59e0b) - Warm and inviting
- **Dark Mode**: Automatic theme switching with system preference detection

### Typography
- **Font**: Inter - Modern, readable web font
- **Hierarchy**: Clear heading structure (H1-H4)
- **Readability**: Optimized line height and spacing

### Layout
- **Grid System**: CSS Grid and Flexbox for responsive layouts
- **Container**: Max-width 1200px with proper spacing
- **Breakpoints**: Mobile-first responsive design

## 🛠️ Customization Guide

### 1. Personal Information

#### Update Contact Information
- **File**: All HTML files
- **Search for**: `your-email@example.com`
- **Replace with**: Your actual email address

#### Update Social Links
- **GitHub**: Already set to `https://github.com/pvu06`
- **LinkedIn**: Already set to `https://www.linkedin.com/in/phongvu06`
- **Update**: Change URLs in all HTML files if needed

### 2. Content Customization

#### Home Page (`index.html`)
- **Name**: Update "Phong Vu" throughout the site
- **Title**: Modify "Sophomore Computer Science student at Georgia State University"
- **Description**: Update the hero description
- **Profile Photo**: Replace placeholder with your actual photo

#### Projects Page (`projects.html`)
- **Resume2Path**: Update project description, technologies, and features
- **Add Projects**: Copy the project card structure to add more projects
- **Screenshots**: Replace placeholder images with actual project screenshots

#### Resume Page (`resume.html`)
- **Education**: Update university, degree, and graduation date
- **Skills**: Modify programming languages and technologies
- **Experience**: Add work experience, internships, or volunteer work
- **Resume PDF**: Upload your actual resume and update the download link

#### About Page (`about.html`)
- **Why CS**: Personalize your motivation for studying computer science
- **Interests**: Update your areas of interest and focus
- **Internship Goals**: Modify what you're looking for in internships
- **Personal Qualities**: Customize your strengths and characteristics

#### Contact Page (`contact.html`)
- **Email**: Update contact email address
- **Form**: The contact form is currently a placeholder - integrate with a service like:
  - Formspree
  - Netlify Forms
  - EmailJS
  - Custom backend

### 3. Visual Customization

#### Colors (`css/styles.css`)
```css
:root {
    --primary-color: #3b82f6;    /* Change to your preferred color */
    --secondary-color: #64748b;  /* Accent color */
    --accent-color: #f59e0b;     /* Highlight color */
}
```

#### Fonts
- **Current**: Inter from Google Fonts
- **Change**: Update the Google Fonts link in HTML head sections
- **Custom**: Add your own font files to the assets folder

#### Images
- **Profile Photo**: Add to `assets/images/profile-photo.jpg`
- **Project Screenshots**: Add to `assets/images/projects/`
- **Background Images**: Optional - add to `assets/images/backgrounds/`

### 4. Adding New Sections

#### New Project Card
```html
<div class="project-card">
    <div class="project-header">
        <h2 class="project-title">Project Name</h2>
        <div class="project-links">
            <a href="project-url" class="project-link">
                <i class="fab fa-github"></i>
                GitHub
            </a>
        </div>
    </div>
    <div class="project-content">
        <!-- Project details -->
    </div>
</div>
```

#### New Page
1. Create new HTML file (e.g., `blog.html`)
2. Copy structure from existing page
3. Update navigation in all files
4. Add page-specific content
5. Update JavaScript if needed

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Create Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Your site will be available at `https://yourusername.github.io/your-repo-name`

### Other Hosting Options

- **Netlify**: Drag and drop the folder or connect your GitHub repo
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Traditional Web Hosting**: Upload files via FTP/SFTP

## 🎯 SEO Optimization

### Meta Tags
Add these to each HTML file's `<head>` section:
```html
<meta name="description" content="Your personal description">
<meta name="keywords" content="computer science, student, portfolio, projects">
<meta property="og:title" content="Your Name - Computer Science Student">
<meta property="og:description" content="Your description">
<meta property="og:image" content="path/to/your/image.jpg">
```

### Analytics
Add Google Analytics or other tracking:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🛡️ Security & Performance

### Contact Form Security
- Use a form service (Formspree, Netlify Forms) instead of direct email
- Add reCAPTCHA for spam protection
- Validate inputs on both client and server side

### Performance Optimization
- Optimize images (use WebP format when possible)
- Minify CSS and JavaScript for production
- Enable compression on your hosting provider
- Use a CDN for faster loading

## 🔧 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: CSS Grid, Flexbox, CSS Custom Properties
- **Fallbacks**: Graceful degradation for older browsers

## 📱 Mobile Optimization

- **Responsive Design**: Mobile-first approach
- **Touch Friendly**: Appropriate button sizes and spacing
- **Fast Loading**: Optimized for mobile networks
- **Offline Support**: Service worker (optional enhancement)

## 🎨 Customization Tips

### Adding Animations
```css
.your-element {
    transition: transform 0.3s ease;
}

.your-element:hover {
    transform: translateY(-5px);
}
```

### Custom CSS Variables
```css
:root {
    --your-custom-color: #your-color;
    --your-custom-spacing: 2rem;
}
```

### JavaScript Enhancements
```javascript
// Add your custom functionality
document.addEventListener('DOMContentLoaded', function() {
    // Your custom code here
});
```

## 📞 Support

If you need help customizing this website:

1. **Check the Comments**: Look for `TODO:` comments in the code
2. **Review Documentation**: Read through this README thoroughly
3. **Test Changes**: Always test on multiple devices and browsers
4. **Backup**: Keep a backup of your working version

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **Design Inspiration**: Modern web development practices
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Color Palette**: Tailwind CSS color system

---

**Happy Coding!** 🚀

Remember to:
- Replace all placeholder content with your actual information
- Test the website on different devices
- Keep your content updated
- Regularly backup your files
- Have fun showcasing your skills!

For questions or improvements, feel free to reach out or contribute to the project.
=======
# personal-website
>>>>>>> 0dc83c0b04ff73491aacb7cada659363926ca2ad
