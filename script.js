// =====================
// GADGET SPECS (ID-BASED)
// =====================
const gadgetSpecs = {
  1: [
    "Display: 6.78 1.5K AMOLED, 144Hz",
    "Resolution: 1224 × 2720 pixels",
    "Protection: Gorilla Glass 7i",
    "OS: Android 15 (HiOS 15)",
    "Processor: MediaTek Helio G200",
    "RAM: 8GB",
    "Storage: 256GB",
    "Rear Camera: 50MP",
    "Front Camera: 13MP",
    "Battery: 5160mAh, 45W fast charge"
  ],
  2: [
    "Display: 6.74 HD+ IPS LCD, 90Hz refresh rate",
    "Resolution: 1600 × 720 (HD+)",
    "Processor: Unisoc T612 octa-core",
    "OS: Android 14 with realme UI",
    "RAM: 3GB / 4GB (with dynamic RAM expansion)",
    "Storage: 64GB",
    "Front Camera: 5 MP",
    "Battery: 5000 mAh, 10W charging",
    "Extras: IP54 dust & water resistance"
  ],
  3: [
    "Display: 6.1-inch Super Retina XDR",
    "Resolution: 2532 x 1170 pixels",
    "Processor: A15 Bionic chip",
    "RAM:",
    "Storage: 128GB",
    "Rear Camera: Dual 12MP (Wide & Ultra Wide)",
    "Front Camera: 12MP",
    "Battery: Up to 19 hours video playback",
    "Water Resistance: IP68",
    "Operating System: iOS"
  ],
  4: [
    "Display: 6.67-inch HD+ IPS LCD, 120Hz refresh rate",
    "Processor: UNISOC T7250 Octa-core",
    "RAM: 3GB ",
    "Storage: 128GB",
    "Rear Camera: 13MP main camera",
    "Front Camera: 8MP",
    "Battery: 5000mAh",
    "Charging: 15W fast charging",
    "Operating System	: Android 15",
    "Durability: IP64 dust & water resistance, 1.5m drop resistance"
  ],
  5: [
    "Display: 6.78 AMOLED, 144 Hz refresh rate",
    "Resolution: 1.5K (2720×1224)",
    "Protection: Corning Gorilla Glass 7i",
    "OS: Android 15 with XOS 15.1",
    "Processor: MediaTek Helio G200",
    "RAM: 8 GB",
    "Storage: 256 GB",
    "Rear Camera: 50 MP",
    "Front Camera: 13 MP",
    "Battery: 5160 mAh, 45 W fast charging"
  ],
  6: [
    "Bluetooth: version 5.4 for stable connection",
    "Driver: 12 mm dynamic drivers for clear sound",
    "Audio Codecs: AAC & SBC support.",
    "Battery (Earbuds): up to 6–7.5 hrs per charge.",
    "Battery (Case): up to 24–30 hrs total",
    "Water Resistance: IPX5 (sweat & splash resistant)",
    "Microphones: AI noise-reduction mics for clearer calls.",
    "Charging Port: USB-C fast charging",
    "Latency: low-latency mode supported",
    "Controls: touch controls for music/calls/assistant."

  ],
  7: [
    "Bluetooth: version 5.4 (stable wireless)",
    "Drivers: 40 mm dynamic (rich sound)",
    "Active Noise Cancelling (ANC): Hybrid ANC up to ~43 dB",
    "Audio Codecs: LDAC (Hi-Res), AAC, SBC",
    "Battery Life: up to 75 h (ANC off) / 45 h (ANC on)",
    "Fast Charging: USB-C (5 min → ~5 h playtime)",
    "Multi-device: Dual-device connection supported",
    "Call Quality: Built-in microphones with noise reduction",
    "Design: Over-ear, foldable & comfortable",
    "Extras: App support for EQ/ANC modes & gaming mode",
  ],
  8: [
    "Type: Mini tripod stand",
    "Material: Aluminum alloy",
    "Height: Adjustable",
    "Head: 360° rotating head",
    "Mount: Standard 1/4″ screw",
    "Compatibility: Phone & camera",
    "Legs: Extendable, anti-slip",
    "Lock: Quick leg locks",
    "Design: Lightweight & portable",
    "Use: Vlogging, photos, video",
  ],
  9: [
    "Video: Up to 4K @ 30 fps recording",
    "Photo: 20 MP still images.",
    "Stabilization: EIS 2.0 electronic image stabilization.",
    "Screens: 2.0″ rear touchscreen + front display for framing.",
    "Waterproof: Up to 40 m (131 ft) with included housing",
    "Zoom: 5× digital zoom.",
    "Field of View: 170° wide angle lens.",
    "Battery: 1350 mAh (≈ ~60–90 min recording).",
    "Connectivity: 2.4 GHz Wi-Fi + remote control.",
    "Storage: microSD support (up to ~128 GB)"
  ],
  10: [
    "Video: up to 5.7K @ 30 fps (360°) & 4K @ 60 fps modes",
    "Photo: 72 MP 360° photos (also 18 MP)",
    "Sensors: Dual 1/2″ 48 MP CMOS",
    "Display: 2.29″ touchscreen (480×800) ",
    "Stabilization: 360° Horizon Steady + View Lock",
    "Battery: 1350 mAh (~60 min at 5.7K)",
    "Connectivity: Dual-band Wi-Fi + Bluetooth 4.2",
    "Storage: microSD support (up to ~512 GB)",
    "Audio: Stereo mics with windshield design",
    "Build: Weather-proof, 1/4″ mount, 6-axis gyroscope"
  ],
};


