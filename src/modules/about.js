function createAbout(){
//create 'about' container
const about = document.createElement('div');
about.classList.add('about')

//create 'left side' container
const left_about = document.createElement('img');
left_about.classList.add('chef-image');
left_about.src='../dist/images/chef.png';

//create 'right side' container
const right_about = document.createElement('div');
right_about.classList.add('about-right-content');

const about_title = document.createElement('h1')
about_title.classList.add('about-title');
about_title.innerHTML='CHEFFIN NAME HERE';


const about_paragraph_container = document.createElement('div')
about_paragraph_container.classList.add('paragraph')

const paragraph_top = document.createElement('p');
paragraph_top.classList.add('about-p');
paragraph_top.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur sapien in nisi aliquam molestie. Maecenas tempus vestibulum ultrices. Morbi nec maximus risus. Cras non nisl ante. Nulla facilisi. Integer tristique nunc non dolor scelerisque maximus. Fusce tincidunt eros massa, eu ullamcorper leo posuere lacinia. Fusce ut sem venenatis ligula consectetur ultricies in id ligula.'

const paragraph_bottom = document.createElement('p');
paragraph_bottom.classList.add('about-p');
paragraph_bottom.innerHTML='Sed quis est est. Nam non tortor dapibus, convallis enim ac, pulvinar nunc. Sed maximus sagittis tincidunt. Vestibulum sed mauris at lectus rutrum blandit. Maecenas at tellus ut ipsum pellentesque pretium ut feugiat diam. Vestibulum lobortis mauris et dui dictum sodales. Vestibulum id sodales tortor. Donec ut est vitae magna consequat molestie a a dolor.'


about_paragraph_container.appendChild(paragraph_top)
about_paragraph_container.appendChild(paragraph_bottom)

right_about.appendChild(about_title)
right_about.appendChild(about_paragraph_container)

about.appendChild(left_about)

about.appendChild(right_about)


return about;
}


function loadAbout(){
    const main = document.querySelector('main');
    main.textContent='';
    main.appendChild(createAbout());
}

export default loadAbout;