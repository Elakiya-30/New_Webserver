// --- Custom Cursor ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    // Smooth trailing effect for outline
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor Hover Effects on interactive elements
const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-item, .service-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.borderColor = 'var(--primary)';
        cursorOutline.style.backgroundColor = 'rgba(94, 53, 177, 0.1)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        cursorOutline.style.backgroundColor = 'transparent';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// --- Create Grid for Project 3 ---
const cssArt3 = document.querySelector('.css-art-3');
if (cssArt3) {
    for(let i=0; i<9; i++) {
        const div = document.createElement('div');
        cssArt3.appendChild(div);
    }
}

// --- Navbar Scrolled State ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Scroll Reveal Animation ---
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// --- Back to Top ---
const bttBtn = document.getElementById('btt');
if (bttBtn) {
    bttBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// --- Form Submit Prevention (Demo) ---
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Sent Successfully <i class="fa-solid fa-check"></i>';
        btn.style.background = '#00c853';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = 'var(--primary)';
            form.reset();
        }, 3000);
    });
}
