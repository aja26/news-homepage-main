const toggleMenu = document.querySelector('.mobile-menu');
const ul = document.querySelector('ul');
 const docBody = window.document.body;

toggleMenu.addEventListener('click', () => {
    ul.classList.toggle('active');
    docBody.classList.toggle('active');
    if(ul.classList.contains('active')){
        toggleMenu.innerHTML = `<img src="assets/images/icon-menu-close.svg" alt="menu-icon-close">`;
    } else{
        toggleMenu.innerHTML = `<img src="assets/images/icon-menu.svg" alt="menu-icon-">`;
    }
})