// TO MAKE NAVIGATION BAR RESPONSIVE
const open = document.querySelector('.openMenu');
const openSlideMenu = () => {
    document.getElementById('side-menu').style.width = '200px';
  }
open.addEventListener('click',openSlideMenu);

const close = document.querySelector('.closeMenu');
const closeSlideMenu = () =>{
    document.getElementById('side-menu').style.width = '0';
  }
close.addEventListener('click',closeSlideMenu);



// //DROP DOWN MENU
// let menu = document.querySelector('.dropbutton');
// let drop = () =>{
    
//     document.getElementById('drop-content').classList.toggle('show');
// }
// menu.addEventListener('click', drop);


// //CLOSE IF USER CLICKS OUTSIDE OF IT
// window.onclick =(close) => {
//     if(!close.target.matches('.dropbutton')){
//         let  dropdown = document.getElementById('drop-content');
//     if(dropdown.classList.contains('show')) {
//         dropdown.classList.remove('show');
//     }
//   }
// }


// //DROP DOWN MENU FOR POPOUT SIDE BAR
// let menuS = document.querySelector('.dropbutton-s');
// let dropS = () =>{

//     document.getElementById('drop-content-s').classList.toggle('show');
// }
// menuS.addEventListener('click', dropS);


// //CLOSE IF USER CLICKS OUTSIDE OF IT FOR POPOUT SIDE BAR
// let j = window.onclick;
//  j = (close) => {
//     if(!close.target.matches('.dropbutton-s')){
//         let  dropdowns = document.getElementById('drop-content-s');
//     if(dropdowns.classList.contains('show')) {
//         dropdowns.classList.remove('show');
//     }
//   }
// }

/*
//orders
const orders = document.querySelector('#co');
const change = () =>{
    document.getElementById('overview').style.display = 'none';
    document.getElementById('orders').style.display = 'block';
}    
orders.addEventListener('click', change );

//sales
const orders = document.querySelector('#co');
const change = () =>{
    document.getElementById('overview').style.display = 'none';
    document.getElementById('orders').style.display = 'block';
}    
orders.addEventListener('click', change );

//add menu item
const orders = document.querySelector('#co');
const change = () =>{
    document.getElementById('overview').style.display = 'none';
    document.getElementById('orders').style.display = 'block';
}    
orders.addEventListener('click', change );

//update menu items
const orders = document.querySelector('#co');
const change = () =>{
    document.getElementById('overview').style.display = 'none';
    document.getElementById('orders').style.display = 'block';
}    
orders.addEventListener('click', change );

//delete menu item
const orders = document.querySelector('#co');
const change = () =>{
    document.getElementById('overview').style.display = 'none';
    document.getElementById('orders').style.display = 'block';
}    
orders.addEventListener('click', change );*/