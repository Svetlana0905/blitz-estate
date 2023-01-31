import { html, body, popUp, openPopUp, closePopUp } from './../helpers/elementsNodeList'

// logger (Full Logging System) 
function FLS(message) {
  setTimeout(() => (window.FLS ? console.log(message) : null), 0)
}

// Проверка браузера на поддержку .webp изображений 
function isWebp() {
  // Проверка поддержки webp
  const testWebp = (callback) => {
    const webP = new Image()

    webP.onload = webP.onerror = () => callback(webP.height === 2)
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp((support) => {
    const className = support ? 'webp' : 'no-webp'
    html.classList.add(className)

    FLS(support ? 'webp поддерживается' : 'webp не поддерживается')
  })
}

// Popup
let disableScroll = function () {
  let paddingOffset = window.innerWidth - body.offsetWidth + 'px';
  body.style.paddingRight = paddingOffset;
  let pagePosition = window.scrollY;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
}

let enableScroll = function () {
  let pagePosition = parseInt(body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  window.scroll({ top: pagePosition, left: 0 });
  body.removeAttribute('data-position');
  body.style.paddingRight = '0px';
}

function openPopUpActions() {
  openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    disableScroll();
    popUp.classList.add('active')
  })
}
popUp.addEventListener('click', (e) => {
  if (e.target == popUp) {
    popUp.classList.remove('active');
  }
});

function closePopUpActions() {
  closePopUp.addEventListener('click', function (e) {
    e.preventDefault();
    enableScroll();
    popUp.classList.remove('active')
  })
}

export {
  FLS,
  isWebp,
  openPopUpActions,
  closePopUpActions
}
