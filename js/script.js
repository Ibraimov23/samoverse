const rarity_subtitle_show = document.getElementById("rarity_subtitle_show");
const roadmap_container = document.getElementById("roadmap_container");
const nav = document.querySelector('#nav');
const menuId = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;
window.addEventListener('resize', function(event) {
   let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
   if (width < 600) {
      rarity_subtitle_show.classList.add("rarity-subtitle-show-remove");
      roadmap_container.classList.add("roadmap_container_remove");
      var item = $('#item2').html();
      $('#item2').html($('#item3').html());
      $('#item3').html(item);
    }
  });
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;
  
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menuId.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
});

nav.addEventListener('keydown', e => {
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }
  const menuLinks = menu.querySelectorAll('.nav__link');
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});
function menu(punkt) {
  menu.hidden = !isMenuOpen;
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menuId.hidden = isMenuOpen;
  nav.classList.toggle('nav--open');
  location.href = punkt;
}