
// Mobile menu elements
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');

// Form elements (preserved)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
const resetBtn = document.getElementById('resetBtn');

// 1. New Mobile Menu Toggle Logic
// Toggles the 'nav-open' class on the nav element when the button is clicked
menuBtn && menuBtn.addEventListener('click', (e)=>{
    e.stopPropagation(); // Prevents this click from immediately closing the menu via the document listener
    nav.classList.toggle('nav-open');
});

// 2. NEW: Close menu when clicking outside of the navigation
document.addEventListener('click', (e) => {
    // Check if the click target is NOT inside the navigation area AND NOT the menu button itself
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    nav.classList.remove('nav-open');
    }
});

// Simple form handling (FormSubmit is used in HTML)
resetBtn.addEventListener('click', ()=>{ 
    form.reset(); 
    msg.textContent = ''; 
});

// Smooth scrolling for anchor links (Modified to close menu on link click)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
        
        // Close menu when a link inside the menu is clicked
        nav.classList.remove('nav-open');
    }
    })
});