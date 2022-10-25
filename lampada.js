const turnOn = document.getElementById('turnOn');
const turnOf = document.getElementById('turnOf');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1 ;

}

function lampOn(){
    if (! isLampBroken()) {
    lamp.src = './img/ligada.jpg';

}
}

function lampOf(){
    if (! isLampBroken()) {
    lamp.src = './img/desligada.jpg';
}
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';    
}

turnOn.addEventListener('click', lampOn);
turnOf.addEventListener('click', lampOf);
lamp.addEventListener('mouseover' , lampOn);
lamp.addEventListener('mouseleave', lampOf);
lamp.addEventListener('dblclick', lampBroken);