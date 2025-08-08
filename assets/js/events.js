const btnMode = document.querySelector('.button--dark-light');
const slides = document.querySelectorAll('.slide');

btnMode?.addEventListener('click', () => {
    btnMode.classList.toggle('active');

})

function repeat(activeClass = "active") {
    let active = document.querySelector('.active');
    let i = 1;

  const repeator = () => {

    setTimeout(() => {
      slides.forEach(slide => {
        slide.classList.remove('active');
      })  
      slides[i].classList.add(activeClass);
      i++;

      if (i == slides.length) {
        i = 0;
      }

      repeator(); 
    }, 3000);
  };

  repeator();
}

if(slides.length > 0)
  repeat();

function openTab(id, button) {
  const tabNav = document.querySelectorAll(".tab-nav button");
  const tabContents = document.querySelectorAll(".tabs-contents .tab-content");

  tabNav.forEach(nav => nav.classList.remove("active"));
  tabContents.forEach(cont => cont.classList.remove("active"));

  const tabActive = document.querySelector(`.tabs-contents #${id}`);

  tabActive.classList.add("active");
  button.classList.add("active");
}


const caretDropdown = document.querySelector(".caret");
const menuDropdown = document.querySelector(".dropdown .menu");
const selectDropdow = document.querySelector(".dropdown .select");
const optionsDropdown = document.querySelectorAll(".dropdown .menu li");

selectDropdow.addEventListener("click", () => {
    caretDropdown.classList.toggle("rotate");
    menuDropdown.classList.toggle("active");
});
