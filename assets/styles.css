/* IMPORT LUXURY FONTS *
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Cormorant+Garamond:wght@500;600&family=Poppins:wght@400;500;600&display=swap');
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --beige: #e8dcc8;
  --tan: #d4b896;
  --sage-green: #0724a1;
  /* Updated sage-green to vivid blue #0724a1 */
  --cream: #faf8f3;
  --warm-orange: #d97706;
  --dark-brown: #3d2817;
  --light-tan: #f5f1eb;
  --white: #ffffff;
  --soft-yellow: #fff4c2;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--cream);
  color: var(--dark-brown);
  line-height: 1.6;
  overflow-x: hidden;
}



/* ===============================
   CLEAN MODERN NAVBAR (UPDATED)
================================ */
.navbar {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(18px);
  padding: 0.9rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  animation: slideDown 0.6s ease-out;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

/* ===============================
   LOGO
================================ */
.logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.04);
}

.logo-img {
  width: 48px;
  height: auto;
}

.logo-text {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--sage-green);
  letter-spacing: 0.5px;
}

/* ===============================
   SEARCH BAR
================================ */
.search-container {
  display: flex;
  flex: 1;
  max-width: 420px;
  min-width: 220px;
  background: #ffffff;
  padding: 4px;
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}

.search-bar {
  flex: 1;
  padding: 0.55rem 1rem;
  border: none;
  outline: none;
  font-size: 0.9rem;
  border-radius: 999px;
}

.search-btn {
  padding: 0.55rem 1.4rem;
  background-color: #ff8c1a;
  color: #fff;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.25s ease;
}

.search-btn:hover {
  background-color: #ffb164;
}

/* ===============================
   NAV LINKS
================================ */
.nav-links-container {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: #1f2937;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--sage-green);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--sage-green);
}

.nav-link:hover::after {
  width: 100%;
}

/* Dropdown wrapper */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Hide dropdown by default */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 35px;
  left: 0;
  background: var(--cream);
  padding: 10px 0;
  min-width: 150px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  border-radius: 8px;
  z-index: 100;
}

/* Items */
.dropdown-item {
  display: block;
  padding: 10px 16px;
  color: var(--dark-brown);
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

/* Hover underline like nav-link */
.dropdown-item::after {
  content: "";
  position: absolute;
  bottom: 6px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--warm-orange);
  transition: width 0.3s ease;
}

.dropdown-item:hover::after {
  width: 100%;
}

/* PC hover support */
.dropdown:hover .dropdown-menu {
  display: block;
}

/* Mobile: dropdown open class */
.dropdown.open .dropdown-menu {
  display: block;
}


.cart-icon {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  color: var(--dark-brown);
}

.cart-icon:hover {
  transform: scale(1.1);
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--warm-orange);
  color: var(--white);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: var(--dark-brown);
  transition: all 0.3s ease;
}

/* Featured Section */
.featured-section {
  display: none;
}

.slideshow-container {
  display: none;
}

.slides-wrapper {
  display: none;
}

.featured-items {
  display: none;
}

.featured-item {
  display: none;
}

.slide-nav-btn {
  display: none;
}

.slide-dots {
  display: none;
}

.dot {
  display: none;
}

/* ===============================
   HERO SECTION – IMAGE VERSION
================================ */
.hero {
  background: linear-gradient(
    135deg,
    #FAFCFF 0%,
    #F1F6FB 55%,
    #F8FAFF 100%
  );
  color: #1f2937;
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  min-height: 520px;

  /* Page load animation */
  opacity: 0;
  transform: translateY(20px);
  animation: heroEntrance 1s ease forwards;
  transition: transform 0.4s ease, background 0.4s ease;
}

.hero:hover {
  transform: translateY(-2px);
}

/* LEFT CONTENT */
.hero-content {
  flex: 1;
  max-width: 600px;
}

/* Small badge text */
.hero-content::before {
  content: "Located at J. Catolico Sr. Avenue Beside KCC Mall of Gensan";
  display: inline-block;
  background: #003366;
  color: #FFFFFF;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Fade in on load */
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1s ease forwards;
  animation-delay: 0.2s;
}

.hero-content::before:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 51, 102, 0.3);
}

/* TITLE */
.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1.15;
  font-weight: 800;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1s ease forwards;
  animation-delay: 0.4s;
}

