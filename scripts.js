

// Select elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll event handler
window.onscroll = () => {
    // Get current scroll position
    let scrollY = window.scrollY;

    // Iterate through each section to check visibility
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Determine if the section is in view
        if (scrollY >= offset && scrollY < offset + height) {
            // Remove 'active' class from all navLinks
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the corresponding navLink
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};

// Menu icon click handler for mobile navigation
/*menuIcon.onclick = () => {
   
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};*/
document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code here
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});
