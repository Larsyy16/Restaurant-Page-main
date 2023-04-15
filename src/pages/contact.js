export default function contact () {
    const container = document.getElementById('container')
    container.style.display = 'flex';
    container.style.width = '100%';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    for (let i = 0; i < 4; i++) {
        const div = document.createElement("div");
        div.classList.add("menu-item"); // Add CSS class
        div.id = i;
        container.appendChild(div);
      }
      const phone = document.getElementById(0);
      const phoneNum =document.getElementById(1);
      const address = document.getElementById(2);
      const addressSt= document.getElementById(3);

      phone.textContent = 'Phone';
      phoneNum.textContent = '555-33-373';
      address.textContent = 'Address';
      addressSt.textContent = 'GG bro idk'
    //   menuItems = document.getElementsByClassName('menu-item');
//       Array.from().forEach(menuItem => {

// })
};