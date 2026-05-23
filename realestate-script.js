// realestate-script.js - Complete Interactive Features
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // ========== HERO SLIDER ==========
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dotsContainer = document.querySelector('.slider-dots');
  let currentSlide = 0;
  let slideInterval;

  function createDots() {
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    document.querySelectorAll('.dot')[currentSlide]?.classList.remove('active');
    document.querySelectorAll('.dot')[index]?.classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) next = 0;
    goToSlide(next);
  }

  function prevSlide() {
    let prev = currentSlide - 1;
    if (prev < 0) prev = slides.length - 1;
    goToSlide(prev);
  }

  if (slides.length > 0 && dotsContainer) {
    createDots();
    if (nextBtn) nextBtn.addEventListener('click', () => { clearInterval(slideInterval); nextSlide(); startAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { clearInterval(slideInterval); prevSlide(); startAutoSlide(); });
    startAutoSlide();
  }

  function startAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // ========== COUNTER ANIMATION ==========
  const statNumbers = document.querySelectorAll('.stat-number');
  function animateNumbers() {
    statNumbers.forEach(el => {
      const target = parseInt(el.getAttribute('data-count'));
      if (!target || el.innerText !== '0') return;
      let current = 0;
      const increment = target / 50;
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          el.innerText = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          el.innerText = target;
        }
      };
      updateCounter();
    });
  }

  const observerOptions = { threshold: 0.5 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers();
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) observer.observe(statsSection);

  // ========== PROPERTIES DATA ==========
  const properties = [
    { name: "Gulshan Presidential Tower", location: "Gulshan", type: "apartment", price: 35000000, priceText: "3.5 Crore", bedrooms: 4, area: "3200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Lake View Villa", location: "Banani", type: "villa", price: 55000000, priceText: "5.5 Crore", bedrooms: 5, area: "4500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Diplomatic Enclave", location: "Baridhara", type: "apartment", price: 42000000, priceText: "4.2 Crore", bedrooms: 3, area: "2800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Sky Garden", location: "Uttara", type: "apartment", price: 22000000, priceText: "2.2 Crore", bedrooms: 3, area: "2100 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Twin Penthouse", location: "Gulshan", type: "penthouse", price: 85000000, priceText: "8.5 Crore", bedrooms: 6, area: "5800 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Commercial Plaza", location: "Banani", type: "commercial", price: 120000000, priceText: "12 Crore", area: "8500 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" }
  ];

  function renderFeaturedProperties() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid) {
      featuredGrid.innerHTML = properties.slice(0, 3).map(prop => `
        <div class="property-card">
          <img src="${prop.image}" alt="${prop.name}" class="property-img">
          <div class="property-info">
            <h3>${prop.name}</h3>
            <div class="property-location"><i class="fas fa-map-pin"></i> ${prop.location}</div>
            <div class="property-price">৳ ${prop.priceText}</div>
            <p>${prop.bedrooms ? `${prop.bedrooms} Beds | ` : ''}${prop.area}</p>
            <a href="re-contact.html" class="btn-luxury" style="margin-top:16px; display:inline-block;">Inquire →</a>
          </div>
        </div>
      `).join('');
    }
  }

  function renderPropertiesGrid() {
    const grid = document.getElementById('propertiesGrid');
    if (!grid) return;
    
    let filtered = [...properties];
    const typeFilter = document.getElementById('propertyType')?.value;
    const locationFilter = document.getElementById('propertyLocation')?.value;
    const searchTerm = document.getElementById('searchProperty')?.value.toLowerCase();
    
    if (typeFilter && typeFilter !== 'all') filtered = filtered.filter(p => p.type === typeFilter);
    if (locationFilter && locationFilter !== 'all') filtered = filtered.filter(p => p.location.toLowerCase() === locationFilter);
    if (searchTerm) filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm) || p.location.toLowerCase().includes(searchTerm));
    
    grid.innerHTML = filtered.map(prop => `
      <div class="property-card">
        <img src="${prop.image}" alt="${prop.name}" class="property-img">
        <div class="property-info">
          <h3>${prop.name}</h3>
          <div class="property-location"><i class="fas fa-map-pin"></i> ${prop.location}</div>
          <div class="property-price">৳ ${prop.priceText}</div>
          <p>${prop.bedrooms ? `${prop.bedrooms} Beds | ` : ''}${prop.area}</p>
          <a href="re-contact.html" class="btn-luxury" style="margin-top:16px; display:inline-block;">Inquire →</a>
        </div>
      </div>
    `).join('');
  }

  // ========== GALLERY DATA ==========
  const galleryItems = [
    { category: "exterior", url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" },
    { category: "interior", url: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg" },
    { category: "exterior", url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" },
    { category: "interior", url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg" },
    { category: "amenities", url: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg" },
    { category: "exterior", url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" }
  ];

  function renderGallery(filter = 'all') {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    const filtered = filter === 'all' ? galleryItems : galleryItems.filter(i => i.category === filter);
    galleryGrid.innerHTML = filtered.map((item, idx) => `
      <div class="gallery-item" data-category="${item.category}">
        <img src="${item.url}?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" alt="Gallery Image">
        <div class="gallery-overlay">
          <i class="fas fa-search-plus"></i> View
        </div>
      </div>
    `).join('');
    
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        if (lightbox && lightboxImg) {
          lightboxImg.src = img.src;
          lightbox.classList.add('active');
        }
      });
    });
  }

  // ========== TESTIMONIAL SLIDER ==========
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testimonialDots = document.querySelector('.testimonial-dots');
  let currentTestimonial = 0;

  if (testimonialCards.length > 0 && testimonialDots) {
    testimonialCards.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showTestimonial(idx));
      testimonialDots.appendChild(dot);
    });
    
    function showTestimonial(index) {
      testimonialCards.forEach(card => card.style.display = 'none');
      testimonialCards[index].style.display = 'block';
      document.querySelectorAll('.testimonial-dots .dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      currentTestimonial = index;
    }
    
    testimonialCards.forEach(card => card.style.display = 'none');
    showTestimonial(0);
    
    setInterval(() => {
      let next = (currentTestimonial + 1) % testimonialCards.length;
      showTestimonial(next);
    }, 6000);
  }

  // ========== CONTACT FORM ==========
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('fullName')?.value.trim();
      const email = document.getElementById('emailAddress')?.value.trim();
      if (!name || !email) {
        showFeedback('Please provide name and email.', 'error');
        return;
      }
      showFeedback(`✨ Thank you ${name}! Our luxury property specialist will contact you within 24 hours.`, 'success');
      contactForm.reset();
    });
  }

  function showFeedback(msg, type) {
    const feedbackDiv = document.getElementById('formFeedback');
    if (feedbackDiv) {
      feedbackDiv.innerHTML = `<div style="background: ${type === 'success' ? 'rgba(212,175,55,0.15)' : 'rgba(255,68,68,0.15)'}; padding: 14px; border-radius: 28px; color: ${type === 'success' ? '#D4AF37' : '#ff6b6b'}; margin-top: 20px; text-align:center;">${msg}</div>`;
      setTimeout(() => { feedbackDiv.innerHTML = ''; }, 5000);
    }
  }

  // ========== NEWSLETTER ==========
  const newsBtn = document.getElementById('newsBtn');
  const newsBtn2 = document.getElementById('newsBtn2');
  
  function handleNewsletter(emailInput) {
    const email = emailInput?.value.trim();
    if (email && email.includes('@')) {
      alert(`Thank you for subscribing! You'll receive luxury property updates at ${email}`);
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  }
  
  if (newsBtn) {
    const newsEmail = document.getElementById('newsEmail');
    newsBtn.addEventListener('click', () => handleNewsletter(newsEmail));
  }
  if (newsBtn2) {
    const newsEmail2 = document.getElementById('newsEmail2');
    newsBtn2.addEventListener('click', () => handleNewsletter(newsEmail2));
  }

  // ========== FILTER EVENT LISTENERS ==========
  const typeFilter = document.getElementById('propertyType');
  const locationFilter = document.getElementById('propertyLocation');
  const priceFilter = document.getElementById('propertyPrice');
  const searchProperty = document.getElementById('searchProperty');
  
  if (typeFilter) typeFilter.addEventListener('change', renderPropertiesGrid);
  if (locationFilter) locationFilter.addEventListener('change', renderPropertiesGrid);
  if (priceFilter) priceFilter.addEventListener('change', renderPropertiesGrid);
  if (searchProperty) searchProperty.addEventListener('input', renderPropertiesGrid);
  
  // ========== GALLERY FILTER ==========
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderGallery(this.dataset.filter);
      });
    });
    renderGallery('all');
  }
  
  // ========== LIGHTBOX CLOSE ==========
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.querySelector('.close-lightbox');
  if (closeBtn && lightbox) {
    closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }
  
  // Initialize
  renderFeaturedProperties();
  renderPropertiesGrid();
});
