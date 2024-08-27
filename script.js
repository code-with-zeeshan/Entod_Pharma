document.addEventListener('DOMContentLoaded', function () {
    const galleryTitle = document.getElementById('gallery-title');
    const medicineGallery = document.getElementById('medicine-gallery');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-container button');
    const darkModeToggle = document.getElementById('checkbox');
    const glotekImage = document.getElementById('glotekImage');
    const darkModeStylesheet = 'style-dark.css';
    const darkModeImageSrc = 'Images/my-image.png'; // Path to the dark mode image
    const lightModeImageSrc = 'Images/1723848402944-removebg-preview.png'; // Path to the light mode image
    let currentCategory = '';
    let ignoreBlur = false;
    
     // Search Bar Toggle
  function toggleSearchBar() {
        if (!searchInput.classList.contains('active')) {
            searchInput.classList.add('active');
            searchInput.focus();
        }
    }
    
    searchButton.addEventListener('click', toggleSearchBar);
    

    searchInput.addEventListener('focus', function () {
        ignoreBlur = true;
    });

    

    searchInput.addEventListener('blur', function () {
        if (ignoreBlur) {
            setTimeout(() => {
                searchInput.classList.remove('active');
            }, 200);
            ignoreBlur = false;
        }
    });

    // Collapse search bar if click is detected outside
    document.addEventListener('click', function (event) {
        if (!searchInput.contains(event.target) && !searchButton.contains(event.target)) {
            searchInput.classList.remove('active');
        }
    });

    

   // Dark mode toggle
   

   function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    if (isDarkMode) {
        loadCSS(darkModeStylesheet);
        glotekImage.src = darkModeImageSrc;
    } else {
        unloadCSS();
        glotekImage.src = lightModeImageSrc;
    }
}

function loadCSS(href) {
    let link = document.getElementById('darkModeStylesheet');
    if (!link) {
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.id = 'darkModeStylesheet';
        document.head.appendChild(link);
    }
}

function unloadCSS() {
    const existingLink = document.getElementById('darkModeStylesheet');
    if (existingLink) {
        document.head.removeChild(existingLink);
    }
}


  // Initialize dark mode based on user preference (if any)
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    loadCSS(darkModeStylesheet);
    glotekImage.src = darkModeImageSrc;
    darkModeToggle.checked = true; // Ensure the toggle reflects the saved state
}