.hero-title span {
  color: #0099ff;
  transition: color 0.3s ease;
}

.hero-title span:hover {
  color: #0077cc;
}

/* SUBTITLE */
.hero-subtitle {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #475569;
  max-width: 520px;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1s ease forwards;
  animation-delay: 0.6s;
}

/* BUTTONS */
.cta-button {
  padding: 0.75rem 1.6rem;
  background-color: #ff8c1a;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-right: 1rem;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1s ease forwards;
  animation-delay: 0.8s;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(249, 115, 22, 0.35);
}

.cta-button-secondary {
  padding: 0.75rem 1.6rem;
  background-color: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1s ease forwards;
  animation-delay: 0.9s;
}

.cta-button-secondary:hover {
  background-color: #2563eb;
  color: white;
  transform: translateY(-3px);
}

/* RIGHT IMAGE */
.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image img {
  width: 100%;
  max-width: 520px;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  /* Fade in on load */
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1s ease forwards;
  animation-delay: 1s;
}

.hero-image img:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.2);
}

/* ===============================
   ANIMATIONS
================================ */
@keyframes heroEntrance {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-content::before {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-image img {
    max-width: 100%;
  }
}



/* ===============================
   Amazing Deals Section
================================ */


.deals {
  padding: 6rem 2rem 7rem;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #fffdf8 55%,
    #f4f8ff 100%
  );
}



.deals {
  position: relative;
}

