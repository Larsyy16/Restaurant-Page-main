export default function menu () {
    const container = document.getElementById('container')
    container.style.display = 'flex';
    container.style.width = '100%';
    container.style.flexWrap = 'wrap';
    container.style.alignItems = 'center';
    container.style.flexDirection = 'row';
    for (let i = 0; i < 6; i++) {
        const div = document.createElement("div");
        div.classList.add("menu-item"); // Add CSS class
        div.id = i;
        div.textContent= `menu-item${i}`;
        container.appendChild(div);
      }
    //   menuItems = document.getElementsByClassName('menu-item');
//       Array.from().forEach(menuItem => {

// })
};