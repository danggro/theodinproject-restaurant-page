import '../style/contact.css'

function createContactUs() {
  const body = document.getElementsByTagName('body')[0]
  const div = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.innerText = 'Contact Us'
  div.setAttribute('id', 'contact')
  div.appendChild(h1)
  createContent(div)
  body.appendChild(div)
}

const contectContent = [
  {
    title: 'Name',
    content: 'Budi Van Basten',
  },
  {
    title: 'Phone',
    content: '+62812 - 3546 - 7890',
  },
  {
    title: 'Email',
    content: 'budivanbaste.example@gmail.com',
  },
  {
    title: 'Location',
    content: 'Regency Office Before',
  },
]

function createContent(contact) {
  const div = document.createElement('div')
  const table = document.createElement('table')
  const tbody = document.createElement('tbody')
  contectContent.forEach((item) => {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    td1.innerText = `${item.title}`
    td2.innerText = `:`
    td3.innerText = `${item.content}`
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tbody.appendChild(tr)
  })
  table.appendChild(tbody)
  div.appendChild(table)
  contact.appendChild(div)
}

export default createContactUs
