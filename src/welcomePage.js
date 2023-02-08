
const welcomePage = () => {
    const welcomeContainer = document.createElement('div');
    welcomeContainer.classList.add('welcome-container');

    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = 'Welcome to Melina Restaurant';
    welcomeContainer.appendChild(welcomeMessage);

    const welcomeText = document.createElement('p');
    welcomeText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Nullam gravida, lorem vel molestie placerat, ipsum lacus commodo sapien, eget dignissim tellus nulla a lorem.';
    welcomeContainer.appendChild(welcomeText);

    return welcomeContainer;
};

export default welcomePage;