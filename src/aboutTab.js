const aboutTab = () => {
    const aboutDiv = document.createElement('div');
    aboutDiv.id = 'aboutDiv';
    aboutDiv.innerHTML = `<h1>About</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse pharetra elit vel vestibulum scelerisque.
                        </p>`;
    aboutDiv.style.backgroundColor = 'lightgrey';
    aboutDiv.style.padding = '20px';
    document.getElementById('content').appendChild(aboutDiv);
};
export default aboutTab;