// ====================
// Navbar Toggle
// ====================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ====================
// Dynamic Year
// ====================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ====================
// Fade-in Animation on Scroll
// ====================
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ====================
// Contact Form with WhatsApp Integration
// ====================
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (!name || !phone || !message) {
      status.textContent = "⚠️ Please fill all fields.";
      status.style.color = "red";
      return;
    }

    // Your WhatsApp number (no plus, no spaces)
    const farmNumber = "254795571316";

    const encodedMessage = encodeURIComponent(
      `Hello Elkanah Farm! 👋\nMy name is ${name}.\nPhone: ${phone}\n\n${message}`
    );

    // Auto-detect mobile or desktop
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappURL = isMobile
      ? `whatsapp://send?phone=${farmNumber}&text=${encodedMessage}`
      : `https://wa.me/${farmNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    status.textContent = "✅ Opening WhatsApp... You can send your message directly.";
    status.style.color = "green";
    form.reset();
  });
}
