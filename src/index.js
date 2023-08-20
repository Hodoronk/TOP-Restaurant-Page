import { load } from './initialPageLoad';
import{ homeFunc } from './home';
import { menuFunc } from './menu';
import { contactFunc } from './contact';
import { removerFunc } from './remover';


const elements = load();


elements.homeButton.addEventListener('click', load);
elements.menuButton.addEventListener('click', menuFunc);
elements.contactButton.addEventListener('click', contactFunc);