/* Top fade */
.deals::before {
  content: "";
  position: absolute;
  top: -60px;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(to bottom, rgba(250,252,255,0), #ffffff);
}

/* Bottom fade */
.deals::after {
  content: "";
  position: absolute;
  bottom: -60px;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(to top, rgba(250,252,255,0), #ffffff);
}


/* ===============================
   Header
================================ */
.deals-header {
  text-align: center;
  margin-bottom: 3rem;
}

.deals-header h2 {
  font-size: 2.1rem;
  font-weight: 700;
  color: #111827;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}

.deal-icon {
  font-size: 1.5rem;
}

.deals-header p {
  font-size: 0.95rem;
  color: #6b7280;
}

/* ===============================
   Cards Layout
================================ */
.deals-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 820px;
  margin: 0 auto;
}

/* ===============================
   Card Base
================================ */
.deal-card {
  border-radius: 16px;
  padding: 2.8rem 2.4rem;
  text-align: center;
  background-clip: padding-box;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.deal-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.12);
}

/* ===============================
   Yellow Card
================================ */
.deal-card.yellow {
  background: linear-gradient(
    135deg,
    #fff8d6 0%,
    #fff1b8 100%
  );
  border: 1px solid #fde68a;
}

.yellow-badge {
  background-color:    #ff8c1a;
;
  color: #ffffff;
}
.deal-card.yellow:hover {
  box-shadow:
    0 30px 60px rgba(250, 204, 21, 0.35);
}


/* ===============================
   Blue Card
================================ */
.deal-card.blue {
  background: linear-gradient(
    135deg,
    #eaf2ff 0%,
    #dde9ff 100%
  );
  border: 1px solid #93c5fd;
}

.blue-badge {
  background-color: #2563eb;
  color: #ffffff;
    
}
.deal-card.blue:hover {
  box-shadow:
    0 30px 60px rgba(37, 99, 235, 0.35);
}


/* ===============================
   Badge
================================ */
.deal-badge {
  display: inline-block;
  font-weight: 700;
  padding: 0.65rem 1.6rem;
  border-radius: 999px;
  font-size: 1.3rem;
  margin-bottom: 1.4rem;
}

/* ===============================
   Card Text
================================ */
.deal-card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.deal-card.yellow h3 {
  color: #92400e;
}

.deal-card.blue h3 {
  color: #1e3a8a;
}

.deal-card p {
  font-size: 0.95rem;
  line-height: 1.6;
}

.deal-card.yellow p {
  color: #7c2d12;
}

.deal-card.blue p {
  color: #1e40af;
}

/* ===============================
   Mobile
================================ */
@media (max-width: 768px) {
  .deals-cards {
    grid-template-columns: 1fr;
  }
}




  

/* ===== Categories Filter ===== */
.categories-filter {
  background: var(--white);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1400px;
  margin: 3rem auto 0 auto;
  flex-wrap: wrap;
  border: 1px solid #ececec;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}

.filter-container {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

/* ===== Filter Button ===== */
.filter-btn {
  padding: 0.55rem 1.4rem;
  background: var(--soft-yellow);
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: var(--sage-green);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

/* Icon */
.filter-btn i {
  font-size: 1.1rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

/* Hover */
.filter-btn:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 6px 12px rgba(0,0,0,0.12);
  background: #fff8d1;
}

.filter-btn:hover i {
  transform: rotate(-10deg) scale(1.15);
  color: var(--sage-green);
}

/* Active */
.filter-btn.active {
  color: var(--soft-yellow);
  border-color: var(--soft-yellow);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.filter-btn.active i {
  transform: scale(1.2);
  color: var(--soft-yellow);
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 1024px) {
  .categories-filter {
    padding: 1.5rem;
    gap: 1.5rem;
  }
}

/* Small tablets / large phones */
@media (max-width: 768px) {
  .categories-filter {
    padding: 1rem;
    gap: 1rem;
  }

  .filter-btn {
    flex: 1 1 45%;
    font-size: 16px;
    padding: 0.5rem 1.2rem;
  }
}

/* MOBILE — ⭐ RECOMMENDED FIX ⭐ */
@media (max-width: 480px) {
  .categories-filter {
    padding: 0.75rem;
    gap: 0.6rem;
  }

  .filter-container {
    gap: 0.6rem;
  }

  .filter-btn {
    flex: 1 1 48%;   /* 🔥 TWO BUTTONS PER ROW */
    font-size: 14px;
    padding: 0.45rem 0.6rem;
    border-radius: 8px;
  }

  .filter-btn i {
    font-size: 1rem;
  }
}




.search-filter {
  flex: 1;
  min-width: 250px;
}


.search-filter-input {
  width: 100%;
  padding: 0.85rem 1.1rem;
  border: 1px solid var(--beige);
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.25s ease;
}


.search-filter-input:focus {
  border-color: var(--sage-green);
  box-shadow: 0 0 0 4px rgba(130, 160, 140, 0.22);
  outline: none;
}


.featured-collection {
  padding: 4rem 2rem;
  background: var(--cream);
  max-width: 1400px;
  margin: 0 auto;
}

.collection-title {
  font-size: 1.5rem;
  color: var(--dark-brown);
  margin-bottom: 2rem;
  font-weight: 600;
}

/* FIXED — Proper flex grid, centered, responsive */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
}
/* Product Card */
.featured-product {
  background: rgba(255,255,255,0.25);
  border-radius: 16px;
  padding: 1rem;
  text-align: center;
  width: 220px;
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  overflow: hidden;
}

/* Glow Effect */
.featured-product::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(60deg, #aab7ee, #f5f5f5, #aab7ee);
  opacity: 0;
  transition: all 0.5s ease;
  z-index: 0;
  filter: blur(40px);
  animation: glow 6s linear infinite;
}

@keyframes glow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.featured-product:hover::before {
  opacity: 0.3;
}

/* Product Image */
.featured-product img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease, filter 0.3s ease;
  position: relative;
  z-index: 1;
}

.featured-product:hover img {
  transform: scale(1.08);
  filter: brightness(1.05);
}

/* Hover Lift */
.featured-product:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 36px rgba(0,0,0,0.18);
}

.product-label {
  font-size: 0.75rem;
  color: var(--sage-green);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  opacity: 0.8;
  position: relative;
  z-index: 1;
}

.featured-product h4 {
  font-size: 1rem;
  color: var(--dark-brown);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.featured-product .product-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--warm-orange);
  
}

/* Products Section */
.products-section {
  padding: 4rem 2rem;
  background-color: var(--white);
  max-width: 1400px;
  margin: 0 auto;
    border-radius: 12px;

}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--dark-brown);
  animation: fadeInUp 0.8s ease-out;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
}

/* ⭐ UPDATED LUXURY PRODUCT CARD */
.product-card {
  background: rgba(255,255,255,0.35);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 10px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  padding-bottom: 1rem;
  transition: all 0.35s ease;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  position: relative;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 38px rgba(0,0,0,0.18);
  border-color: var(--sage-green);
}

