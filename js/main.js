

let imgSlider = document.getElementById("img-slider")
//let imagenes = ['img/slider1.jpg','img/slider2.jpg','img/slider3.jpg']
let contador = 1

function ImgSlider(){
    imgSlider.src=`img/slider${contador}.jpg`
   
    contador++
    if(contador==4){
        contador=1
    }
}

setInterval(ImgSlider,2000)

