  // Mobile menu elements
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('mainNav');
    
    // Form elements
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMsg');
    const resetBtn = document.getElementById('resetBtn');

    // 1. Mobile Menu Toggle Logic
    menuBtn && menuBtn.addEventListener('click', (e)=>{
      e.stopPropagation(); 
      nav.classList.toggle('nav-open');
    });

    // 2. Close menu when clicking outside of the navigation
    document.addEventListener('click', (e) => {
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

// --- Go To Top Button Logic ---
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// 1. Show/Hide the button
window.onscroll = function() {
    // Show button if user scrolls more than 200px from the top
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// 2. Perform the scroll action
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};