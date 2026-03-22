const navHTML = `
<nav id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent flex flex-col">
    <!-- Professional Domestic Banner (Above Main Nav - Visible on all devices) -->
    <div id="nav-banner" class="w-full py-2 transition-all duration-500 bg-white/10 backdrop-blur-sm border-b border-white/5">
        <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 text-center">
            <p id="banner-text" class="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.1em] md:tracking-[0.15em] text-white flex flex-wrap items-center justify-center gap-1.5 md:gap-2 leading-tight">
                <span class="opacity-90">Looking for residential property maintenance?</span>
                <a href="domestic.html" id="banner-link" class="text-brand-accent hover:text-white transition-colors font-bold inline-flex items-center gap-1 whitespace-nowrap">
                    Visit our domestic site <i data-lucide="arrow-right" class="w-3 h-3"></i>
                </a>
            </p>
        </div>
    </div>

    <div id="nav-main-container" class="w-full py-5 md:py-6 border-b border-white/10 transition-colors duration-500">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
            <div class="flex justify-between items-center h-12">
                <div class="flex-shrink-0 flex items-center">
                    <a href="index.html" class="transition-opacity duration-500 hover:opacity-80" id="nav-logo-link">
                        <img src="images/parkers-logo-long.png" alt="Parker's Commercial Cleaning" id="nav-logo-img" class="h-8 md:h-10 w-auto transition-all duration-500 brightness-0 invert">
                    </a>
                </div>
                
                <div class="hidden md:flex items-center space-x-10">
                    <a href="index.html" class="text-[14px] font-medium uppercase tracking-[0.2em] text-white hover:text-brand-accent transition-colors nav-link">Home</a>
                    <a href="about.html" class="text-[14px] font-medium uppercase tracking-[0.2em] text-white hover:text-brand-accent transition-colors nav-link">About</a>
                    
                    <div class="relative group">
                        <a href="services.html" class="text-[14px] font-medium uppercase tracking-[0.2em] text-white hover:text-brand-accent transition-colors nav-link flex items-center gap-1 cursor-pointer">
                            Services <i data-lucide="chevron-down" class="w-3 h-3"></i>
                        </a>
                        <div class="absolute top-full left-0 mt-4 w-72 bg-brand-900 border-t-2 border-brand-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl">
                            <a href="ongoing-contract-maintenance.html" class="block px-6 py-4 text-white text-sm hover:bg-white/10 hover:text-brand-accent transition-colors border-b border-white/10">Ongoing Contract Maintenance</a>
                            <a href="commercial-industrial-cleaning.html" class="block px-6 py-4 text-white text-sm hover:bg-white/10 hover:text-brand-accent transition-colors border-b border-white/10">Commercial & Industrial Cleaning</a>
                            <a href="healthcare-sanitation-services.html" class="block px-6 py-4 text-white text-sm hover:bg-white/10 hover:text-brand-accent transition-colors border-b border-white/10">Healthcare & Sanitation</a>
                            <a href="high-level-cladding.html" class="block px-6 py-4 text-white text-sm hover:bg-white/10 hover:text-brand-accent transition-colors border-b border-white/10">High-Level & Cladding</a>
                            <a href="post-construction-sparkle.html" class="block px-6 py-4 text-white text-sm hover:bg-white/10 hover:text-brand-accent transition-colors border-b border-white/10">Post-Construction & Sparkle</a>
                            <a href="warehouse-factory-cleaning.html" class="block px-6 py-4 text-white text-sm hover:bg-white/10 hover:text-brand-accent transition-colors border-b border-white/10">Warehouse & Factory</a>
                            <a href="property-management.html" class="block px-6 py-4 text-white text-sm hover:bg-white/10 hover:text-brand-accent transition-colors">Property Management</a>
                        </div>
                    </div>
                    
                    <a href="contact.html" class="text-[14px] font-medium uppercase tracking-[0.2em] text-white hover:text-brand-accent transition-colors nav-link">Contact Us</a>
                </div>

                <div class="hidden md:flex items-center gap-8">
                    <a href="tel:07395106650" class="flex items-center gap-3 text-white hover:text-brand-accent transition-colors group nav-link">
                        <i data-lucide="phone" class="w-4 h-4"></i>
                        <span class="text-[14px] tracking-[0.2em] font-semibold">07395 106 650</span>
                    </a>
                    <a href="contact.html" class="border border-brand-accent bg-brand-accent text-brand-900 px-8 py-3 font-teko uppercase tracking-[0.1em] text-xl hover:bg-white hover:border-white transition-all duration-500 nav-btn shadow-lg">Get A Quote</a>
                </div>

                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-white hover:text-brand-accent focus:outline-none nav-link p-2 transition-colors">
                        <i data-lucide="menu" class="h-8 w-8 stroke-[1.5]"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div id="mobile-menu" class="hidden md:hidden bg-brand-900 absolute w-full left-0 top-full border-t border-brand-500 z-40 shadow-2xl overflow-y-auto max-h-[85vh]">
        <div class="px-6 py-6 flex flex-col">
            <a href="index.html" class="text-lg font-sans text-white py-4 border-b border-white/10">Home</a>
            <a href="about.html" class="text-lg font-sans text-white py-4 border-b border-white/10">About</a>
            <div class="border-b border-white/10">
                <button id="mobile-services-btn" class="w-full flex justify-between items-center text-lg font-sans text-white py-4 focus:outline-none">
                    Services <i data-lucide="plus" class="w-5 h-5 text-brand-accent transition-transform duration-300" id="mobile-services-icon"></i>
                </button>
                <div id="mobile-services-menu" class="hidden pl-4 pb-4 flex flex-col space-y-4 bg-black/10 rounded-sm">
                    <a href="services.html" class="text-white/70 text-base py-2 border-b border-white/5">All Services Overview</a>
                    <a href="ongoing-contract-maintenance.html" class="text-white/70 text-base py-2 border-b border-white/5">Ongoing Contract Maintenance</a>
                    <a href="commercial-industrial-cleaning.html" class="text-white/70 text-base py-2 border-b border-white/5">Commercial & Industrial Cleaning</a>
                    <a href="healthcare-sanitation-services.html" class="text-white/70 text-base py-2 border-b border-white/5">Healthcare & Sanitation</a>
                    <a href="high-level-cladding.html" class="text-white/70 text-base py-2 border-b border-white/5">High-Level & Cladding</a>
                    <a href="post-construction-sparkle.html" class="text-white/70 text-base py-2 border-b border-white/5">Post-Construction & Sparkle</a>
                    <a href="warehouse-factory-cleaning.html" class="text-white/70 text-base py-2 border-b border-white/5">Warehouse & Factory</a>
                    <a href="property-management.html" class="text-white/70 text-base py-2">Property Management</a>
                </div>
            </div>
            <a href="contact.html" class="text-lg font-sans text-white py-4">Contact Us</a>
            
            <a href="domestic.html" class="text-lg font-sans text-brand-900 bg-brand-accent py-4 px-6 mt-6 font-bold flex items-center justify-between rounded shadow-md">
                Switch to Domestic Site <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
        </div>
    </div>
</nav>
`;

