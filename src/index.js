import { load } from './initialPageLoad';
import { menuFunc } from './menu';
import{ homeFunc } from './home';
import { contactFunc } from './contact';


const elements = load();

load();

elements.homeButton.addEventListener('click', homeFunc);
elements.menuButton.addEventListener('click', menuFunc);
elements.contactButton.addEventListener('click', contactFunc);