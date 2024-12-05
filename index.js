function toggleNav() {
    const navItems = document.getElementById('navItems');
    navItems.classList.toggle('show');
}

// Close the mobile menu after clicking a nav item
const navLinks = document.querySelectorAll('.nav-items a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navItems = document.getElementById('navItems');
        navItems.classList.remove('show');
    });
});
