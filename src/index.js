import createContactTab from './contactTab';
import createMenuTab from './menuTab.js';
import createAboutTab from './aboutTab.js';
import './style.css';

const navBar = document.createElement('div');
navBar.id ='navBar';
navBar.innerHTML = `
    <div id="logo">LOGO</div>
    <div id="tabs">
        <button id="menuTab">Menu</button>
        <button id="aboutTab">About</button>
        <button id="contactTab">Contact</button>
    </div>`;
document.body.appendChild(navBar);

const menuTab = document.getElementById('menuTab');
const aboutTab = document.getElementById('aboutTab');
const contactTab = document.getElementById('contactTab');
const content = document.getElementById('content');
content.id = 'content';
document.body.appendChild(content);

menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    createMenuTab();
});

contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    createContactTab();
});

aboutTab.addEventListener('click', () => {
    content.innerHTML = '';
    createAboutTab();
});