/* Image Container */
.product-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 18px 18px 0 0;
  position: relative;
  background: #fff;
}

/* AUTO-FIT IMAGE PERFECTLY */
.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.3s ease;
}

/* Elegant Zoom */
.product-card:hover .product-image img {
  transform: scale(1.06);
  filter: brightness(1.08);
}

/* Subtle Glow */
.product-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: linear-gradient(140deg, rgba(170,183,238,0.4), rgba(255,255,255,0.2));
  opacity: 0;
  transition: 0.4s ease;
  z-index: -1;
}

.product-card:hover::before {
  opacity: 1;
  filter: blur(20px);
}

/* Product Info */
.product-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-category {
  font-size: 0.8rem;
  color: var(--sage-green);
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.product-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--dark-brown);
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--warm-orange);
  margin-bottom: 1rem;
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .product-image {
    height: 140px;
  }

  .product-info {
    padding: 0.75rem;
  }

  .product-name {
    font-size: 0.85rem;
  }

  .product-price {
    font-size: 0.95rem;
  }
}




.add-to-cart-btn {
  background: var(--sage-green);
  /* Button background now uses vivid blue */
  color: var(--white);
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: auto;
}

.add-to-cart-btn:hover {
  background: var(--dark-brown);
  transform: translateY(-2px);
}

/* Blog Section */
.blog-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--beige) 0%, var(--tan) 100%);
  max-width: 1400px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out;
}

.blog-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.blog-content img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 8px;
}

.blog-text h2 {
  font-size: 1.8rem;
  color: var(--dark-brown);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.blog-text p {
  font-size: 1rem;
  color: var(--dark-brown);
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.blog-button {
  padding: 0.8rem 2rem;
  background: var(--warm-orange);
  color: var(--white);
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.blog-button:hover {
  background: #c26200;
  transform: translateY(-3px);
}

/* CTA SECTION */
.footer-cta {
  background: linear-gradient(90deg, #ff6a00, #4b6cff);
  color: #fff;
  text-align: center;
  padding: 4rem 2rem;
}

.footer-cta h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.footer-cta p {
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  background: #fff;
  color: #ff6a00;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
}

.btn-outline {
  border: 2px solid #fff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
}



/* FOOTER */
.footer {
  background: #0b1220;
  color: #ffffff;
  padding: 4rem 2rem 2rem;
}

.footer-content {
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.footer-column h4,
.footer-column h3 {
  color: #ff8c1a;
  margin-bottom: 1rem;
}

.footer-column p,
.footer-column li {
  font-size: 0.95rem;
  opacity: 0.9;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 0.6rem;
}

.footer-column a {
  color: #fff;
  text-decoration: none;
}

.footer-column a:hover {
  color: #ff8c1a;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.contact-item span {
  font-size: 1.2rem;
  color: #ff8c1a;
}



/* Footer Bottom */
.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.15);
  font-size: 0.85rem;
  opacity: 0.8;
}

/* =====================
   MOBILE RESPONSIVE
===================== */
@media (max-width: 900px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .footer-cta h2 {
    font-size: 1.8rem;
  }
}


/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* New animation keyframes for enhanced effects */
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero {
    flex-direction: column;
    min-height: auto;
  }

  .blog-content {
    grid-template-columns: 1fr;
  }

  .featured-product.featured-large {
    grid-column: span 1;
    grid-row: span 1;
  }
}

@media (max-width: 768px) {
  .nav-container {
    gap: 1rem;
  }

  .search-container {
    max-width: 100%;
    order: 3;
    flex-basis: 100%;
  }

  .nav-links-container {
    display: none;
    gap: 1rem;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .nav-links-container.active {
    display: flex;
  }

  .hamburger {
    display: flex;
    order: 2;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .featured-items {
    grid-template-columns: repeat(2, 1fr);
  }

  .categories-filter {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-container {
    width: 100%;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.8rem 1rem;
  }

  .logo-text {
    display: none;
  }

  .search-container {
    min-width: 100%;
  }

  .hero {
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 1.5rem;
  }

  .featured-items {
    grid-template-columns: 1fr;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  

  .blog-text h2 {
    font-size: 1.3rem;
  }

  .cta-button {
    margin-right: 0;
    width: 100%;
  }

  .cta-button-secondary {
    width: 100%;
  }
}
