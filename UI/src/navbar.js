/*************************** TO OPEN/CLOSE SIDE NAVIGATION **************************/
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


/*************************** TO ENABLE TAB SWITCHING **************************/
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent"); 
    document.querySelector('#defaultDiv').style.display = 'none';

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " current";
}

/*************************** MODAL TO CONFIRM ORDER **************************/
const orderButton = document.querySelector('#order-button');
const span = document.querySelector(".close");

const openModal= () =>{
  document.querySelector('.confirm-order').style.display = 'block';
};
orderButton.addEventListener('click', openModal);

const closeModal = () =>{  
  document.querySelector('.confirm-order').style.display = 'none';
};
span.addEventListener('click', closeModal);


const confirmed = document.getElementById('confirm-button');
const thanks = () =>{
  confirm('PROCEED WITH ORDER ?');
  document.querySelector('.confirm-order').style.display = 'none';
}
confirmed.addEventListener('click', thanks);