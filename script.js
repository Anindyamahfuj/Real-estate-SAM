document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // ========== 40+ PROPERTIES DATABASE (Covers ALL filter combinations) ==========
  const properties = [
    // GULSHAN Properties (2+ properties per price range)
    { name: "Gulshan Presidential Tower", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 18500000, priceText: "1.85 Crore", bedrooms: 2, area: "1850 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Lake View Apartment", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 35000000, priceText: "3.5 Crore", bedrooms: 3, area: "2200 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Avenue Penthouse", location: "gulshan", locationDisplay: "Gulshan", type: "penthouse", price: 55000000, priceText: "5.5 Crore", bedrooms: 4, area: "3800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Twin Tower", location: "gulshan", locationDisplay: "Gulshan", type: "penthouse", price: 85000000, priceText: "8.5 Crore", bedrooms: 5, area: "5800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Executive Villa", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 125000000, priceText: "12.5 Crore", bedrooms: 5, area: "6500 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Gulshan Royal Palace", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 180000000, priceText: "18 Crore", bedrooms: 6, area: "8500 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    
    // BANANI Properties
    { name: "Banani Lake View Villa", location: "banani", locationDisplay: "Banani", type: "villa", price: 22000000, priceText: "2.2 Crore", bedrooms: 3, area: "2500 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Commercial Plaza", location: "banani", locationDisplay: "Banani", type: "commercial", price: 45000000, priceText: "4.5 Crore", bedrooms: 0, area: "5500 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Duplex Residence", location: "banani", locationDisplay: "Banani", type: "duplex", price: 62000000, priceText: "6.2 Crore", bedrooms: 4, area: "4200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Corporate Tower", location: "banani", locationDisplay: "Banani", type: "commercial", price: 95000000, priceText: "9.5 Crore", bedrooms: 0, area: "7200 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Luxury Penthouse", location: "banani", locationDisplay: "Banani", type: "penthouse", price: 140000000, priceText: "14 Crore", bedrooms: 5, area: "5200 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    
    // BARIDHARA Properties
    { name: "Baridhara Diplomatic Enclave", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 19500000, priceText: "1.95 Crore", bedrooms: 2, area: "1950 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara DOHS Villa", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 38000000, priceText: "3.8 Crore", bedrooms: 4, area: "3200 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Lake View", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 58000000, priceText: "5.8 Crore", bedrooms: 3, area: "2800 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Executive Residency", location: "baridhara", locationDisplay: "Baridhara", type: "duplex", price: 88000000, priceText: "8.8 Crore", bedrooms: 4, area: "4800 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Presidential Villa", location: "baridhara", locationDisplay: "Baridhara", type: "villa", price: 165000000, priceText: "16.5 Crore", bedrooms: 6, area: "7200 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    
    // UTTARA Properties
    { name: "Uttara Sky Garden", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 15000000, priceText: "1.5 Crore", bedrooms: 2, area: "1500 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Sector 6 Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 28000000, priceText: "2.8 Crore", bedrooms: 3, area: "2100 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Executive Penthouse", location: "uttara", locationDisplay: "Uttara", type: "penthouse", price: 49000000, priceText: "4.9 Crore", bedrooms: 4, area: "3500 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Lake View Villa", location: "uttara", locationDisplay: "Uttara", type: "villa", price: 75000000, priceText: "7.5 Crore", bedrooms: 4, area: "4200 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Commercial Hub", location: "uttara", locationDisplay: "Uttara", type: "commercial", price: 110000000, priceText: "11 Crore", bedrooms: 0, area: "6800 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    
    // DHANMONDI Properties
    { name: "Dhanmondi Lake View Apartment", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 25000000, priceText: "2.5 Crore", bedrooms: 3, area: "2000 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Luxury Residency", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 39000000, priceText: "3.9 Crore", bedrooms: 3, area: "2700 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Duplex Home", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "duplex", price: 65000000, priceText: "6.5 Crore", bedrooms: 4, area: "4000 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Presidential Suite", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "penthouse", price: 105000000, priceText: "10.5 Crore", bedrooms: 5, area: "4800 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Royal Villa", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "villa", price: 155000000, priceText: "15.5 Crore", bedrooms: 5, area: "6200 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    
    // BASHUNDHARA Properties
    { name: "Bashundhara R/A Apartment", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 17000000, priceText: "1.7 Crore", bedrooms: 2, area: "1600 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Family Villa", location: "bashundhara", locationDisplay: "Bashundhara", type: "villa", price: 34000000, priceText: "3.4 Crore", bedrooms: 3, area: "2800 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Executive Villa", location: "bashundhara", locationDisplay: "Bashundhara", type: "villa", price: 54000000, priceText: "5.4 Crore", bedrooms: 4, area: "3800 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Premium Penthouse", location: "bashundhara", locationDisplay: "Bashundhara", type: "penthouse", price: 78000000, priceText: "7.8 Crore", bedrooms: 4, area: "4200 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Commercial Space", location: "bashundhara", locationDisplay: "Bashundhara", type: "commercial", price: 130000000, priceText: "13 Crore", bedrooms: 0, area: "7500 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    
    // Additional Properties for 4-6 Crore Range (ensuring coverage)
    { name: "Gulshan Mid-Range Apartment", location: "gulshan", locationDisplay: "Gulshan", type: "apartment", price: 42000000, priceText: "4.2 Crore", bedrooms: 3, area: "2400 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Premium Apartment", location: "banani", locationDisplay: "Banani", type: "apartment", price: 46000000, priceText: "4.6 Crore", bedrooms: 3, area: "2600 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Baridhara Green View", location: "baridhara", locationDisplay: "Baridhara", type: "apartment", price: 50000000, priceText: "5 Crore", bedrooms: 3, area: "2900 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Uttara Luxury Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 44000000, priceText: "4.4 Crore", bedrooms: 3, area: "2500 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Dhanmondi Elite Apartment", location: "dhanmondi", locationDisplay: "Dhanmondi", type: "apartment", price: 52000000, priceText: "5.2 Crore", bedrooms: 3, area: "3000 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Green Apartment", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 48000000, priceText: "4.8 Crore", bedrooms: 3, area: "2700 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    
    // Additional Properties for Under 2 Crore
    { name: "Uttara Budget Apartment", location: "uttara", locationDisplay: "Uttara", type: "apartment", price: 12000000, priceText: "1.2 Crore", bedrooms: 2, area: "1300 sq ft", image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Bashundhara Starter Home", location: "bashundhara", locationDisplay: "Bashundhara", type: "apartment", price: 14000000, priceText: "1.4 Crore", bedrooms: 2, area: "1450 sq ft", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    
    // Additional Properties for 10-15 Crore
    { name: "Gulshan Grand Villa", location: "gulshan", locationDisplay: "Gulshan", type: "villa", price: 115000000, priceText: "11.5 Crore", bedrooms: 5, area: "6000 sq ft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
    { name: "Banani Royal Residence", location: "banani", locationDisplay: "Banani", type: "villa", price: 135000000, priceText: "13.5 Crore", bedrooms: 5, area: "6800 sq ft", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" }
  ];

  // ========== HERO SLIDER ==========
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dotsContainer = document.querySelector('.slider-dots');
  let currentSlide = 0;
  let slideInterval;

  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
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
    const dots = document.querySelectorAll('.dot');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    if (dots[index]) dots[index].classList.add('active');
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

  // ========== FEATURED PROPERTIES ==========
  function renderFeaturedProperties() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid) {
      featuredGrid.innerHTML = properties.slice(0, 6).map(prop => `
        <div class="property-card">
          <img src="${prop.image}" alt="${prop.name}" class="property-img">
          <div class="property-info">
            <h3>${prop.name}</h3>
            <div class="property-location"><i class="fas fa-map-pin"></i> ${prop.locationDisplay}</div>
            <div class="property-price">৳ ${prop.priceText}</div>
            <p>${prop.bedrooms ? `${prop.bedrooms} Beds | ` : ''}${prop.area}</p>
            <a href="contact.html" class="btn-luxury" style="margin-top:16px; display:inline-block;">Inquire →</a>
          </div>
        </div>
      `).join('');
    }
  }

  // ========== PROPERTIES PAGE FILTERS (ALL WORKING TOGETHER) ==========
  let currentPage = 1;
  const itemsPerPage = 9;

  function filterProperties() {
    const typeFilter = document.getElementById('propertyType')?.value || 'all';
    const locationFilter = document.getElementById('propertyLocation')?.value || 'all';
    const priceFilter = document.getElementById('propertyPrice')?.value || 'all';
    const bedroomsFilter = document.getElementById('propertyBedrooms')?.value || 'all';
    const searchTerm = document.getElementById('searchProperty')?.value.toLowerCase() || '';

    let filtered = [...properties];

    // Apply Type Filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(p => p.type === typeFilter);
    }
    
    // Apply Location Filter
    if (locationFilter !== 'all') {
      filtered = filtered.filter(p => p.location === locationFilter);
    }
    
    // Apply Price Filter (in Crores)
    if (priceFilter !== 'all') {
      if (priceFilter === '0-2') {
        filtered = filtered.filter(p => p.price < 20000000);
      } else if (priceFilter === '2-4') {
        filtered = filtered.filter(p => p.price >= 20000000 && p.price < 40000000);
      } else if (priceFilter === '4-6') {
        filtered = filtered.filter(p => p.price >= 40000000 && p.price < 60000000);
      } else if (priceFilter === '6-10') {
        filtered = filtered.filter(p => p.price >= 60000000 && p.price < 100000000);
      } else if (priceFilter === '10-15') {
        filtered = filtered.filter(p => p.price >= 100000000 && p.price < 150000000);
      } else if (priceFilter === '15+') {
        filtered = filtered.filter(p => p.price >= 150000000);
      }
    }
    
    // Apply Bedrooms Filter
    if (bedroomsFilter !== 'all') {
      const bedroomNum = parseInt(bedroomsFilter);
      if (bedroomNum === 5) {
        filtered = filtered.filter(p => p.bedrooms >= 5);
      } else {
        filtered = filtered.filter(p => p.bedrooms === bedroomNum);
      }
    }
    
    // Apply Search Filter
    if (searchTerm) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm) || p.locationDisplay.toLowerCase().includes(searchTerm));
    }

    const resultsCount = document.getElementById('filterResultsCount');
    if (resultsCount) {
      resultsCount.innerHTML = `<i class="fas fa-building"></i> Showing ${filtered.length} luxurious properties`;
    }

    return filtered;
  }

  function renderPropertiesGrid() {
    const grid = document.getElementById('propertiesGrid');
    if (!grid) return;

    const filtered = filterProperties();
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    if (paginated.length === 0) {
      grid.innerHTML = `<div style="text-align:center; padding:60px; color:#aaa;"><i class="fas fa-home"></i> No properties match your filters. Try different criteria.</div>`;
    } else {
      grid.innerHTML = paginated.map(prop => `
        <div class="property-card">
          <img src="${prop.image}" alt="${prop.name}" class="property-img">
          <div class="property-info">
            <h3>${prop.name}</h3>
            <div class="property-location"><i class="fas fa-map-pin"></i> ${prop.locationDisplay}</div>
            <div class="property-price">৳ ${prop.priceText}</div>
            <p>${prop.bedrooms ? `${prop.bedrooms} Beds | ` : 'Commercial Space | '}${prop.area}</p>
            <a href="contact.html" class="btn-luxury" style="margin-top:16px; display:inline-block;">Inquire →</a>
          </div>
        </div>
      `).join('');
    }

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    const paginationDiv = document.getElementById('propertiesPagination');
    if (!paginationDiv) return;

    if (totalPages <= 1) {
      paginationDiv.innerHTML = '';
      return;
    }

    let buttons = '';
    for (let i = 1; i <= totalPages; i++) {
      buttons += `<button class="${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    paginationDiv.innerHTML = buttons;

    document.querySelectorAll('#propertiesPagination button').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page);
        renderPropertiesGrid();
        window.scrollTo({ top: 400, behavior: 'smooth' });
      });
    });
  }

  function resetFilters() {
    const typeFilter = document.getElementById('propertyType');
    const locationFilter = document.getElementById('propertyLocation');
    const priceFilter = document.getElementById('propertyPrice');
    const bedroomsFilter = document.getElementById('propertyBedrooms');
    const searchInput = document.getElementById('searchProperty');

    if (typeFilter) typeFilter.value = 'all';
    if (locationFilter) locationFilter.value = 'all';
    if (priceFilter) priceFilter.value = 'all';
    if (bedroomsFilter) bedroomsFilter.value = 'all';
    if (searchInput) searchInput.value = '';

    currentPage = 1;
    renderPropertiesGrid();
  }

  const resetBtn = document.getElementById('resetFilters');
  if (resetBtn) resetBtn.addEventListener('click', resetFilters);

  const typeFilter = document.getElementById('propertyType');
  const locationFilter = document.getElementById('propertyLocation');
  const priceFilter = document.getElementById('propertyPrice');
  const bedroomsFilter = document.getElementById('propertyBedrooms');
  const searchInput = document.getElementById('searchProperty');

  if (typeFilter) typeFilter.addEventListener('change', () => { currentPage = 1; renderPropertiesGrid(); });
  if (locationFilter) locationFilter.addEventListener('change', () => { currentPage = 1; renderPropertiesGrid(); });
  if (priceFilter) priceFilter.addEventListener('change', () => { currentPage = 1; renderPropertiesGrid(); });
  if (bedroomsFilter) bedroomsFilter.addEventListener('change', () => { currentPage = 1; renderPropertiesGrid(); });
  if (searchInput) searchInput.addEventListener('input', () => { currentPage = 1; renderPropertiesGrid(); });

  // ========== GALLERY ==========
  const galleryItems = [
    { category: "exterior", url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { category: "interior", url: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { category: "exterior", url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { category: "interior", url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { category: "amenities", url: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { category: "exterior", url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { category: "interior", url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { category: "amenities", url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" },
    { category: "exterior", url: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" }
  ];

  function renderGallery(filter = 'all') {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    const filtered = filter === 'all' ? galleryItems : galleryItems.filter(i => i.category === filter);
    galleryGrid.innerHTML = filtered.map((item, idx) => `
      <div class="gallery-item" data-category="${item.category}">
        <img src="${item.url}" alt="Gallery Image">
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

  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.querySelector('.close-lightbox');
  if (closeBtn && lightbox) {
    closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }

  // ========== CONTACT FORM HANDLER ==========
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const fullName = document.getElementById('fullName')?.value.trim();
      const email = document.getElementById('emailAddress')?.value.trim();
      const phone = document.getElementById('phoneNumber')?.value.trim();
      const inquiryType = document.getElementById('inquiryType')?.value;
      const propertyInterest = document.getElementById('propertyInterest')?.value;
      const message = document.getElementById('message')?.value.trim();

      if (!fullName) {
        showFormFeedback('Please enter your full name.', 'error');
        return;
      }
      if (!email) {
        showFormFeedback('Please enter your email address.', 'error');
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        showFormFeedback('Please enter a valid email address.', 'error');
        return;
      }

      showFormFeedback(`✨ Thank you ${fullName}! Your inquiry has been sent successfully. Our luxury property specialist will contact you at ${email} within 24 hours.`, 'success');
      contactForm.reset();
      
      setTimeout(() => {
        const feedbackDiv = document.getElementById('formFeedback');
        if (feedbackDiv) feedbackDiv.innerHTML = '';
      }, 5000);
    });
  }

  function showFormFeedback(msg, type) {
    const feedbackDiv = document.getElementById('formFeedback');
    if (feedbackDiv) {
      feedbackDiv.innerHTML = `<div style="background: ${type === 'success' ? 'rgba(212,175,55,0.15)' : 'rgba(255,68,68,0.15)'}; padding: 14px; border-radius: 28px; color: ${type === 'success' ? '#D4AF37' : '#ff6b6b'}; margin-top: 20px; text-align:center; border:1px solid ${type === 'success' ? '#D4AF37' : '#ff6b6b'};">${msg}</div>`;
      setTimeout(() => {
        if (feedbackDiv.innerHTML.includes(msg)) {
          feedbackDiv.innerHTML = '';
        }
      }, 5000);
    }
  }

  // ========== NEWSLETTER ==========
  const newsBtn = document.getElementById('newsBtn');
  if (newsBtn) {
    newsBtn.addEventListener('click', function() {
      const emailInput = document.getElementById('newsEmail');
      const email = emailInput?.value.trim();
      if (email && email.includes('@')) {
        alert(`Thank you for subscribing! You'll receive luxury property updates at ${email}`);
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }

  // Initialize all render functions
  renderFeaturedProperties();
  renderPropertiesGrid();
});
