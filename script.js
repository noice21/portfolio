// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Gallery item click handler (placeholder for future expansion)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        console.log('Gallery item clicked');
        // Future: Add lightbox or modal functionality here
    });
});

// Video thumbnail selector
const videoThumbs = document.querySelectorAll('.video-thumb');
const mainVideo = document.getElementById('main-video');

// Auto-generate thumbnails from video frames
videoThumbs.forEach(thumb => {
    const videoSrc = thumb.getAttribute('data-video');
    const preview = thumb.querySelector('.thumb-preview');
    const thumbVideo = document.createElement('video');
    thumbVideo.src = videoSrc;
    thumbVideo.muted = true;
    thumbVideo.preload = 'metadata';
    thumbVideo.style.width = '100%';
    thumbVideo.style.height = '100%';
    thumbVideo.style.objectFit = 'cover';
    thumbVideo.style.borderRadius = '4px';
    thumbVideo.style.pointerEvents = 'none';

    thumbVideo.addEventListener('loadeddata', function() {
        thumbVideo.currentTime = Math.min(2, thumbVideo.duration / 4);
        // Hide the play icon once video frame is loaded
        const playIcon = preview.querySelector('.thumb-play');
        if (playIcon) playIcon.style.display = 'none';
    });

    preview.appendChild(thumbVideo);
});

videoThumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');

        // Update active state
        videoThumbs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Swap and play the video
        mainVideo.pause();
        mainVideo.querySelector('source').setAttribute('src', videoSrc);
        mainVideo.load();
        mainVideo.play();
    });
});

// Add navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
});
