//const turnOn = document.getElementById('turnOn');

const turnOnOff = document.getElementById('turnOnOff');

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
    turnOnOff.textContent = 'Ligar';
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';  

}

function lampOfOn(){
    if(turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar'
    }else{
        lampOf();
        turnOnOff.textContent = 'Ligar'
    }

}

turnOnOff.addEventListener('click', lampOfOn);


lamp.addEventListener('mouseover' , lampOn);
lamp.addEventListener('mouseleave', lampOf);
lamp.addEventListener('dblclick', lampBroken);