// Inject into Page
document.getElementById('nav-placeholder').innerHTML = navHTML;

// Navigation Logic
lucide.createIcons();
const navbar = document.getElementById('navbar');
const navMainContainer = document.getElementById('nav-main-container');
const navBanner = document.getElementById('nav-banner');
const bannerText = document.getElementById('banner-text');
const bannerLink = document.getElementById('banner-link');
const navLogoImg = document.getElementById('nav-logo-img');
const navLinks = document.querySelectorAll('.nav-link');
const navBtn = document.querySelector('.nav-btn');
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const sections = document.querySelectorAll('[data-theme]');

menuBtn.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });

const mobServBtn = document.getElementById('mobile-services-btn');
const mobServMenu = document.getElementById('mobile-services-menu');
const mobServIcon = document.getElementById('mobile-services-icon');
if(mobServBtn) {
    mobServBtn.addEventListener('click', () => {
        mobServMenu.classList.toggle('hidden');
        mobServIcon.style.transform = mobServMenu.classList.contains('hidden') ? 'rotate(0)' : 'rotate(45deg)';
    });
}

function updateNavTheme() {
    let currentTheme = 'dark'; // Always default to dark at the top of the page
    
    // Calculate section overlaps to change theme
    const navRect = navbar.getBoundingClientRect();
    const navCenterY = navRect.top + (navRect.height / 2);
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navCenterY && rect.bottom >= navCenterY) { 
            currentTheme = section.getAttribute('data-theme') || 'light'; 
        }
    });

    if (currentTheme === 'dark') {
        navbar.classList.remove('glass-nav'); 
        navbar.classList.add('bg-transparent');
        
        if (navMainContainer) {
            navMainContainer.classList.add('border-white/10');
            navMainContainer.classList.remove('border-transparent');
        }

        if (navBanner) {
            navBanner.classList.add('bg-white/10', 'border-white/5');
            navBanner.classList.remove('bg-slate-100', 'border-slate-200');
        }

        if (bannerText) {
            bannerText.classList.add('text-white');
            bannerText.classList.remove('text-brand-text');
        }

        if (bannerLink) {
            bannerLink.classList.add('text-brand-accent', 'hover:text-white');
            bannerLink.classList.remove('text-brand-500', 'hover:text-brand-900');
        }

        if(navLogoImg) navLogoImg.classList.add('brightness-0', 'invert');
        menuBtn.classList.remove('text-brand-900'); menuBtn.classList.add('text-white');
        navLinks.forEach(l => { l.classList.remove('text-brand-900'); l.classList.add('text-white'); });
    } else {
        navbar.classList.add('glass-nav'); 
        navbar.classList.remove('bg-transparent');
        
        if (navMainContainer) {
            navMainContainer.classList.remove('border-white/10');
            navMainContainer.classList.add('border-transparent');
        }

        if (navBanner) {
            navBanner.classList.remove('bg-white/10', 'border-white/5');
            navBanner.classList.add('bg-slate-100', 'border-slate-200');
        }

        if (bannerText) {
            bannerText.classList.remove('text-white');
            bannerText.classList.add('text-brand-text');
        }

        if (bannerLink) {
            bannerLink.classList.remove('text-brand-accent', 'hover:text-white');
            bannerLink.classList.add('text-brand-500', 'hover:text-brand-900');
        }

        if(navLogoImg) navLogoImg.classList.remove('brightness-0', 'invert');
        menuBtn.classList.remove('text-white'); menuBtn.classList.add('text-brand-900');
        navLinks.forEach(l => { l.classList.remove('text-white'); l.classList.add('text-brand-900'); });
    }
}

window.addEventListener('scroll', updateNavTheme);
window.addEventListener('resize', updateNavTheme);
updateNavTheme();