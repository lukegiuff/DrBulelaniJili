# Assets Folder Structure

This directory contains all static assets for Dr. Bulelani Jili's website.

## Folder Organization

### 📁 `images/`
Main images directory organized by content type:

#### `images/profile/`
- Professional headshots and portraits
- Bio photos for About page
- Speaker photos for events
- **Recommended formats:** JPG, PNG, WebP
- **Recommended sizes:** 400x400px (square), 800x600px (landscape)

#### `images/videos/`
- Video thumbnails for Featured Videos section
- Conference presentation thumbnails
- Webinar preview images
- **Recommended formats:** JPG, PNG, WebP
- **Recommended sizes:** 1280x720px (16:9 aspect ratio)

#### `images/gallery/`
- Conference photos
- Speaking engagement photos
- Award ceremony images
- Professional event photography
- **Recommended formats:** JPG, PNG, WebP
- **Recommended sizes:** 1200x800px or larger

#### `images/backgrounds/`
- Hero section backgrounds
- Page header images
- Section background images
- **Recommended formats:** JPG, WebP
- **Recommended sizes:** 1920x1080px or larger

#### `images/icons/`
- Custom icons
- Research area icons
- Social media icons
- Navigation icons
- **Recommended formats:** SVG, PNG
- **Recommended sizes:** 24x24px, 48x48px, 96x96px

#### `images/logos/`
- University logos
- Institution logos
- Conference logos
- Publisher logos
- **Recommended formats:** SVG, PNG
- **Recommended sizes:** Various, maintain aspect ratio

## Usage in Next.js

To use these images in your components:

```jsx
import Image from 'next/image';

// For images in the assets folder
<Image 
  src="/assets/images/profile/dr-jili-headshot.jpg" 
  alt="Dr. Bulelani Jili"
  width={400}
  height={400}
/>
```

## File Naming Conventions

- Use lowercase letters
- Use hyphens instead of spaces
- Be descriptive but concise
- Include relevant dates for event photos

### Examples:
- `dr-jili-headshot-2024.jpg`
- `harvard-lecture-2024-03.jpg`
- `atlantic-council-panel-thumbnail.jpg`
- `georgetown-university-logo.svg`

## Image Optimization Tips

1. **Use WebP format** when possible for better compression
2. **Optimize file sizes** before uploading (aim for <500KB for most images)
3. **Use appropriate dimensions** - don't upload oversized images
4. **Include alt text** for accessibility
5. **Use Next.js Image component** for automatic optimization

## Supported Formats

- **Photos:** JPG, PNG, WebP
- **Graphics/Logos:** SVG, PNG
- **Icons:** SVG (preferred), PNG

---

*Last updated: June 2025* 