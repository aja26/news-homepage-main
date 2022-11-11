const toggleMenu = document.querySelector('.mobile-menu');
const ul = document.querySelector('ul');

toggleMenu.addEventListener('click', () => {
    ul.classList.toggle('active');
})