const contactTab = () => {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const contactHeader = document.createElement('h2');
  contactHeader.textContent = 'Contact Us';
  contactHeader.appendChild(contactHeader);

  const contactContent = document.createElement('p');
  contactContent.classList.add('contact-content');
  contactContent.textContent = 'Feel free to reach out to us with any questions or comments. You can call us at (123) 456-7890 or send us an email at info@melina.com.';
  contactContent.appendChild(contactContent);

  return contactContainer;
};
export default contactTab;