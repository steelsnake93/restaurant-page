import createContactTab from './contactTab';
import createMenuTab from './menuTab.js';

const tabs = document.createElement('div');
tabs.id ='tabs';
tabs.innerHTML = `
    <button id="contactTab">Contact</button>
    <button id="menuTab">Menu</button>`;
document.body.appendChild(tabs);

const contactTab = document.getElementById('contactTab');
const menuTab = document.getElementById('menuTab');
const content = document.getElementById('content');
content.id = 'content';
document.body.appendChild(content);

contactTab.addEventListener('click', () => {
    content.innerHTML = '';
    createContactTab();
});

menuTab.addEventListener('click', () => {
    content.innerHTML = '';
    createMenuTab();
});