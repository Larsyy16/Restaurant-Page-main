export default function home () {
    const container = document.getElementById('container')
    const headerContainer = document.createElement('h1')
    headerContainer.innerHTML = 'About';
    const lorem50 = document.createElement('p');
    lorem50.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    container.style.backgroundImage = "url('./images/homePic.jpg')"
    container.append(headerContainer, lorem50);
    //   menuItems = document.getElementsByClassName('menu-item');
//       Array.from().forEach(menuItem => {

// })
};