// Toggle dark mode on click or touch
function toggleDarkModeHandler() {
    toggleDarkMode();
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

darkModeToggle.addEventListener('change', toggleDarkModeHandler);

// New code for theme switch
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


// Shrink gallery title on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 50) { // Adjust this value based on when you want the title to shrink
        galleryTitle.classList.add('shrink');
    } else {
        galleryTitle.classList.remove('shrink');
    }
});


    const medicines = {
        'Surgical Range': [
            { name: 'Phenocaine Plus', image: 'Images/IMG_20240817_001420_962-removebg-preview.png', detailImage: 'Images/Images2/Photo745761120928_inner_99-78-642-74-97-882-641-891.jpg', description: 'Intracameral Injection' },
            { name: 'Hyloject 14', image: 'Images/IMG_20240817_001254_202-removebg-preview.png', detailImage: 'Images/Images2/Photo745761447896_inner_101-139-615-121-94-896-615-910.jpg' },
            { name: 'Hyloject CS', image: 'Images/IMG_20240817_001226_896-removebg-preview.png', detailImage: 'Images/Images2/Photo745761463746_inner_114-121-609-101-102-871-627-891.jpg' },
            { name: 'Hyloject Duo', image: 'Images/1723836803904-removebg-preview.png', detailImage: 'Images/Images2/Photo745761477251_inner_165-148-654-129-146-861-638-903.jpg'},
            
            { name: '4 QuinPFS 0.5ml', image: 'Images/1723836769144-removebg-preview.png', detailImage: 'Images/Images2/Photo745761490324_inner_183-141-672-115-173-867-666-900.jpg'},
            { name: 'BSSOL', image: 'Images/IMG_20240817_000946_548-removebg-preview.png', detailImage: 'Images/Images2/Photo745761524026_inner_142-91-702-72-153-884-690-923.jpg'},
            { name: 'Carbatod', image: 'Images/1723836704662-removebg-preview.png', detailImage: 'Images/Images2/Photo745761676428_inner_134-128-662-97-120-896-654-948.jpg' },
            { name: 'Tromide-Plus', image: 'Images/1723836661867-removebg-preview.png', detailImage: 'Images/Images2/Photo745761716500_inner_135-119-638-115-119-870-627-907.jpg', description: 'Eye Drops/UNI-ED' },
            { name: 'P-Caine', image: 'Images/IMG_20240817_000525_607-removebg-preview.png', detailImage: 'Images/Images2/Photo745761703034_inner_135-117-643-114-139-859-633-891.jpg', description: 'Eye Drops' },
            { name: 'BlueTod', image: 'Images/1723836725159-removebg-preview.png', detailImage: 'Images/Images2/Photo745761647811_inner_137-146-656-144-125-900-636-927.jpg' },
            
            { name: 'POVISWAB', image: 'Images/1723836749701-removebg-preview.png', detailImage: 'Images/Images2/Photo745761504908_inner_175-131-674-96-169-851-674-895.jpg', description: 'Swabstick' },
            { name: 'AKUSAID', image: 'Images/1723836686577-removebg-preview.png', detailImage: 'Images/Images2/Photo745761732834_inner_143-138-682-125-137-893-680-980.jpg', description: 'UNI-ED' },
            { name: 'I-DEW', image: 'Images/IMG_20240817_001334_143-removebg-preview.png', detailImage: 'Images/Images2/Photo745761233797_inner_99-86-695-79-114-896-672-933.jpg', description: 'LID Wipes' },
            { name: 'CYCLOFEZ & ENTODASE & Homacid', image: 'Images/Blank 2 Grids Collage3.png', detailImage: 'Images/Images2/Photo745761608400_inner_150-148-653-122-150-887-668-906.jpg', description: 'Eye Drops & Injection' },
         ],
        'Anti-Glaucoma': [
            { name: 'ABPress & ABPressPF', image: 'Images/Blank 2 Grids Collage2.png', detailImage: 'Images/Images2/Photo745764150443_inner_72-77-648-64-66-930-659-957.jpg', description: 'Eye Drops' },
            { name: 'DUO-2', image: 'Images/1723834578197-removebg-preview.png', detailImage: 'Images/Images2/Photo745764302206_inner_135-157-642-143-135-895-665-919.jpg', description: 'Eye Drops' },
            { name: 'T-1 PF', image: 'Images/IMG_20240816_231841_029-removebg-preview.png', detailImage: 'Images/Images2/Photo745764315010_inner_129-116-645-104-119-889-647-922.jpg', description: 'Eye Drops' },
            { name: 'T-BET PF', image: 'Images/IMG_20240816_232321_267-removebg-preview.png', detailImage: 'Images/Images2/Photo745761140824_inner_76-123-606-122-64-897-595-910.jpg', description: 'Eye Drops' },
            { name: 'LatePM', image: 'Images/1723836520869-removebg-preview.png', detailImage: 'Images/Images2/Photo745760579963_inner_144-55-598-55-126-844-627-801.jpg', description: 'Eye Drops' },
            { name: 'BITOD LS', image: 'Images/1723836563294-removebg-preview.png', detailImage: 'Images/Images2/Photo745761151663_inner_118-141-628-127-107-861-597-884.jpg', description: 'Eye Drops' },
            { name: 'EN-DOR & EN-DOR Plus', image: 'Images/Blank 2 Grids Collage1.png', detailImage: 'Images/Images2/Photo745763930039_inner_92-109-676-88-111-948-692-963.jpg', description: 'Eye Drops' },
            { name: 'Brent-LS', image: 'Images/1723835639207-removebg-preview.png', detailImage: 'Images/Images2/Photo745761161609_inner_170-145-669-158-149-876-642-918.jpg', description: 'Eye Drops' },
            { name: 'Brintod', image: 'Images/IMG_20240816_232826_995-removebg-preview.png', detailImage: 'Images/Images2/Photo745761173784_inner_152-163-669-147-129-901-653-956.jpg', description: 'Eye Drops' },
            { name: 'TIMOL-P & Press-DT', image: 'Images/Blank 2 Grids Collage.png', detailImage: 'Images/Images2/Photo745761193706_inner_138-160-680-138-138-916-686-951.jpg', description: 'Eye Drops & Tablets' },
        ],
        'Dry Eye Range ': [
            { name: 'TheoTears D', image: 'Images/IMG_20240816_235821_110-removebg-preview.png', detailImage: 'Images/Images2/Photo745762021123_inner_123-37-594-43-122-987-612-1000.jpg', description: 'Eye Drops' },
            { name: 'TheoTears', image: 'Images/IMG_20240816_235349_872-removebg-preview.png', detailImage: 'Images/Images2/Photo745764343910_inner_87-118-647-94-90-934-641-949.jpg', description: 'Eye Drops' },
            { name: 'CycloTears D', image: 'Images/1723836641046-removebg-preview.png', detailImage: 'Images/Images2/Photo745762075352_inner_173-43-626-44-193-971-644-952.jpg', description: 'Eye Drops' },
            { name: 'CycloTears', image: 'Images/1723836578227-removebg-preview.png', detailImage: 'Images/Images2/Photo745761208104_inner_96-115-630-102-112-891-630-895.jpg', description: 'Eye Drops/UNI-ED' },
            { name: 'SMARTMEGA-500', image: 'Images/1723839459591-removebg-preview.png', detailImage: 'Images/Images2/Photo745760453944_inner_86-33-623-55-99-916-627-878.jpg', description: 'Capsules' },
            { name: 'BioTears', image: 'Images/1723836593231-removebg-preview.png', detailImage: 'Images/Images2/Photo745761220879_inner_126-120-656-83-122-897-653-916.jpg', description: 'Eye Drops' },
            { name: 'Ophthapan', image: 'Images/1723836614034-removebg-preview.png', detailImage: 'Images/Images2/Photo745761792820_inner_163-115-671-72-162-869-672-919.jpg', description: 'Eye Gel' },
            { name: 'TREHAMOIST', image: 'Images/IMG_20240818_114852_344-removebg-preview.png', detailImage: 'Images/Images2/Photo745764328757_inner_97-102-640-83-87-897-646-921.jpg', description: 'Eye Drops' },
        ],
       'Other Range': [
            { name: 'OPTIGESIC CT', image: 'Images/IMG_20240817_001956_352-removebg-preview.png', detailImage: 'Images/Images2/Photo745760552944_inner_99-41-655-80-111-953-662-898.jpg', description: 'Tablets' },
            { name: 'OPTICIDIC DSR', image: 'Images/1723839051780-removebg-preview.png', detailImage: 'Images/Images2/Photo745760527907_inner_73-31-627-43-73-977-642-895.jpg', description: 'Capsules' },
            { name: 'MONODEXA', image: 'Images/IMG_20240817_000805_036-removebg-preview.png', detailImage: 'Images/Images2/Photo745761779423_inner_160-141-636-117-151-856-633-898.jpg', description: 'Eye Drops' },
            { name: 'LV Flox & LV Flox Forte', image: 'Images/Images2/Blank 2 Grids2 Collage.png', detailImage: 'Images/Images2/Photo745761833202_inner_90-63-668-52-88-902-666-931.jpg', description: 'Eye Drops' },
            
            { name: 'BESITOP', image: 'Images/IMG_20240817_000725_711-removebg-preview.png', detailImage: 'Images/Images2/Photo745761812492_inner_167-103-681-45-152-881-658-942.jpg', description: 'Eye Drops' },
        ]
        };

   