const item = (id, name, category, price, image) => ({
  id, name, category, price, image, sale: true
});

const filterButtons = document.querySelectorAll(".filter-btn");
const categoryTitle = document.getElementById("categoryTitle");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    // change title
    categoryTitle.textContent = categoryTitles[category] || "Products";

    // call your existing filter function
    filterProducts(category);
  });
});

const products = [

  
  // Gadgets
item(1, "Techno Spark Slim", "gadgets", "9,499", "assets/Gadgets/g1.webp"),
item(2, "Realme Note 60x", "gadgets", "3,599", "assets/Gadgets/g2.webp"),
//item(3, "Iphone 13 128", "gadgets", "26,490", "Gadgets/g3.png"),
item(4, "Tecno Spark Go2", "gadgets", "3,799", "assets/Gadgets/g4.webp"),
item(5, "Infinix Hot60 Pro", "gadgets", "6,999", "assets/Gadgets/g5.webp"),
item(6, "Ugreen HiTune Wireless Earbuds", "gadgets", "1,295", "assets/Gadgets/g6.webp"),
item(7, "UGREEN Premium Hitune Max5C Wireless Headphone ", "gadgets", "1,299.00", "assets/Gadgets/g7.webp"),
item(8, "Mini Tripod", "gadgets", "139.75", "assets/Gadgets/g8.webp"),
item(9, "Akaso brave 4 Pro", "gadgets", "7,999", "assets/Gadgets/g9.webp"),
item(10, "Akaso 360", "gadgets", "15,988", "assets/Gadgets/g10.webp"),

  // Plasticware (no loop)
item(12, "First Aid Box", "plasticware", "219.75", "Plasticware/first aid.webp"),
item(13, "Sunnyware Trash Bin", "plasticware", "129.75", "Plasticware/trash bin1.webp"),
item(14, "Soap Dispenser", "plasticware", "129.99", "Plasticware/soap dispenser.webp"),
item(15, "Hanger", "plasticware", "79.75", "Plasticware/hanger1.webp"),
item(16, "Acryllic Storage", "plasticware", "99.75", "Plasticware/p6.webp"),
item(17, "Wilson Spin Mop 360", "plasticware", "399.75", "Plasticware/spin mop1.webp"),
item(18, "Sunnyware Lunch Box", "plasticware", "59.75", "Plasticware/lunchbox1.webp"),
item(19, "Ezi Food keeper", "plasticware", "64.75", "Plasticware/plastic1.webp"),
item(20, "Egg Tray", "plasticware", "69.75", "Plasticware/egg tray1.webp"),
item(21, "Ice Cooler", "plasticware", "249.75", "Plasticware/waterjug1.webp"),

  // Appliances
  item(22, "Homo Electric Kettle", "appliances", "299.00", "Appliances/a.webp"),
  item(23, "Air Frying Pan", "appliances", "2,260.00", "Appliances/el2.webp"),
  item(24, "Homo Electric Kettle", "appliances", "419.00", "Appliances/a2.webp"),
  item(25, "Legacy Electric Kettle", "appliances", "399.75", "Appliances/a3.webp"),
  item(26, "Legacy Electric Kettle", "appliances", "399.75", "Appliances/a4.webp"),
  item(27, "Electric Kettle", "appliances", "399.00", "ss.webp"),
  item(28, "Denim Jacket", "appliances", "839.00", "Appliances/a6.webp"),
  item(29, "Homo Rice Cooker", "appliances", "719.00", "Appliances/a7.webp"),
  item(30, "Camel Blender", "appliances", "1,219.00", "Appliances/a8.webp"),
  item(31, "Homo Stand Fan", "appliances", "899.00", "Appliances/el.webp"),

 
  // Kitchenware
  item(42, "10 Inch Round Pizza Pan", "kitchenware", "139.75", "kitchenware/k4.webp"),
  item(43, "Food Warmer", "kitchenware", "239.75", "kitchenware/k1.webp"),
  item(44, "Food Warmer", "kitchenware", "239.75", "kitchenware/k2.webp"),
  item(45, "Food Warmer", "kitchenware", "299.75", "kitchenware/k3.webp"),
  item(46, "Water Jug", "kitchenware", "699.75", "kitchenware/hot.webp"),
  item(47, "Denim Jacket", "kitchenware", "129.99", "kitchenware/k5.webp"),
  item(48, "Marble Coat Fry Pan 16cm", "kitchenware", "229.75", "kitchenware/kk.webp"),
  item(49, "Food Warmer", "kitchenware", "1,399.75", "kitchenware/k1.webp"),
  item(50, "Kaisa Villa", "kitchenware", "2,699.75", "kitchenware/k2.webp"),
  item(51, "BBQ Grill", "kitchenware", "599.75", "kitchenware/k3.webp"),

  // RTW


 // Party Needs 

//item(70, "Denim Jacket", "party-needs", "129.99", "Pneeds/p10.png"),


// Furniture 
item(71, "Gaming Chair", "furniture", "2,999.75", "furniture/gamingchair.webp"),
item(72, "Office Chair", "furniture", "1,249.75", "furniture/officechair.webp"),
item(73, "Vanity Dresser", "furniture", "2,699.75", "furniture/vanitywhite.webp"),
item(74, "Rattan Chair", "furniture", "399.75", "furniture/rattanchair.webp"),
item(75, "Monoblock Chair", "furniture", "279.75", "furniture/monoblock1.webp"),
item(76, "Rotating Storage Shelf", "furniture", "1,499.75", "furniture/rotating square.webp"),
item(77, "Jupiter Dish Drainer & Cabinet", "furniture", "2,199.00", "furniture/dish drainer1.webp"),
item(78, "Camping Tent ", "furniture", "1399.75", "furniture/tent1.webp"),
item(79, "Round table", "furniture", "169.75", "assets/Plasticware/p5.webp"),
//item(80, "Denim Jacket", "furniture", "129.99", "kitchenware/k7.jpg"),


  // Toys
  item(81, "Beat Magnum", "toys", "74.75", "toys/car.webp"),
  item(82, "Rock Classic Tractor", "toys", "299.75", "toys/car1.webp"),
  item(83, "Hammering Contest", "toys", "229.75", "toys/car2.webp"),
  item(84, "Mini Medical Set", "toys", "199.75", "toys/car3.webp"),
  item(85, "Shooting Gun", "toys", "199.75", "toys/car4.webp"),
  item(86, "Screaming Chicken", "toys", "69.75", "toys/car5.webp"),
  item(87, "Dance Hero", "toys", "269.75", "toys/car6.webp"),
  item(88, "Coolman", "toys", "429.00", "toys/robot.webp"),
  item(89, "Magic Light Rainbow", "toys", "38.75", "toys/car8.webp"),
  item(90, "Connect 4 Launchers", "toys", "328.00", "toys/car9.webp"),

  // Hardware
  item(91, "Easyman PaintBrush", "hardware", "49.75", "Hardware/h3.webp"),
  item(92, "Epika Star", "hardware", "142.00", "Hardware/h5.webp"),
  item(93, "Sherlux", "hardware", "138.75", "Hardware/h6.webp"),
  item(94, "Starex", "hardware", "189.75", "Hardware/h8.webp"),
  item(95, "Easyman Saw", "hardware", "139.75", "Hardware/h9.webp"),
  item(96, "Royu Switches", "hardware", "128.75", "Hardware/h12.png"),
  item(97, "Tolsen Digital Multimeter", "hardware", "1,299.00", "Hardware/h12.webp"),
  item(98, "Ever Water Meter Lxsg Brass Type", "hardware", "980.00", "Hardware/h16.webp"),
  item(99, "Tolsen Table Saw 1500w", "hardware", "13,990", "Hardware/h19.webp"),
  item(100, "Epica Grease Gun 500cc", "hardware", "469.00", "Hardware/h18.webp"),

// Accessories
  item(101, "Pastel Hair Clip", "accessories", "49.75", "Accessories/acc1.webp"),
  item(102, "Flower Hair Clamp", "accessories", "29.75", "a/Accessories/acc2.webp"),
  item(103, "Hair Tie Ribbon Pearl", "accessories", "45.00", "Accessories/accessories2.webp"),
  item(104, "Hair Tie Spiral", "accessories", "50.00", "Accessories/accessories3.webp"),
  item(105, "Hair Tie Ribbon", "accessories", "35.00", "Accessories/accessories5.webp"),
  item(106, "Pearl Headband", "accessories", "45.00", "Accessories/accessories6.webp"),
  item(107, "Plain Pastel Headband", "accessories", "29.00", "Accessories/accessories7.webp"),
  item(108, "Black Hair Clip", "accessories", "79.75", "Accessories/accessories8.webp"),
  item(109, "Christmas Hair Clip", "accessories", "59.75", "Accessories/accessories10.webp"),
  item(110, "Hair Brush", "accessories", "59.75", "Accessories/acc3.webp"),

  // School Supplies
item(111, "Oil Pastel", "school-supplies", "54.75", "School Supplies/school1.webp"),
item(112, "HBV Stamp Pad", "school-supplies", "89.00", "School Supplies/school2.webp"),
item(113, "Bloom Gel Pen", "school-supplies", "26,490", "School Supplies/school3.webp"),
item(114, "EVO Clipboard", "school-supplies", "159.75", "School Supplies/school4.webp"),
item(115, "Pencil Case Zipper Pouch", "school-supplies", "89.75", "School Supplies/school5.webp"),
item(116, "Stick-ee White Glue", "school-supplies", "59.00", "School Supplies/school6.webp"),
item(117, "JOT Easy Ballpen", "school-supplies", "79.75", "School Supplies/school7.webp"),
item(118, "Hard Copy Bond Paper", "school-supplies", "139.75", "School Supplies/school8.webp"),
item(119, "Chipboard", "school-supplies", "7,999", "School Supplies/school9.webp"),
item(120, "Valiant Record Book", "school-supplies", "99.75", "School Supplies/school10.webp"),


];


