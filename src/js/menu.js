import galery from '../templates/galery-items.hbs';
import menu from '../menu.json';

const galeryRef = document.querySelector('.js-menu');
const markup = galery(menu);
// console.log(menu);

galeryRef.insertAdjacentHTML('afterbegin', markup);
