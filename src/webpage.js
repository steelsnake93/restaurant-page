import createContactTab from './contactTab';
import createMenuTab from './menuTab';
import createAboutTab from './aboutTab';
import '../dist/style.css';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantLogo = document.createElement('h1');
    restaurantLogo.classList.add('restaurant-logo');
    restaurantLogo.textContent = 'LOGO';

    header.appendChild(restaurantLogo);
    restaurantLogo.addEventListener('click', loadHome);
    
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    header.appendChild(nav);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('button-nav');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', loadMenu);
    nav.appendChild(menuBtn);

    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('button-nav');
    aboutBtn.textContent = 'About';
    aboutBtn.addEventListener('click', loadAbout);
    nav.appendChild(aboutBtn);

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('button-nav');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', loadContact);
    nav.appendChild(contactBtn);    

    return header;
};

function loadHome() {

};

function loadMenu() {

};

function loadAbout() {

};

function loadContact() {

};

function setActiveButton(activeBtn) {
    const buttons = document.querySelectorAll('.button-nav');
    buttons.forEach((button) => {
        if(button === activeBtn) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
};

function initializeWebPage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());

    setActiveButton(document.querySelector('.button-nav'));
    loadHome();
};

export default initializeWebPage;