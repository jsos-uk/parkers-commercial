const footerHTML = `
<!-- Pre-footer CTA Strip -->
<section class="bg-gradient-to-r from-brand-900 via-brand-700 to-brand-900 text-white py-14 border-t-2 border-brand-accent/40 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div class="max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/15 border border-brand-accent/30 rounded-full text-brand-accent text-xs font-semibold uppercase tracking-wider mb-3">
                    <span class="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                    Immediate Site Walkthroughs Available
                </div>
                <h3 class="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white uppercase tracking-tight">
                    Ready For A Reliable Commercial Cleaning Partner?
                </h3>
                <p class="text-slate-300 text-sm md:text-base font-light mt-2 leading-relaxed">
                    SLA-backed contracts, dedicated account supervisors, and audit-ready compliance across London &amp; Essex.
                </p>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
                <a href="tel:02046206344" class="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium text-sm transition-all duration-300 backdrop-blur-sm">
                    <i data-lucide="phone-call" class="w-4 h-4 text-brand-accent"></i>
                    <span>020 4620 6344</span>
                </a>
                <a href="contact.html" class="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-accent hover:bg-white text-brand-900 font-heading font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl hover:text-brand-900 transition-all duration-300">
                    <span>Request Site Survey</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Main Corporate Footer -->
<footer data-theme="dark" class="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-white/10 relative">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <!-- Trust Badges & Credentials Bar -->
        <div class="pb-12 border-b border-white/10 mb-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-brand-900/60 border border-brand-accent/30 flex items-center justify-center flex-shrink-0 text-brand-accent">
                    <i data-lucide="shield-check" class="w-5 h-5"></i>
                </div>
                <div>
                    <h5 class="text-white text-xs font-bold uppercase tracking-wider">£10M Insured</h5>
                    <p class="text-[11px] text-slate-400">Public &amp; Employers Liability</p>
                </div>
            </div>
            
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-brand-900/60 border border-brand-accent/30 flex items-center justify-center flex-shrink-0 text-brand-accent">
                    <i data-lucide="award" class="w-5 h-5"></i>
                </div>
                <div>
                    <h5 class="text-white text-xs font-bold uppercase tracking-wider">35+ Years Proven</h5>
                    <p class="text-[11px] text-slate-400">Family-Run London &amp; Essex</p>
                </div>
            </div>
            
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-brand-900/60 border border-brand-accent/30 flex items-center justify-center flex-shrink-0 text-brand-accent">
                    <i data-lucide="check-circle-2" class="w-5 h-5"></i>
                </div>
                <div>
                    <h5 class="text-white text-xs font-bold uppercase tracking-wider">CQC &amp; COSHH</h5>
                    <p class="text-[11px] text-slate-400">Strict Clinical Standards</p>
                </div>
            </div>
            
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-brand-900/60 border border-brand-accent/30 flex items-center justify-center flex-shrink-0 text-brand-accent">
                    <i data-lucide="user-check" class="w-5 h-5"></i>
                </div>
                <div>
                    <h5 class="text-white text-xs font-bold uppercase tracking-wider">DBS-Vetted Staff</h5>
                    <p class="text-[11px] text-slate-400">Directly Employed &amp; Uniformed</p>
                </div>
            </div>
        </div>

        <!-- Main Footer Navigation Columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
            
            <!-- Column 1: Company Profile & Accreditations (4 cols) -->
            <div class="lg:col-span-4 space-y-6">
                <a href="index.html" class="inline-block">
                    <img src="images/parkers-logo-long.png" alt="Parker's Commercial Cleaning" class="h-9 w-auto brightness-0 invert opacity-95 hover:opacity-100 transition-opacity">
                </a>
                <p class="text-slate-400 text-sm font-light leading-relaxed">
                    Premier B2B commercial, property block, and high-reach facade maintenance contractor. Serving corporate office towers, property managers, logistics hubs, and CQC-registered healthcare facilities across Greater London, the City, and Essex.
                </p>
                
                <!-- Domestic Division Quick Switch Pill -->
                <div class="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-brand-accent/50 transition-all">
                    <p class="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Residential Customer?</p>
                    <a href="domestic.html" class="text-xs text-brand-accent hover:text-white font-medium inline-flex items-center gap-1.5 transition-colors">
                        Visit Parker's Domestic Division <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                    </a>
                </div>
            </div>

            <!-- Column 2: Commercial Services (3 cols) -->
            <div class="lg:col-span-3">
                <h4 class="text-white font-heading font-semibold text-base uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    Commercial Services
                </h4>
                <ul class="space-y-2.5 text-xs font-light">
                    <li>
                        <a href="commercial-gutter-cleaning.html" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 text-brand-accent font-medium transition-all">
                            <i data-lucide="chevron-right" class="w-3 h-3 text-brand-accent"></i> Commercial Gutter Cleaning
                        </a>
                    </li>
                    <li>
                        <a href="property-management.html" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-slate-300">
                            <i data-lucide="chevron-right" class="w-3 h-3 text-slate-500"></i> Property &amp; Block Maintenance
                        </a>
                    </li>
                    <li>
                        <a href="commercial-industrial-cleaning.html" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-slate-300">
                            <i data-lucide="chevron-right" class="w-3 h-3 text-slate-500"></i> Commercial Office Cleaning
                        </a>
                    </li>
                    <li>
                        <a href="healthcare-sanitation-services.html" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-slate-300">
                            <i data-lucide="chevron-right" class="w-3 h-3 text-slate-500"></i> Healthcare &amp; Dental Surgery
                        </a>
                    </li>
                    <li>
                        <a href="high-level-cladding.html" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-slate-300">
                            <i data-lucide="chevron-right" class="w-3 h-3 text-slate-500"></i> High-Level Facade &amp; Cladding
                        </a>
                    </li>
                    <li>
                        <a href="warehouse-factory-cleaning.html" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-slate-300">
                            <i data-lucide="chevron-right" class="w-3 h-3 text-slate-500"></i> Industrial &amp; Warehouse Units
                        </a>
                    </li>
                    <li>
                        <a href="post-construction-sparkle.html" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-slate-300">
                            <i data-lucide="chevron-right" class="w-3 h-3 text-slate-500"></i> Post-Construction Sparkle Cleans
                        </a>
                    </li>
                    <li>
                        <a href="ongoing-contract-maintenance.html" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-slate-300">
                            <i data-lucide="chevron-right" class="w-3 h-3 text-slate-500"></i> Ongoing Contract Maintenance
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Column 3: Company & Regional Coverage (2 cols) -->
            <div class="lg:col-span-2">
                <h4 class="text-white font-heading font-semibold text-base uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    Company
                </h4>
                <ul class="space-y-2.5 text-xs font-light mb-6">
                    <li><a href="index.html" class="hover:text-white transition-colors">Home</a></li>
                    <li><a href="about.html" class="hover:text-white transition-colors">About Parker's</a></li>
                    <li><a href="services.html" class="hover:text-white transition-colors">All Services Overview</a></li>
                    <li><a href="case-studies.html" class="hover:text-white transition-colors">Client Case Studies</a></li>
                    <li><a href="contact.html" class="hover:text-white transition-colors">Contact &amp; Site Quote</a></li>
                </ul>

                <h5 class="text-white text-xs font-bold uppercase tracking-wider mb-2">Regional Coverage</h5>
                <p class="text-[11px] text-slate-400 leading-relaxed">
                    Greater London &bull; City of London &bull; Canary Wharf &bull; Essex (Chelmsford, Romford, Brentwood, Basildon, Southend, Colchester).
                </p>
            </div>

            <!-- Column 4: Direct Inquiries & Contact (3 cols) -->
            <div class="lg:col-span-3 space-y-4">
                <h4 class="text-white font-heading font-semibold text-base uppercase tracking-wider mb-5 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    Direct Inquiries
                </h4>
                
                <div class="space-y-3 text-xs">
                    <div class="flex items-start gap-3">
                        <i data-lucide="phone" class="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5"></i>
                        <div>
                            <span class="block text-[10px] uppercase tracking-wider text-slate-400">Head Office Telephone</span>
                            <a href="tel:02046206344" class="text-white hover:text-brand-accent font-medium text-sm transition-colors">020 4620 6344</a>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <i data-lucide="mail" class="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5"></i>
                        <div>
                            <span class="block text-[10px] uppercase tracking-wider text-slate-400">B2B Proposals &amp; Tenders</span>
                            <a href="mailto:contact@parkerscommercial.co.uk" class="text-white hover:text-brand-accent text-xs font-light transition-colors break-all">contact@parkerscommercial.co.uk</a>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <i data-lucide="clock" class="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5"></i>
                        <div>
                            <span class="block text-[10px] uppercase tracking-wider text-slate-400">Operating Hours</span>
                            <span class="text-slate-300 font-light text-xs">24/7 Contract Service Delivery<br><span class="text-slate-400 text-[11px]">Helpdesk: Mon - Fri 08:00 - 18:00</span></span>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <i data-lucide="map-pin" class="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5"></i>
                        <div>
                            <span class="block text-[10px] uppercase tracking-wider text-slate-400">Main Operating Hub</span>
                            <span class="text-slate-300 font-light text-xs">London &amp; Essex Regional Headquarters</span>
                        </div>
                    </div>
                </div>

                <div class="pt-2">
                    <a href="contact.html" class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-900 hover:bg-brand-700 border border-brand-accent/40 rounded-lg text-white font-medium text-xs uppercase tracking-wider transition-all duration-300">
                        Book Site Assessment <i data-lucide="calendar" class="w-3.5 h-3.5 text-brand-accent"></i>
                    </a>
                </div>
            </div>

        </div>

        <!-- Bottom Copyright, Compliance & Legal Strip -->
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-slate-400">
            <div class="text-center md:text-left">
                <p>&copy; ${new Date().getFullYear()} Parker's Commercial Cleaning Ltd. Registered in England &amp; Wales. All rights reserved.</p>
                <p class="text-[11px] text-slate-400 mt-1">Specialist commercial contractors for offices, block management, healthcare, and industrial estates.</p>
            </div>
            
            <div class="flex flex-wrap items-center justify-center md:justify-end gap-5 text-xs text-slate-400">
                <a href="index.html" class="hover:text-white transition-colors">Home</a>
                <span class="text-slate-700">&bull;</span>
                <a href="services.html" class="hover:text-white transition-colors">Services</a>
                <span class="text-slate-700">&bull;</span>
                <a href="case-studies.html" class="hover:text-white transition-colors">Case Studies</a>
                <span class="text-slate-700">&bull;</span>
                <a href="contact.html" class="hover:text-white transition-colors">Contact</a>
                <span class="text-slate-700">&bull;</span>
                <a href="sitemap.xml" class="hover:text-white transition-colors">Sitemap</a>
            </div>
        </div>

    </div>
</footer>
`;

const footerPlaceholder = document.getElementById('footer-placeholder');
if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
    // Ensure Lucide icons inside injected footer are rendered
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}
