const footerHTML = `
<footer data-theme="dark" class="bg-brand-900 py-16 border-t-[3px] border-brand-accent">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <img src="https://parkerscommercial.co.uk/wp-content/uploads/2025/09/cropped-Parkers-Logo-Long-354x80.png" alt="Parker's" class="h-8 md:h-10 brightness-0 invert">
        <div class="text-white/40 text-[10px] tracking-[0.1em] text-center md:text-right font-light uppercase">
            <p>&copy; ${new Date().getFullYear()} Parker's Commercial Cleaning. All rights reserved.</p>
            <div class="mt-4 flex flex-wrap gap-6 justify-center md:justify-end font-semibold">
                <a href="index.html" class="hover:text-white transition-colors">Home</a>
                <a href="services.html" class="hover:text-white transition-colors">Services</a>
                <a href="case-studies.html" class="hover:text-white transition-colors">Case Studies</a>
                <a href="contact.html" class="hover:text-white transition-colors">Contact</a>
            </div>
        </div>
    </div>
</footer>
`;

document.getElementById('footer-placeholder').innerHTML = footerHTML;
```

### Step 3: Clean up your 12 HTML pages
Now, on every single page (like `index.html`, `about.html`, etc.), you do this:

1.  **Delete** the entire `<nav>...</nav>` block.
2.  **In its place**, add this:
    ```html
    <div id="nav-placeholder"></div>
    ```
3.  **Delete** the entire `<footer>...</footer>` block.
4.  **In its place**, add this:
    ```html
    <div id="footer-placeholder"></div>
    ```
5.  **At the very bottom of the page** (just before the closing `</body>` tag), add these lines:
    ```html
    <script src="nav.js"></script>
    <script src="footer.js"></script>
