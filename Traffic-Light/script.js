function switchOffLight(lightColor) {
    const light = document.getElementById(lightColor);
    const lightElement = document.getElementById(`${lightColor}-light`);
    if (light.classList.contains(`toggle-${lightColor}`)) {
      light.classList.remove(`toggle-${lightColor}`);
    }
    if (lightElement.classList.contains(`toggle-${lightColor}`)) {
      lightElement.classList.remove(`toggle-${lightColor}`);
    }
}
function switchOnLight(lightColor){
    const yellow = document.getElementById(lightColor);
    const yellowLight = document.getElementById(`${lightColor}-light`)
      /*[red,redLight].map((ele) => ele.classList.toggle("toggle-red"));*/
    yellow.classList.toggle(`toggle-${lightColor}`)
    yellowLight.classList.toggle(`toggle-${lightColor}`)
}
function switchOnAllLights(){
    switchOnLight("red");
    switchOnLight("yellow");
    switchOnLight("green");
}
function switchOnAlternateLights(){
    switchOffLight("red");
    switchOffLight("yellow");
    switchOffLight("green");
    const interValId1 = setInterval(() => switchOnLight("red"),300)
    setTimeout(() => clearInterval(interValId1),600);
    const interValId2 = setInterval(() => switchOffLight("red"),900)
    setTimeout(() => clearInterval(interValId2),1200);
    const interValId3 = setInterval(() => switchOnLight("yellow"),1500)
    setTimeout(() => clearInterval(interValId3),1800);
    const interValId4 = setInterval(() => switchOffLight("yellow"),2100)
    setTimeout(() => clearInterval(interValId4),2400);
    const interValId5 = setInterval(() => switchOnLight("green"),2700)
    setTimeout(() => clearInterval(interValId5),3000);
    const interValId6 = setInterval(() => switchOffLight("green"),3300)
    setTimeout(() => clearInterval(interValId6),3600);
}
function handleClickRed(){
    switchOffLight("yellow");
    switchOffLight("green");
    switchOnLight("red");
}
function handleClickYellow(){
    switchOffLight("red");
    switchOffLight("green");
    switchOnLight("yellow");
}

function handleClickGreen(){
    switchOffLight("red");
    switchOffLight("yellow");
    switchOnLight("green");
}

function handleClickAll(){
    switchOffLight("red");
    switchOffLight("yellow");
    switchOffLight("green");
    switchOnAllLights();
}
function handleClickAlt(){
  switchOnAlternateLights();
}
   









