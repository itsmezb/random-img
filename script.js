var myImages1 = new Array();
myImages1.push("./img/sleepiest-landing-min-830x8314.jpg");
myImages1.push("./img/spline-830x2330.png");


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
  document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}