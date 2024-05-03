import './BtnUp.scss';

const page = document.querySelector('#root');
const elemBtnUp = document.createElement('div');
elemBtnUp.classList.add('btn-up', 'none');
elemBtnUp.innerHTML = 'НАВЕРХ';
elemBtnUp.addEventListener('click', scrollUp);
page.appendChild(elemBtnUp);

function scrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

window.addEventListener('scroll', scrollDown);

function scrollDown() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
  if (scrollY > 400) {
    elemBtnUp.classList.remove('none');
  } else {
    elemBtnUp.classList.add('none');
  }
}