function renderMedicines(category, filterQuery = '') {
    const categoryMedicines = medicines[category];
if (!categoryMedicines) return; // Check if the category exists

    medicineGallery.innerHTML = ''; // Clear existing items
    galleryTitle.textContent = category.replace('-', ' ').replace(/(^|\s)\S/g, l => l.toUpperCase());

    const filteredMedicines = medicines[category].filter(medicine =>
     medicine.name.toLowerCase().includes(filterQuery.toLowerCase())
);


    // If no medicines match the filter, display a message
    if (filteredMedicines.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No medicines available in this category or matching your search query.';
        noResultsMessage.style.textAlign = 'center';
        noResultsMessage.style.color = '#7f8c8d';
        medicineGallery.appendChild(noResultsMessage);
        return;
    }

    filteredMedicines.forEach(medicine => {
        const item = document.createElement('div');
        item.classList.add('medicine-item');
        const detailsUrl = `details.html?name=${encodeURIComponent(medicine.name)}&image=${encodeURIComponent(medicine.detailImage)}&description=${encodeURIComponent(medicine.description)}`;
        item.innerHTML = `
            <a href="${detailsUrl}">
                <img src="${medicine.image}" alt="${medicine.name}">
                <h2>${medicine.name}</h2>
                <p>${medicine.description || ''}</p>
            </a>
        `;
        medicineGallery.appendChild(item);
        
       
        // Trigger animation
        setTimeout(() => item.classList.add('in-view'), 100);
    });
}
    

   // Category selection with click and touch
   function categorySelectionHandler(event) {
    document.querySelector('.sidebar li.active')?.classList.remove('active');
    event.currentTarget.classList.add('active');
    currentCategory = event.currentTarget.getAttribute('data-category');
    renderMedicines(currentCategory); // Render medicines for the selected category
}

document.querySelectorAll('.sidebar li').forEach(li => {
    li.addEventListener('click', categorySelectionHandler);
    li.addEventListener('touchstart', categorySelectionHandler);
});


   


    
    // Perform search
    function performSearch() {
        const query = searchInput.value;
        renderMedicines(currentCategory, query);
    }
    

     // Attach the search function to the input event
    searchInput.addEventListener('input',  performSearch); 

    // Check if service workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Register the service worker
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(error => {
        console.error('ServiceWorker registration failed: ', error);
      });
    });
  }
  // Check if we are in standalone mode and try to enter immersive mode
  if (window.matchMedia('(display-mode: standalone)').matches) {
    if (window.AndroidFullScreen && typeof window.AndroidFullScreen.immersiveMode === 'function') {
        console.log('Standalone mode detected.');
        window.AndroidFullScreen.immersiveMode(
            () => console.log('Entered immersive mode successfully'),
            (error) => console.error('Failed to enter immersive mode', error)
        );
    } else {
        console.warn('AndroidFullScreen API not available or immersiveMode function is undefined.');
    }
  }

 // Function to check if the device is mobile or tablet
function isMobileOrTablet() {
    return window.matchMedia('(max-width: 1024px)').matches;
}


    // Check if the device is mobile or tablet
    if (isMobileOrTablet()) {
        const footer = document.querySelector('.footer');
        
        // Ensure the footer element exists
        if (footer) {
            document.addEventListener('focusin', (event) => {
                if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
                    footer.style.display = 'none';
                }
            });

            document.addEventListener('focusout', () => {
                footer.style.display = 'block';
            });
        } else {
            console.warn('Footer element not found.');
        }
    }
});



