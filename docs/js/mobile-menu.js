// Mobile hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.navbar ul');
    const deroulant = document.querySelector('.deroulant');

    if (!hamburger || !navList) return;

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navList.classList.toggle('open');
    });

    // Toggle dropdown on mobile tap
    if (deroulant) {
        const deroulantLink = deroulant.querySelector('a');
        deroulantLink.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                deroulant.classList.toggle('sous-open');
            }
        });
    }

    // Close menu when a link is clicked (on mobile)
    const navLinks = navList.querySelectorAll('a:not(.deroulant > a)');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navList.classList.remove('open');
            }
        });
    });

    // Close menu on resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navList.classList.remove('open');
        }
    });
});
