const turnOn = document.getElementById('turnOn');
const turnOf = document.getElementById('turnOf');
const lamp = document.getElementById('lamp');

function lampOn(){
    lamp.src = './img/ligada.jpg'
}

function lampOf(){
    lamp.src = './img/desligada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOf.addEventListener('click', lampOf)