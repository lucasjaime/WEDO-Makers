const header = document.querySelector('.container-header');

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= header.offsetTop) {
    header.classList.add('header-post-scroll');
    header.classList.remove('header');
  } else {
    header.classList.add('header');
    header.classList.remove('header-post-scroll');
  }

  if (window.pageYOffset <= 0) {
    header.classList.add('header');
    header.classList.remove('header-post-scroll');
  }
});