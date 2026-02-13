# Portfolio Website

A clean, modern portfolio website to showcase your game development projects and client websites.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Project filtering (All, Games, Websites)
- Modern gradient design
- Easy to customize

## Getting Started

1. Open `index.html` in your web browser to view the website
2. Customize the content to match your personal information and projects

## Customization Guide

### Personal Information

Edit [index.html](index.html) to update:

- **Line 13**: Change "Your Name" to your actual name
- **Line 27-28**: Update the hero title and subtitle
- **Line 39-42**: Update the about section description
- **Line 45-49**: Modify skill tags to match your skills

### Featured Game Project

Edit the game project section:

- **Line 83**: Change "Your Game Title"
- **Line 84-87**: Update the game description
- **Line 97-101**: Update platform and status information
- **Line 107-112**: Modify key features list

### Client Website Projects

Edit the website project cards ([index.html:123-172](index.html#L123-L172)):

- Update project titles, descriptions, and technology tags
- Add or remove project cards as needed
- Replace placeholder previews with actual website screenshots

### Contact Information

Update contact links ([index.html:184-186](index.html#L184-L186)):

- **Line 184**: Replace with your email address
- **Line 185-186**: Replace with your social media profiles

### Colors and Styling

Edit [styles.css](styles.css) to customize colors:

- **Line 9-10**: Primary color scheme (currently purple/indigo)
- **Line 75**: Hero section gradient background
- Modify any other colors in the `:root` section

## Adding Gameplay Videos

The featured game section supports video playback for showcasing gameplay footage.

### Setting Up Your Video

1. Create a `videos` folder in the same directory as `index.html`
2. Add your gameplay video to this folder (recommended: MP4 format for best compatibility)
3. Create an `images` folder and add a thumbnail image for the video poster

The video is already configured in [index.html:72-76](index.html#L72-L76). Just update the file paths:

```html
<video class="game-video" controls poster="images/game-thumbnail.jpg">
    <source src="videos/gameplay.mp4" type="video/mp4">
    <source src="videos/gameplay.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

**Tips for gameplay videos:**
- Keep videos under 50MB for faster loading
- Use 1080p resolution for best quality
- Recommended length: 30-90 seconds
- MP4 format works on all browsers
- The `poster` attribute shows a thumbnail before the video plays

### Using an Image Instead of Video

If you prefer to use a static image instead of a video, comment out the video section and use the image option:

```html
<!-- Option 2: Use image (comment out video above and uncomment this) -->
<img src="images/game-screenshot.jpg" alt="Game Screenshot" class="game-image">
```

## Adding Character Images

The portfolio includes a "Meet the Characters" section to showcase your game characters.

### Adding Your Character Images

1. Create an `images` folder (if you haven't already)
2. Add your character images (character1.png, character2.png, character3.png)
3. Update the character information in [index.html:115-151](index.html#L115-L151):

```html
<div class="character-card">
    <div class="character-image">
        <img src="images/character1.png" alt="Character 1">
    </div>
    <div class="character-info">
        <h5>Your Character Name</h5>
        <p class="character-role">Hero</p>
        <p class="character-description">Description of the character's background and role.</p>
    </div>
</div>
```

**Tips for character images:**
- Use square images (1:1 aspect ratio) for best results
- PNG format with transparent backgrounds works great
- Recommended size: 800x800px or higher
- Add or remove character cards as needed (just copy/paste the structure)

### Adding/Removing Characters

To add more characters:
1. Copy one of the existing `character-card` divs
2. Paste it inside the `characters-grid`
3. Update the image, name, role, and description

To remove a character:
- Simply delete the entire `character-card` div for that character

## Adding Images/Screenshots

To add your own images for the gallery:

1. Create an `images` folder in the same directory as `index.html` (if you haven't already)
2. Add your screenshots to this folder
3. Replace the placeholder divs in the gallery section:

```html
<!-- Replace this: -->
<div class="gallery-item">Screenshot 1</div>

<!-- With this: -->
<div class="gallery-item">
    <img src="images/screenshot1.jpg" alt="Game Screenshot 1" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

## Adding More Projects

To add more client website projects:

1. Copy one of the existing `small-project-card` divs ([index.html:123-138](index.html#L123-L138))
2. Paste it inside the `website-projects-grid` div
3. Update the content with your project information
4. Save and refresh the page

Example:
```html
<div class="small-project-card" data-category="website">
    <div class="small-project-media">
        <img src="images/project-preview.jpg" alt="Project Preview">
    </div>
    <div class="small-project-info">
        <h4>Your Project Name</h4>
        <p>Brief description of the project.</p>
        <div class="project-tags">
            <span class="tag">HTML/CSS</span>
            <span class="tag">JavaScript</span>
        </div>
    </div>
</div>
```

## Browser Support

This website works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## File Structure

```
profilio website/
├── index.html          # Main HTML file
├── styles.css          # Styling and layout
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Tips

- Keep descriptions concise and impactful
- Use high-quality screenshots for best presentation
- Test the website on mobile devices to ensure responsiveness
- Update the footer copyright year as needed ([index.html:194](index.html#L194))

## License

Free to use and modify for your personal portfolio.
