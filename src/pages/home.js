import '../style/home.css'

function createHome() {
  const body = document.getElementsByTagName('body')[0]
  const div = document.createElement('div')
  const h1 = document.createElement('h1')
  h1.innerText = 'Es Pisang Ijo'
  div.setAttribute('id', 'home')
  div.appendChild(h1)
  createDivAbout(div)
  createDivHours(div)
  body.appendChild(div)
}

function createDivAbout(home) {
  const div = document.createElement('div')
  const h2 = document.createElement('h2')
  const p = document.createElement('p')
  h2.innerText = 'About'
  p.innerText =
    'Green banana ice is a typical snack from Makassar, South Sulawesi. This dish is prepared from ripe plantain, ambon or kepok fruit. Bananas are wrapped in a mixture of rice flour mixed with coconut milk and pandan leaf water which gives the green color and aroma of pandan. Then, it is added with chewy boiled wheat flour or marrow porridge, drizzled with red syrup typical of Makassar, and melted condensed milk.'

  div.appendChild(h2)
  div.appendChild(p)
  home.appendChild(div)
}

const hoursContent = [
  {
    day: 'Sunday',
    time: '8am - 6pm',
  },
  {
    day: 'Monday',
    time: '10am - 4pm',
  },
  {
    day: 'Tuesday',
    time: '10am - 4pm',
  },
  {
    day: 'Wednesday',
    time: '10am - 4pm',
  },
  {
    day: 'Thursday',
    time: '10am - 4pm',
  },
  {
    day: 'Friday',
    time: '13am - 8pm',
  },
  {
    day: 'Saturday',
    time: '8am - 6pm',
  },
]

function createDivHours(home) {
  const div = document.createElement('div')
  const h2 = document.createElement('h2')
  const table = document.createElement('table')
  const tbody = document.createElement('tbody')
  h2.innerText = 'Hours'
  hoursContent.forEach((item) => {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    td1.innerText = `${item.day}`
    td2.innerText = `:`
    td3.innerText = `${item.time}`
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tbody.appendChild(tr)
  })
  table.appendChild(tbody)
  div.appendChild(h2)
  div.appendChild(table)
  home.appendChild(div)
}

export default createHome
