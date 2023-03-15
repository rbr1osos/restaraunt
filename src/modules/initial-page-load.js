import loadHome from './home'
import loadAbout from './about'
import loadMenu from './menu'

function createHeader(id){
    const header = document.createElement('header');
    header.setAttribute('id',id)

    //left side --logo
    const logo = document.createElement('img')
    logo.setAttribute('id','logo');
    logo.src= './images/logo.png';
    header.appendChild(logo);

    //right side --links
    const links_container = document.createElement('div');
    links_container.setAttribute('id','right-content');

    const home_button = document.createElement('button');
    home_button.classList.add('button-nav');
    home_button.textContent='Home';
    home_button.addEventListener('click',(e)=>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(home_button);
        loadHome();
    });

    const menu_button = document.createElement('button');
    menu_button.classList.add('button-nav');
    menu_button.textContent='Menu';
    menu_button.addEventListener('click',(e)=>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(menu_button);
        loadMenu();
    });

    const about_button = document.createElement('button');
    about_button.classList.add('button-nav');
    about_button.textContent='About';
    about_button.addEventListener('click',(e)=>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(about_button);
        loadAbout();
    });

    links_container.appendChild(home_button);
    links_container.appendChild(menu_button);
    links_container.appendChild(about_button);

    header.appendChild(links_container)
    
    return header;
}

//when nav button is pressed, button will be 'active'
function setActiveButton(button){
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button)=>{
        if (button !== this){
            button.classList.remove('active')
        }
    });
    button.classList.add('active');
}

function mainContent(){
    const main = document.createElement('main');
    main.classList.add('main-content');
    main.setAttribute("id","main-content")
    return main;
}

function footerContent(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.textContent=`Copyright © ${new Date().getFullYear()} rbr1osos`
    footer.appendChild(copyright)
    return footer;
}

function pageLoad(){
    const content = document.querySelector('.content');

    content.appendChild(createHeader('header'));
    content.appendChild(mainContent());
    content.appendChild(footerContent());

    setActiveButton(document.querySelector('.button-nav'));
    loadHome();
}

export default pageLoad;