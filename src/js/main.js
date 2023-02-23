const burger = document.querySelector('.burger');

const burgerText = document.querySelector('.burger-text');

const headerMenu = document.querySelector('.header-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger') 
  burger.classList.toggle('closed')
  if (burgerText.innerHTML == 'Открыть меню') {
    burgerText.innerHTML = 'Закрыть меню'
  } else {
    burgerText.innerHTML = 'Открыть меню'
  }
  headerMenu.classList.toggle('header-menu--active')
})