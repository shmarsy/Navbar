const toggler = document.getElementById('toggler');
const navlinks = document.getElementById('nav-link');

toggler.addEventListener('click', () => {
    navlinks.classList.toggle('active');
})