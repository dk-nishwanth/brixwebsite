# Content Replacement Guide for Brixnet

This guide shows you where to add your actual Brixnet content.

## 📝 Files to Update with Your Content:

### 1. **Hero Section** (`src/components/CinematicHero.tsx`)
- Line with `[Add your company tagline...]`
- Replace with your main value proposition

### 2. **About Section** (`src/components/EditorialAbout.tsx`)
- Line with `[Replace with your company's philosophy...]`
- Add your company story, mission, and values

### 3. **Services Section** (`src/components/EditorialServices.tsx`)
- Replace `[Service 1 Name]`, `[Service 2 Name]`, etc.
- Add your actual service names and descriptions
- You can add more services by copying the service object structure

### 4. **Projects Section** (`src/components/ProjectsGrid.tsx`)
- Replace `[Project 1 Name]`, `[Category]`, `[Year]`
- Add your actual project names, categories, and years
- Add more projects by copying the project object structure

### 5. **Footer** (`src/components/Footer.tsx`)
- Update email: `info@brixnet.in`
- Add phone number
- Update company description

## 🎨 How to Add Images:

1. Place your images in `public/images/` folder
2. Update image placeholders in components
3. Example: `<img src="/images/project1.jpg" alt="Project Name" />`

## 📋 Content Checklist:

- [ ] Company tagline/mission
- [ ] About us text
- [ ] Service names and descriptions
- [ ] Project names, categories, and years
- [ ] Contact information (email, phone)
- [ ] Social media links
- [ ] Company images/photos

## 💡 Tips:

- Keep text concise and impactful
- Use high-quality images
- Maintain consistent tone across all sections
- Test on mobile devices after adding content
