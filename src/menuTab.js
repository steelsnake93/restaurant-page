const menuTab = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuHeader = document.createElement('h2');
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = 'Our Menu';
    menuContainer.appendChild(menuHeader);

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');
    menuContainer.appendChild(menuList);

    const menuItem1 = document.createElement('li');
    menuItem1.classList.add('menu-item');
    menuList.appendChild(menuItem1);
    
    const menuItem1Name = document.createElement('h3');
    menuItem1Name.classList.add('menu-item-name');
    menuItem1Name.textContent = 'Spaghetti Carbonara';
    menuItem1.appendChild(menuItem1Name);
    
    const menuItem1Info = document.createElement('p');
    menuItem1Info.classList.add('menu-item-info');
    menuItem1Info.textContent = 'Spaghetti with bacon, eggs, and parmesan cheese';
    menuItem1.appendChild(menuItem1Info);
    
    const menuItem1Price = document.createElement('p');
    menuItem1Price.classList.add('menu-item-price');
    menuItem1Price.textContent = '$12.99';
    menuItem1.appendChild(menuItem1Price);

    const menuItem2 = document.createElement('li');
    menuItem2.classList.add('menu-item');
    menuList.appendChild(menuItem2);
    
    const menuItem2Name = document.createElement('h3');
    menuItem2Name.classList.add('menu-item-name');
    menuItem2Name.textContent = 'Pizza Margherita';
    menuItem2.appendChild(menuItem2Name);
    
    const menuItem2Info = document.createElement('p');
    menuItem2Info.classList.add('menu-item-info');
    menuItem2Info.textContent = 'Tomato sauce, mozzarella cheese, and basil';
    menuItem2.appendChild(menuItem2Info);
    
    const menuItem2Price = document.createElement('p');
    menuItem2Price.classList.add('menu-item-price');
    menuItem2Price.textContent = '$14.99';
    menuItem2.appendChild(menuItem2Price);

    const menuItem3 = document.createElement('li');
    menuItem3.classList.add('menu-item');
    menuList.appendChild(menuItem3);
    
    const menuItem3Name = document.createElement('h3');
    menuItem3Name.classList.add('menu-item-name');
    menuItem3Name.textContent = 'Pizza Margherita';
    menuItem3.appendChild(menuItem3Name);
    
    const menuItem3Info = document.createElement('p');
    menuItem3Info.classList.add('menu-item-info');
    menuItem3Info.textContent = 'Tomato sauce, mozzarella cheese, and basil';
    menuItem3.appendChild(menuItem3Info);
    
    const menuItem3Price = document.createElement('p');
    menuItem3Price.classList.add('menu-item-price');
    menuItem3Price.textContent = '$14.99';
    menuItem3.appendChild(menuItem3Price);

    const menuItem4 = document.createElement('li');
    menuItem4.classList.add('menu-item');
    menuList.appendChild(menuItem4);
    
    const menuItem4Name = document.createElement('h3');
    menuItem4Name.classList.add('menu-item-name');
    menuItem4Name.textContent = 'Pizza Margherita';
    menuItem4.appendChild(menuItem4Name);
    
    const menuItem4Info = document.createElement('p');
    menuItem4Info.classList.add('menu-item-info');
    menuItem4Info.textContent = 'Tomato sauce, mozzarella cheese, and basil';
    menuItem4.appendChild(menuItem4Info);
    
    const menuItem4Price = document.createElement('p');
    menuItem4Price.classList.add('menu-item-price');
    menuItem4Price.textContent = '$14.99';
    menuItem4.appendChild(menuItem4Price);

    const menuItem5 = document.createElement('li');
    menuItem5.classList.add('menu-item');
    menuList.appendChild(menuItem5);
    
    const menuItem5Name = document.createElement('h3');
    menuItem5Name.classList.add('menu-item-name');
    menuItem5Name.textContent = 'Pizza Margherita';
    menuItem5.appendChild(menuItem5Name);
    
    const menuItem5Info = document.createElement('p');
    menuItem5Info.classList.add('menu-item-info');
    menuItem5Info.textContent = 'Tomato sauce, mozzarella cheese, and basil';
    menuItem5.appendChild(menuItem5Info);
    
    const menuItem5Price = document.createElement('p');
    menuItem5Price.classList.add('menu-item-price');
    menuItem5Price.textContent = '$14.99';
    menuItem5.appendChild(menuItem5Price);

    const menuItem6 = document.createElement('li');
    menuItem6.classList.add('menu-item');
    menuList.appendChild(menuItem6);
    
    const menuItem6Name = document.createElement('h3');
    menuItem6Name.classList.add('menu-item-name');
    menuItem6Name.textContent = 'Pizza Margherita';
    menuItem6.appendChild(menuItem6Name);
    
    const menuItem6Info = document.createElement('p');
    menuItem6Info.classList.add('menu-item-info');
    menuItem6Info.textContent = 'Tomato sauce, mozzarella cheese, and basil';
    menuItem6.appendChild(menuItem6Info);
    
    const menuItem6Price = document.createElement('p');
    menuItem6Price.classList.add('menu-item-price');
    menuItem6Price.textContent = '$14.99';
    menuItem6.appendChild(menuItem6Price);


    return menuContainer;
};

export default menuTab;