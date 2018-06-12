var buttonMenu = document.getElementById("button-menu")
var listMenu= document.getElementById("list-menu")

buttonMenu.addEventListener("click", function(){
    listMenu.classList.toggle("aparecer")
    
    
})



/*Slider*/
var imagenes=[]

imagenes[0]="galeria1.jpg"
imagenes[1]="galeria2.jpeg"
imagenes[2]="galeria3.jpeg"
imagenes[3]="galeria4.jpeg"
imagenes[4]="galeria5.jpeg"

var index = 1

var imagenSlider=document.getElementById("img-slider")



console.log(imagenes)
var next = function(){
    index++
    console.log("Pulsado el next")
    if(index > imagenes.length -1 ){
        index = 0
    }
    imagenSlider.src="img/"+imagenes[index]
    imagenSlider.style.animation.toggle="1s fade linear"
}
    
var prev = function(){
    index--
    console.log("Pulsado el prev")
    if(index > imagenes.length -1 ){
        index = 0
    }else if( index == -1) {
        index= imagenes.length - 1
    }
    imagenSlider.src="img/"+imagenes[index]
    console.log(index)
}
