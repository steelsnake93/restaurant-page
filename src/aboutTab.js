const aboutTab = () => {
    const about = document.createElement('section');
    about.classList.add('about');

    const aboutHeader = document.createElement('h2');
    aboutHeader.classList.add('about-header');
    aboutHeader.textContent = 'About Our Restaurant';
    about.appendChild(aboutHeader);

    const aboutDescription = document.createElement('p');
    aboutDescription.classList.add('about-description');
    aboutDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere, ante in dictum congue, erat ex laoreet nibh, id tempor magna ipsum sit amet enim. Donec tempor justo et nisi condimentum laoreet.';
    about.appendChild(aboutDescription);

    return about;
};
export default aboutTab;