
var imagenJugador = document.getElementById('img-jugador')
var buttonPlay = document.getElementsByClassName('button-play')
var arrayCosas = ['piedra', 'papel', 'tijera']
var contadorGanadas = 0
var contadorPerdidas = 0
var contadorEmpatadas = 0


buttonPlay[0].addEventListener('mouseover', function () {
    imagenJugador.src = 'img/piedra.jpg'
})
buttonPlay[0].addEventListener('mouseout', function () {
    imagenJugador.src = 'img/1.jpg'
})
buttonPlay[1].addEventListener('mouseover', function () {
    imagenJugador.src = 'img/papel.jpg'
})
buttonPlay[1].addEventListener('mouseout', function () {
    imagenJugador.src = 'img/1.jpg'
})
buttonPlay[2].addEventListener('mouseover', function () {
    imagenJugador.src = 'img/tijera.jpg'
})
buttonPlay[2].addEventListener('mouseout', function () {
    imagenJugador.src = 'img/1.jpg'
})
var imgComputadora = document.getElementById('img-computadora')
function jugar(e) {
    var computadora = Math.floor(Math.random(0, 3) * 3)
    var jugadaComputadora = arrayCosas[computadora]
    imgComputadora.src='img/'+jugadaComputadora+'.jpg'
    console.log(jugadaComputadora)
    
    if (e == jugadaComputadora) {
        console.log('empate')
        contadorEmpatadas++
    } else if (e == 'tijera' && jugadaComputadora == 'piedra') {
        contadorPerdidas++
        console.log('perdistes')
    } else if (e == 'tijera' && jugadaComputadora == 'papel') {
        contadorGanadas++
        console.log('ganastes')
    } else if (e == 'papel' && jugadaComputadora == 'piedra') {
        contadorGanadas++
        console.log('ganastes')
    } else if (e == 'papel' && jugadaComputadora == 'tijera') {
        contadorPerdidas++
        console.log('perdistes')
    } else if (e == 'piedra' && jugadaComputadora == 'tijera') {
        contadorGanadas++
        console.log('Ganastes')
    } else if (e == 'piedra' && jugadaComputadora == 'papel') {
        contadorPerdidas++
        console.log('perdistes')
    }
    
    var perdidas = document.getElementById('perdidas').innerHTML = 'Perdidas : ' + contadorPerdidas
    var ganadas = document.getElementById('ganadas').innerHTML = 'Ganadas : ' + contadorGanadas
    var empates = document.getElementById('empates').innerHTML = 'Empates : ' + contadorEmpatadas

    if (contadorPerdidas == 3 ) {
        document.getElementById('modal').classList.toggle("ocultar")
        document.getElementById('resultado').innerHTML='PERDISTES'

        
    }else if(contadorGanadas==3){
        document.getElementById('modal').classList.toggle("ocultar")

        document.getElementById('resultado').innerHTML='GANASTES'
   
    }

    
    
}

function seguirJugando() {
    document.getElementById('modal').classList.toggle("ocultar")
    contadorEmpatadas = 0
    contadorGanadas = 0
    contadorPerdidas = 0
    var perdidas = document.getElementById('perdidas').innerHTML = 'Perdidas : ' + contadorPerdidas
    var ganadas = document.getElementById('ganadas').innerHTML = 'Ganadas : ' + contadorGanadas
    var empates = document.getElementById('empates').innerHTML = 'Empates : ' + contadorEmpatadas
    imgComputadora.src='img/1.jpg'
    
}
function noSeguirJugando() {
    location.href ="index.html";
}


