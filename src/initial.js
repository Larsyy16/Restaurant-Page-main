/* 







*/

export default function skeleton () {

    //header
    const content = document.getElementById('content')
    const header1 = document.createElement('div');
    header1.id = 'header1';
    const header2 = document.createElement('div');
    header2.id = 'header2';
    const businessName = document.createElement('p');
    businessName.textContent = 'Not Chipotle';
    const home = document.createElement('button');
    home.classList.add('tabs')
    home.id = 'Button1';

    home.textContent = 'Home';
    const menu = document.createElement('button');
    menu.classList.add('tabs');
    menu.id='Button2'
    menu.textContent = 'Menu'
    const contact = document.createElement('button');
    contact.classList.add('tabs');
    contact.id = `Button3`;
    contact.textContent = 'Contact Us';

    header1.append(businessName);
    header2.append(home,menu,contact)
    content.append(header1,header2);


    //container

    const container = document.createElement('div');
    container.id = 'container';
    const headerContainer = document.createElement('h1')
    headerContainer.innerHTML = 'About';
    const lorem50 = document.createElement('p');
    lorem50.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    container.style.backgroundImage = "url('./images/homePic.jpg')"

    container.append(headerContainer, lorem50);
    content.append(container);


    //footer
    const footer = document.createElement('footer');
    footer.id = 'footer';
    const footerContent = document.createElement('p');
    footerContent.textContent = 'This is Not Chipotle. If you want Chipotle please order me one as well. Bowl, tortilla on the side, brown rice, fajita, blk beans, chikn, hot sauce, sourcrm, chse, letuce. thks'
    footer.appendChild(footerContent);
    content.appendChild(footer);
}