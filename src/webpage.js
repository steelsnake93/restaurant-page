import createContactTab from './contactTab';
import createMenuTab from './menuTab';
import createAboutTab from './aboutTab';
import '../dist/style.css';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantLogo = document.createElement('h1');
    restaurantLogo.classList.add('restaurant-logo');
    restaurantLogo.textContent = 'Melina';
    header.appendChild(restaurantLogo);
    restaurantLogo.addEventListener('click', loadHome);
    
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    header.appendChild(nav);

    const navList = document.createElement('ul');
    navList.classList.add('nav-list');
    nav.appendChild(navList);

    const menuItem = document.createElement('li');
    menuItem.classList.add('nav-item');
    navList.appendChild(menuItem);
    
    const menuLink = document.createElement('a');
    menuLink.classList.add('nav-link');
    menuLink.textContent = 'Menu';
    menuLink.href = '#menu';
    menuLink.addEventListener('click', loadMenu);
    menuItem.appendChild(menuLink);

    const aboutItem = document.createElement('li');
    aboutItem.classList.add('nav-item');
    navList.appendChild(aboutItem);
    
    const aboutLink = document.createElement('a');
    aboutLink.classList.add('nav-link');
    aboutLink.textContent = 'About';
    aboutLink.href = '#about';
    aboutLink.addEventListener('click', loadAbout);
    aboutItem.appendChild(aboutLink);

    const contactItem = document.createElement('li');
    contactItem.classList.add('nav-item');
    navList.appendChild(contactItem);
    
    const contactLink = document.createElement('a');
    contactLink.classList.add('nav-link');
    contactLink.textContent = 'Contact';
    contactLink.href = '#contact';
    contactLink.addEventListener('click', loadContact);
    contactItem.appendChild(contactLink); 

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