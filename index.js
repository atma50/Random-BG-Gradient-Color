const backgroundColor = document.getElementById('backgroundColor');
const container = document.getElementById('container');

const changeGradientBtn = document.getElementById('changeGradientBtn');
const changeColorBtn = document.getElementById('changeColorBtn');

const colorContent = document.getElementById('colorContent');

changeColorBtn.addEventListener('click', function() {

  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);

  const bgColor = "rgb("+x+","+y+","+z+")";

  backgroundColor.style.background = bgColor;

  colorContent.textContent = bgColor;

});

function randomGradientColor() {

  const color1 = getRandomHexColor();
  const color2 = getRandomHexColor();

  return `linear-gradient(to right, ${color1}, ${color2})`;

}

function getRandomHexColor() {

  let letterAndNumbers = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {

    color += letterAndNumbers[Math.floor(Math.random() * 16)];

  }

  return color;

}


changeGradientBtn.addEventListener('click', function() {

  const randomGradient = randomGradientColor();

  backgroundColor.style.background = randomGradient;

  colorContent.textContent = randomGradient;

});

