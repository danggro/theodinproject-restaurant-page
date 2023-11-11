import '../style/nav.css'

function createNavigation() {
  let content
  const navElement = ['Home', 'Menu', 'Contact']
  const body = document.getElementsByTagName('body')[0]
  const nav = document.createElement('nav')
  navElement.forEach((item) => {
    const button = document.createElement('button')
    button.appendChild(document.createTextNode(item))
    button.addEventListener('click', function () {
      changeContent(content, item)
    })
    nav.appendChild(button)
  })
  body.appendChild(nav)
}

function changeContent(content, button) {
  content = button
  const home = document.getElementById('home')
  const menu = document.getElementById('menu')
  const contact = document.getElementById('contact')
  switch (content) {
    case 'Home':
      home.style.setProperty('display', 'grid')
      menu.style.setProperty('display', 'none')
      contact.style.setProperty('display', 'none')
      break
    case 'Menu':
      home.style.setProperty('display', 'none')
      menu.style.setProperty('display', 'flex')
      contact.style.setProperty('display', 'none')
      break
    case 'Contact':
      home.style.setProperty('display', 'none')
      menu.style.setProperty('display', 'none')
      contact.style.setProperty('display', 'flex')
      break
    default:
      break
  }
}
export default createNavigation
