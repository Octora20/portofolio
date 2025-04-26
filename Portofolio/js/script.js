// Animate skill bars
window.addEventListener("load", () => {
    const bars = document.querySelectorAll(".fill");
    bars.forEach((bar) => {
      const percent = bar.dataset.percent;
      if (percent) {
        setTimeout(() => {
          bar.style.width = percent;
          bar.textContent = percent;
        }, 300);
      }
    });
  });
  
  // Form handler
  const form = document.getElementById("contactForm");
  const statusMessage = document.getElementById("status");
  
  if (form && statusMessage) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      statusMessage.textContent = "Thank you! Your message was sent.";
      form.reset();
    });
  }
  
  // Sidebar toggle
  function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");
  
    if (menu && overlay) {
      menu.classList.toggle("show");
      overlay.classList.toggle("show");
    }
  }
  
  // Auto-hide menu after clicking a link (safe check)
  document.querySelectorAll("#mobileMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu();
    });
  });
  
  // Smooth scroll dengan offset navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      const navbarHeight = document.querySelector('.navbar').offsetHeight; // ambil tinggi navbar
  
      if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight + 1;
; // kurangin tinggi navbar
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section, .about, .menu, .hobbies, .music-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  