const menuTab = () => {
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menuDiv';
    menuDiv.innerHTML = `<h1>Our Menu</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse pharetra elit vel vestibulum scelerisque.
                        </p>`;
    menuDiv.style.backgroundColor = 'lightyellow';
    menuDiv.style.padding = '20px';
    document.getElementById('content').appendChild(menuDiv);
};

export default menuTab;