# Parker's Commercial Cleaning Website

Website codebase and SEO optimization repository for **Parker's Commercial Cleaning** (`parkerscommercial.co.uk`).

---

## 🚀 Local Development & Preview

To preview the website locally on `http://localhost:3000`:

```bash
# Using npx serve
npx --yes serve -p 3000

# Or using Python simple server
python -m http.server 3000
```

---

## 🗺️ Sitemap Generation (`sitemap.xml`)

This site includes an automated sitemap generator ([`generate-sitemap.js`](generate-sitemap.js)) to keep search engines updated whenever new service or location pages are added.

### How to Run:
```bash
node generate-sitemap.js
```

### Features:
- Scans all active `.html` files in the project directory.
- Formats clean canonical URLs (e.g. `https://parkerscommercial.co.uk/healthcare-sanitation-services`).
- Applies customized SEO priority weighting and `changefreq` values.
- Automatically sets the `<lastmod>` date to the current generation date.

---

## 🎯 SEO Strategy & Targeting

The site is optimized for organic search ranking and commercial inquiry conversion across **London & Essex**:

### 1. Primary Commercial Markets
- **Corporate Office Blocks & Facilities:** Daily and scheduled contract maintenance for commercial property managers and office building owners.
- **Property Management:** Communal area, lobby, and estate maintenance.
- **Industrial & Logistics:** Warehouses, factory floors, and distribution centers.

### 2. High-Converting Healthcare Niche
- **Dental Surgeries & Practices:** CQC-compliant audit-ready sterilization, decontamination, and BICSc color-coded cleaning.
- **Care Homes & Clinics:** Infection prevention and clinical-grade sanitation.

### 3. Technical SEO Assets
- **JSON-LD Schema:** Machine-readable `CleaningService` / `Service` schema markup across all pages defining geographic coverage, telephone numbers, and service catalogs.
- **Canonical Tags:** Prevent duplicate indexation issues.
- **OpenGraph & Twitter Cards:** Rich preview snippets for social and LinkedIn sharing.

---

## 📁 Key File Structure

```
├── index.html                           # Main Homepage (Commercial & Healthcare focus)
├── healthcare-sanitation-services.html  # Dental Practices & Care Homes CQC Cleaning
├── ongoing-contract-maintenance.html    # Corporate Office & Daily Contract Cleaning
├── property-management.html             # Commercial Property & Block Management
├── commercial-industrial-cleaning.html  # Industrial & Manufacturing Cleaning
├── warehouse-factory-cleaning.html      # Logistics & Factory Floor Cleaning
├── high-level-cladding.html             # Rope Access & High-Reach Facade Cleaning
├── post-construction-sparkle.html       # Builders Cleans & Handover Polishing
├── services.html                        # Comprehensive Service Catalog
├── about.html                           # Company History & 35+ Year Experience
├── case-studies.html                    # Client Proof & Results
├── contact.html                         # Quote Request & Site Visit Inquiries
├── domestic.html                        # Residential Property Maintenance Link
├── sitemap.xml                          # Search Engine Sitemap
├── robots.txt                           # Search Engine Crawler Directives
├── generate-sitemap.js                  # Automated Sitemap Generation Script
├── nav.js                               # Global Header / Navigation Logic
└── footer.js                            # Global Footer Layout
```
