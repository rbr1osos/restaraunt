function createMenu(){
//create 'menu' container
const menu = document.createElement('div')
menu.classList.add('menu');

//create title
const title = document.createElement('h1')
title.classList.add('menu-title')
title.innerHTML='our menu'
menu.appendChild(title)

//create item list container
const item_container = document.createElement('div')
item_container.classList.add('item-container')

//create food item container
const food_container = document.createElement('div')
food_container.classList.add('food-list-container')

for (let i=0; i<8;i++){
//create item
const food1 = document.createElement('div')
food1.classList.add('food-item')

//top side
const food_listing = document.createElement('div')
food_listing.classList.add('top-listing')

//item name
const food_name = document.createElement('h2')
food_name.classList.add('food-name')
food_name.innerHTML='Food Name 1';

//item price
const food_price = document.createElement('h3')
food_price.classList.add('food-price')
food_price.innerHTML='24'

food_listing.appendChild(food_name)
food_listing.appendChild(food_price)


//item description
const food_desc = document.createElement('p')
food_desc.classList.add('food-desc')
food_desc.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue neque eget ex imperdiet pharetra. Etiam et sagittis magna. Sed euismod ex suscipit orci dapibus.'


food1.appendChild(food_listing);
food1.appendChild(food_desc);
food_container.appendChild(food1);
menu.appendChild(food_container)
}

return menu;
}

function loadMenu(){
    const main = document.querySelector('main');
    main.textContent='';
    main.appendChild(createMenu());
}

export default loadMenu;