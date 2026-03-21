const navHTML = `
<nav id="navbar" class="fixed w-full z-50 transition-all duration-500 bg-transparent py-6 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="flex justify-between items-center h-12">
            <div class="flex-shrink-0 flex items-center">
                <a href="index.html" class="transition-opacity duration-500 hover:opacity-80" id="nav-logo-link">
                    <img src="https://parkerscommercial.co.uk/wp-content/uploads/2025/09/cropped-Parkers-Logo-Long-354x80.png" alt="Parker's Commercial Cleaning" id="nav-logo-img" class="h-8 md:h-10 w-auto transition-all duration-500 brightness-0 invert">
                </a>
            </div>
            
            <div class="hidden md:flex items-center space-x-10">
                <a href="index.html" class="text-[14px] font-medium uppercase tracking-[0.2em] text-white hover:text-brand-accent transition-colors nav-link">Home</a>
                <a href="case-studies.html" class="text-[14px] font-medium uppercase tracking-[0.2em] text-white hover:text-brand-accent transition-colors nav-link">Case Studies</a>
                
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
                        <a href="property-management-specialist-services.html" class="block px-6 py-4 text-white text-sm hover:bg-white/10 hover:text-brand-accent transition-colors">Property Management</a>
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

    <!-- Mobile Menu Accordion -->
    <div id="mobile-menu" class="hidden md:hidden bg-brand-900 absolute w-full left-0 top-full border-t border-brand-500 z-40 shadow-2xl overflow-y-auto max-h-[85vh]">
        <div class="px-6 py-6 flex flex-col">
            <a href="index.html" class="text-lg font-sans text-white py-4 border-b border-white/10">Home</a>
            <a href="case-studies.html" class="text-lg font-sans text-white py-4 border-b border-white/10">Case Studies</a>
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
                    <a href="property-management-specialist-services.html" class="text-white/70 text-base py-2">Property Management</a>
                </div>
            </div>
            <a href="contact.html" class="text-lg font-sans text-white py-4">Contact Us</a>
        </div>
    </div>
</nav>
`;

// Inject into Page
document.getElementById('nav-placeholder').innerHTML = navHTML;

// Navigation Logic
lucide.createIcons();
const navbar = document.getElementById('navbar');
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
    let currentTheme = 'dark'; 
    const navRect = navbar.getBoundingClientRect();
    const navCenterY = navRect.top + (navRect.height / 2);
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navCenterY && rect.bottom >= navCenterY) { currentTheme = section.getAttribute('data-theme'); }
    });

    if (currentTheme === 'dark') {
        navbar.classList.remove('glass-nav'); navbar.classList.add('bg-transparent');
        if(navLogoImg) navLogoImg.classList.add('brightness-0', 'invert');
        menuBtn.classList.remove('text-brand-900'); menuBtn.classList.add('text-white');
        navLinks.forEach(l => { l.classList.remove('text-brand-900'); l.classList.add('text-white'); });
    } else {
        navbar.classList.add('glass-nav'); navbar.classList.remove('bg-transparent');
        if(navLogoImg) navLogoImg.classList.remove('brightness-0', 'invert');
        menuBtn.classList.remove('text-white'); menuBtn.classList.add('text-brand-900');
        navLinks.forEach(l => { l.classList.remove('text-white'); l.classList.add('text-brand-900'); });
    }
}

window.addEventListener('scroll', updateNavTheme);
window.addEventListener('resize', updateNavTheme);
updateNavTheme();