// Cart & Filter
let cart = 0;
const currentFilter = "all";


// DOM Elements
const productsGrid = document.getElementById("productsGrid")
const searchInput = document.getElementById("searchInput")
const cartCount = document.getElementById("cartCount")
const filterBtns = document.querySelectorAll(".filter-btn")
const hamburger = document.getElementById("hamburger")
const navLinksContainer = document.querySelector(".nav-links-container")
const searchFilterInput = document.querySelector(".search-filter-input")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products)
  setupIntersectionObserver()
  setupEventListeners()
})

// Display products
function displayProducts(productsToDisplay) {
  productsGrid.innerHTML = ""
  productsToDisplay.forEach((product, index) => {
    const productCard = createProductCard(product)
    productCard.style.animationDelay = `${index * 0.05}s`
    productsGrid.appendChild(productCard)
  })
}




// Create product card
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" class="product-img" onclick="openImageModal('${product.image}')">
      ${product.sale ? '<span class="sale-badge">Sale</span>' : ""}
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <h3 class="product-name">${product.name}</h3>
      <div class="product-price">${product.price}</div>
      <button class="add-to-cart-btn" onclick="openShopForm(${product.id})">SHOP NOW</button>
      
    </div>
  `
  return card
}

// Filter by category
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category

    filterBtns.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")

    if (category === "all") {
      displayProducts(products)
    } else {
      const filtered = products.filter((p) => p.category === category)
      displayProducts(filtered)
    }

    setTimeout(() => {
      const productsSection = document.getElementById("products")
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  })
})



// Search functionality - Main navbar search
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase()

  if (searchTerm.length === 0) {
    displayProducts(products)
    window.scrollTo({ top: 0, behavior: "smooth" })
    return
  }
  

  const filtered = products.filter(
    (p) => p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm),
  )
  displayProducts(filtered)

  if (filtered.length > 0 && searchTerm.length > 0) {
    setTimeout(() => {
      const firstProduct = document.querySelector(".product-card")
      if (firstProduct) {
        firstProduct.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }, 100)
  }
})


if (searchFilterInput) {
  searchFilterInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()

    if (searchTerm.length === 0) {
      displayProducts(products)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const filtered = products.filter(
      (p) => p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm),
    )
    displayProducts(filtered)

    if (filtered.length > 0 && searchTerm.length > 0) {
      setTimeout(() => {
        const firstProduct = document.querySelector(".product-card")
        if (firstProduct) {
          firstProduct.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      }, 100)
    }
  })
}

// Hamburger menu
hamburger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active")

  const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links-container');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-hidden');
});

})



// Close menu when link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("active")
  })
})

// Setup intersection observer for scroll animations
function setupIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.8s ease-out forwards"
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll(".product-card").forEach((card) => {
    observer.observe(card)
  })
}

// Event listeners setup
function setupEventListeners() {
  const style = document.createElement("style")
  style.textContent = `
    @keyframes scale-bounce {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
  `
  document.head.appendChild(style)
}

// Open image modal
function openImageModal(imgSrc) {
  document.getElementById("modalImg").src = imgSrc;
  document.getElementById("imageModal").style.display = "block";
}

// Close image modal
function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Close on outside click
window.addEventListener("click", function(e) {
  const modal = document.getElementById("imageModal");
  if (e.target === modal) {
    closeImageModal();
  }
});

let currentProductId = null;

function openShopForm(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  currentProductId = id; // ⭐ THIS IS THE IMPORTANT PART

  document.getElementById("shopImg").src = product.image;
  document.getElementById("shopName").textContent = product.name;
  document.getElementById("shopPrice").textContent = "₱" + product.price;

  document.getElementById("shopModal").style.display = "flex";
}

function closeShopForm() {
  document.getElementById("shopModal").style.display = "none";
}

function openChatModal() {
  // close order form
  document.getElementById("shopModal").style.display = "none";

  // open chat options
  document.getElementById("chatModal").style.display = "flex";
}

function closeChatModal() {
  document.getElementById("chatModal").style.display = "none";
}

function openSpecsModal() {
  if (!currentProductId) return;

  const product = products.find(p => p.id === currentProductId);

  // Allow SPECS only for gadgets
  if (product.category !== "gadgets") {
    alert("Specifications are available for gadgets only.");
    return;
  }

  document.getElementById("shopModal").style.display = "none";

  document.getElementById("specsImg").src = product.image;
  document.getElementById("specsName").textContent = product.name;
  document.getElementById("specsPrice").textContent = "₱" + product.price;

  const specsList = document.getElementById("specsList");
  specsList.innerHTML = "";

  const specs = gadgetSpecs[currentProductId] || ["No specifications available"];

  specs.forEach(spec => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });

  document.getElementById("specsModal").style.display = "flex";
}

function closeSpecsModal() {
  document.getElementById("specsModal").style.display = "none";
}

// ===== Hero CTA Buttons =====
const shopNowBtn = document.querySelector('.cta-button'); // Shop Now
const contactBtn = document.querySelector('.cta-button-secondary'); // Contact Us

if (shopNowBtn) {
  shopNowBtn.addEventListener('click', () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    window.open('https://www.facebook.com/gensanprimetechno', '_blank');
  });
}



document.querySelectorAll('.footer-categories a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const category = this.dataset.category;

    const filterBtn = document.querySelector(
      `.filter-btn[data-category="${category}"]`
    );

    if (filterBtn) {
      filterBtn.click();

      // Optional: scroll to products section
      document.getElementById('products')?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


