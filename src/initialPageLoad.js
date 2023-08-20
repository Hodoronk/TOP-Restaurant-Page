
const content = document.querySelector('#content');
const homeButton = document.createElement('button');
const menuButton = document.createElement('button');
const contactButton = document.createElement('button');

const presentation = document.createElement('div');
const presentationPara = document.createElement('p');
presentationPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis iaculis lacus. Sed diam ante, mattis nec mi eget, fringilla volutpat tortor. In hac habitasse platea dictumst. Cras molestie lacus risus, vel hendrerit nulla sagittis sit amet. Mauris eu erat dui. Integer vehicula quam ut sapien faucibus, id dignissim nisi tristique. Nullam risus felis, ullamcorper in sem sed, placerat maximus diam. In mauris tellus, convallis ut felis luctus, auctor euismod libero. Maecenas imperdiet felis purus. Morbi a lectus fermentum, egestas massa malesuada, auctor nunc. Pellentesque non libero at sapien pretium luctus. Pellentesque vitae urna maximus, pellentesque massa id, accumsan tortor. Vivamus in accumsan nunc, nec feugiat ipsum.';
presentation.appendChild(presentationPara);

const hours = document.createElement('div');
const hoursPara = document.createElement('p');
hoursPara.textContent = 'Mondays to Fridays 9am - 9pm';
hours.appendChild(hoursPara);

const location = document.createElement('div');
const locationPara = document.createElement('p');
locationPara.textContent = 'Barbateni street number 14';
location.appendChild(locationPara);


homeButton.textContent = 'Home';
menuButton.textContent = 'Menu';
contactButton.textContent = 'Contact';

const restaurantTitle = document.createElement('h1');
restaurantTitle.textContent = 'Flubben Flieben Foode';



const load = () => {
content.appendChild(restaurantTitle);
content.appendChild(homeButton);
content.appendChild(menuButton);
content.appendChild(contactButton);
content.appendChild(presentation);
content.appendChild(hours);
content.appendChild(location);


return{
    hoursPara,
    presentationPara,
    locationPara,
    homeButton,
    menuButton,
    contactButton,
    presentation,
    hours,
    location,
}

}
export{
    load,
}