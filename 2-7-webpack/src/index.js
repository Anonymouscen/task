require('./index.scss')
const happy = require('./happy.jpg').default
const logo = require('./logo.png').default

console.log('hello webpack!')

function createImgElem (srcImg) {
  let img = document.createElement('img')
  img.src = srcImg

  return img
}

const div = document.createElement('div')
const happyImg = createImgElem(happy)
const logoImg = createImgElem(logo)

div.appendChild(happyImg)
div.appendChild(logoImg)
document.body.appendChild(div)