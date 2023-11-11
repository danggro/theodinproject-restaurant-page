import Oreo from '../assets/images/topping-oreo.jpeg'
import Cheese from '../assets/images/topping-cheese.jpg'
import NataDeCoco from '../assets/images/topping-natadecoco.jpg'
import Durian from '../assets/images/topping-durian.webp'
import Coconut from '../assets/images/topping-coconut.jpg'
import SyrupMelon from '../assets/images/syrup-melon.jpg'
import '../style/menu.css'
function createMenu() {
  const body = document.getElementsByTagName('body')[0]
  const div = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.innerText = 'Menu'
  div.setAttribute('id', 'menu')
  div.appendChild(h1)
  createContent(div)
  body.appendChild(div)
}

const menuContent = [
  {
    image: Oreo,
    menuName: 'Topping Oreo',
    price: 'Rp. 8K',
  },
  {
    image: Cheese,
    menuName: 'Topping Cheese',
    price: 'Rp. 8K',
  },
  {
    image: NataDeCoco,
    menuName: 'Topping Nata De Coco',
    price: 'Rp. 10K',
  },
  {
    image: Durian,
    menuName: 'Topping Durian',
    price: 'Rp. 12K',
  },
  {
    image: Coconut,
    menuName: 'Topping Coconut',
    price: 'Rp. 10K',
  },
  {
    image: SyrupMelon,
    menuName: 'Syrup Melon',
    price: 'Rp. 8K',
  },
]

function createContent(menu) {
  const divContainer = document.createElement('div')
  menuContent.forEach((item) => {
    const divCard = document.createElement('div')
    const div = document.createElement('div')
    divCard.classList.add('card-menu')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const span = document.createElement('span')
    img.setAttribute('src', `${item.image}`)
    img.setAttribute('alt', `${item.menuName}`)
    h3.innerText = `${item.menuName}`
    span.innerText = `${item.price}`
    divCard.appendChild(img)
    div.appendChild(h3)
    div.appendChild(span)
    divCard.appendChild(div)
    divContainer.appendChild(divCard)
  })
  menu.appendChild(divContainer)
}

export default createMenu
