// Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Stop autoplay when next or prev button is clicked
document.querySelector(".swiper-button-next").addEventListener("click", function () {
  swiper.autoplay.stop();
});

document.querySelector(".swiper-button-prev").addEventListener("click", function () {
  swiper.autoplay.stop();
});



// Hambueger Menu

const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const closeMenu = document.getElementById('closeMenu');
const searchBox = document.getElementById('searchBox');
const nav = document.querySelector('.nav');

// Toggle hamburger menu
hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
});

// Get all navigation links inside the nav
const navLinks = document.querySelectorAll('.nav ul li a');

// Add event listener to each nav link to show the hamburger menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.add('active'); // Show the menu
    });
});

// Close the hamburger menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!hamburgerMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        hamburgerMenu.classList.remove('active');
    }
});

// Handle search box behavior
searchBox.addEventListener('focus', function () {
    if (window.innerWidth > 995) { // Only expand for widths above 995px
        this.classList.add('expanded');
        nav.style.display = 'none';
    }
});

searchBox.addEventListener('blur', function () {
    if (window.innerWidth > 995) { // Only shrink for widths above 995px
        this.classList.remove('expanded');
        nav.style.display = 'flex';
    }
});

// Adjust navigation visibility based on window width
function handleResize() {
    if (window.innerWidth <= 995) {
        nav.style.display = 'none'; // Hide navigation links below 995px
    } else {
        nav.style.display = 'flex'; // Show navigation links above 995px
    }
}

// Add a resize event listener
window.addEventListener('resize', handleResize);

// Call the function on initial load to set the correct state
handleResize();

const fullscreenSearch = document.createElement('div');
fullscreenSearch.innerHTML = `
    <div class="fullscreen-search" id="fullscreenSearch">
        <input type="text" placeholder="Search..." id="fullscreenSearchInput">
    </div>`;
document.body.appendChild(fullscreenSearch);

const fullscreenSearchElement = document.getElementById('fullscreenSearch');
const fullscreenSearchInput = document.getElementById('fullscreenSearchInput');

// Show fullscreen search box below 995px on focus
searchBox.addEventListener('focus', function () {
    if (window.innerWidth <= 995) {
        fullscreenSearchElement.classList.add('active');
        fullscreenSearchInput.focus();
    }
});

// Hide fullscreen search box on blur
fullscreenSearchInput.addEventListener('blur', function () {
    fullscreenSearchElement.classList.remove('active');
});



// cart css

    // Initialize Swiper with breakpoints for responsiveness
    let  newSwiper = new Swiper('#drop-swiper-container', {
      slidesPerView: 5,
      spaceBetween: 10,
      navigation: {
        nextEl: '#drop-swiper-button-next',
        prevEl: '#drop-swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
      },
    });

    // Fetch data and add slides dynamically
    fetch('cart.json')
      .then(response => response.json())
      .then(products => {
        const swiperWrapper = document.getElementById('drop-swiper-wrapper');
        products.forEach(product => {
          const slide = document.createElement('div');
          slide.className = 'swiper-slide';
          slide.id = 'drop-swiper-slide'; // Add custom ID for each slide
          slide.innerHTML = `
            <div class="image-container" id="drop-image-container">
              <img src="${product.img1}" alt="${product.name}" class="img1" />
              <img src="${product.img2}" alt="${product.name}" class="img2" />
            </div>
            <div class="product-name" id="drop-product-name">${product.name}</div>
            <div class="product-price" id="drop-product-price">${product.price}</div>
          `;
          swiperWrapper.appendChild(slide);
        });
        newSwiper.update(); // Update Swiper after adding slides
      })
      .catch(error => console.error('Error fetching data:', error));



      // category 

      // Swiper Configuration for Category Section
var categorySwiper = new Swiper('#drop-swiper-container', {
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    nextEl: '#category-swiper-button-next',
    prevEl: '#category-swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
});

// Fetch Category Data and Add Slides Dynamically
fetch('https://casiop-roduct-category-default-rtdb.firebaseio.com/category.json')
  .then(response => response.json())
  .then(categories => {
    const categoryWrapper = document.getElementById('category-swiper-wrapper');
    categories.forEach(category => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <div class="category-card">
          <img src="${category.img}" alt="${category.name}" class="category-image" />
          <h3 class="category-name">${category.name}</h3>
          <p class="category-about">${category.about}</p>
        </div>
      `;
      categoryWrapper.appendChild(slide);
    });
    categorySwiper.update(); // Update Swiper after adding slides
  })
  .catch(error => console.error('Error fetching data:', error));

