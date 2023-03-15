function createHome(){
    //create content container
    const home = document.createElement('div');
    home.classList.add('home-content');
    
    //create 'left-side' container
    const left_content = document.createElement('div');
    left_content.classList.add('left-content');

    const title_h2 = document.createElement('h2');
    title_h2.classList.add('header-h2');
    title_h2.textContent=`---CHEF'S SPECIAL`;

    const title_h1 = document.createElement('h1');
    title_h1.classList.add('header-h1');
    title_h1.textContent='Freshness in Every Bite';

    const title_p = document.createElement('p');
    title_p.classList.add('header-p');
    title_p.textContent= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet rutrum nibh, et sollicitudin.'

    const title_button = document.createElement('button');
    title_button.classList.add('book-button');
    title_button.textContent='Book a Table';

    //create hero image
    const hero_image = document.createElement('img');
    hero_image.classList.add('hero-image');
    hero_image.src='./images/hero.png';

    left_content.appendChild(title_h2)
    left_content.appendChild(title_h1)
    left_content.appendChild(title_p)
    left_content.appendChild(title_button)

    home.appendChild(left_content)
    home.appendChild(hero_image)
    return home;
}


function loadHome(){
    const main = document.querySelector('main');
    main.textContent='';
    main.appendChild(createHome());
}

export default loadHome;


