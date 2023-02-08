const contactTab = () => {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');

  const contactHeader = document.createElement('h2');
  contactHeader.classList.add('contact-title');
  contactHeader.textContent = 'We would love to hear from you';

  const contactSub = document.createElement('p');
  contactSub.classList.add('contact-subtitle');
  contactSub.textContent = 'Feel free to reach out to us at any time';

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');
  contactInfo.innerHTML = `<p class="contact-info-item">
                              <i class="fas fa-phone"></i>
                              <a href="tel:1234567890">(123) 456-7890</a>
                            </p>
                            <p class="contact-info-item">
                              <i class="fas fa-envelope"></i>
                              <a href="mailto:contact@restaurant.com">contact@restaurant.com</a>
                            </p>`;
  contactDiv.appendChild(contactHeader);
  contactDiv.appendChild(contactSub);
  contactDiv.appendChild(contactInfo);

  return contactDiv;
};
export default contactTab;