import { html, body, popUp, openPopUp, closePopUp, form, cards } from './../helpers/elementsNodeList'
import { data } from './../dataCard'

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

function filterPriceForm() {
  form.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click')
  })
}

function createElements() {
  const article = document.createElement('article')
  const img = document.createElement('img')
  const content = document.createElement('div')
  const h3 = document.createElement('h3')
  const span = document.createElement('span')
  const row = document.createElement('div')
  const column = document.createElement('div')
  const rightColumn = document.createElement('div')
  const p = document.createElement('p')
  const bigText = document.createElement('p')
  const meter = document.createElement('p')
  const button = document.createElement('button')
  const columnSquare = document.createElement('p')

  return { article, img, content, h3, span, row, column, p, button, bigText, columnSquare, meter, rightColumn }
}

const setAttribute = ({ article, content, row, column, button, bigText, columnSquare, rightColumn }) => {
  article.setAttribute('class', 'apartment-card')
  article.setAttribute('data-aos', 'scroll-bottom')
  content.setAttribute('class', 'apartment-card__content')
  row.setAttribute('class', 'apartment-card__row')
  column.setAttribute('class', 'apartment-card__column')
  rightColumn.setAttribute('class', 'apartment-card__column')
  bigText.setAttribute('class', 'big-price-text')
  columnSquare.setAttribute('class', 'apartment-card__column-square')
  button.setAttribute('class', 'appartment-button')
}

const init = () => {

  data.map(item => {
    const { article, img, content, h3, span, row, column, p, button, bigText, columnSquare, meter, rightColumn } = createElements()
    setAttribute({ article, img, content, h3, span, row, column, p, button, bigText, columnSquare, rightColumn })
    cards.appendChild(article)
    article.appendChild(img)
    img.src = `${item.src}`
    article.appendChild(content)
    content.appendChild(h3)
    h3.textContent = `${item.title}`
    content.appendChild(span)
    span.textContent = `${item.span}`
    content.appendChild(row)
    row.appendChild(column)
    column.appendChild(bigText)
    bigText.textContent = `${item.price}`
    column.appendChild(meter)
    meter.textContent = `${item.meter}`
    row.appendChild(rightColumn)
    rightColumn.appendChild(columnSquare)
    columnSquare.textContent = `${item.square}`
    rightColumn.appendChild(p)
    p.textContent = `${item.floor}`
    article.appendChild(button)
    button.textContent = 'Назначить просмотр'
  })
}

export {
  FLS,
  isWebp,
  openPopUpActions,
  closePopUpActions,
  filterPriceForm,
  init
}
