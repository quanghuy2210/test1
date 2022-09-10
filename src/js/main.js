const changeTop = () => {
  const header = document.querySelector('.header')
  const navbarTop = document.querySelector('.header-top');
  const headerContact = document.querySelector('.header-contact')
  const heightHeader = header.offsetHeight
  if(navbarTop){
    let scrollValue = window.scrollY;
    if(scrollValue < heightHeader){
      navbarTop.classList.remove('menu-scroll');
      headerContact.style.display = "block";
    }
    else{
      navbarTop.classList.add('menu-scroll');
      headerContact.style.display = "none";
    }
  }
  
}
window.addEventListener('scroll', changeTop);

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 2000,
  wrapAround: true,
  freeScroll: true,
});

const toTop = document.querySelector('.arrow-backtotop')
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
    }
})

