/*
tabs home, menu, contact


*/

import skeleton from  './initial.js';
import _ from 'lodash';
import './style.css'
import menu from './pages/menu.js'
import contact from './pages/contact.js'
import home from './pages/home.js'


//render style attributes

const render = function() {
    const container = document.querySelector('#container') 
    // content.style='';
    while (container.children.length > 0) {
        container.children[0].remove();
    }
}

skeleton();

const buttons = document.getElementsByClassName('tabs');
console.log(Array.from(buttons));

Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'Button2') {
      render();
      menu();
    } else if (button.id === 'Button3') {
      render();
      contact();
    } 
    else if (button.id === 'Button1') {
      render();
      home();
    
}
  });
});
