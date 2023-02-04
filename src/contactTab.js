const contactTab = () => {
    const contactDiv = document.createElement('div');
    contactDiv.id = 'contactDiv';
    contactDiv.innerHTML = '<h1>Contact Us</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra elit vel vestibulum scelerisque.</p>';
    contactDiv.style.backgroundColor = 'lightgrey';
    contactDiv.style.padding = '20px';
    document.getElementById('content').appendChild(contactDiv);
  };
  
  export default contactTab;