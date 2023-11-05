// ============================
//       Navbar section
// ============================
const topNav = document.getElementsByClassName("nav-link");
const openButton = document.getElementsByClassName("openIcon");
const closeButton = document.getElementsByClassName("closeIcon");


for (let i = 0; i < topNav.length; i++) {

    closeButton[i].style.display = "none";
    
    topNav[i].addEventListener("click", () => {
       const result = topNav[i].classList.toggle("active");

       if(result) {
          closeButton[i].style.display = "block";
          openButton[i].style.display = "none";
       }
       else{
          closeButton[i].style.display = "none";
          openButton[i].style.display = "block";
       }
    })
}


// ============================
//       Accordion section
// ============================

const ourItemDiv = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");


for (let i = 0; i < ourItemDiv.length; i++) {

    closeIcon[i].style.display = "none";
    
    ourItemDiv[i].addEventListener("click", () => {
       const result = ourItemDiv[i].classList.toggle("active");

       if(result) {
          closeIcon[i].style.display = "block";
          openIcon[i].style.display = "none";
       }
       else{
          closeIcon[i].style.display = "none";
          openIcon[i].style.display = "block";
       }
    })
}


// accordion click effect

