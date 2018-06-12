var valores = document.getElementById("calculo1")
var valores2 = document.getElementById('calculo2')
  //función teclado disponible
var x = "0"
xi = 1
coma = 0
ni = 0
op= "no"


var numero = function (xx) {
    if (x == "0" || xi == 1) {
        valores.innerHTML = xx
        x = xx
        if (xx == ".") {
            valores.innerHTML = "0."
            x = xx
            coma = 1
        }
    } else {
        if (xx == "." && coma == 0) {
            valores.innerHTML += xx
            x += xx
            coma = 1
        } else if (xx == "." && coma == 1) { }
        else {
            valores.innerHTML += xx
            x += xx
        }
    }
    xi = 0
}




var igualar = function(){
    if(op=="no"){
        valores.innerHTML=x
    }else{
        sl=ni+op+x; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            valores2.innerHTML=sol //mostramos la solución
            valores.innerHTML=0
            x=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
            }
    }

var operar=function(s){
   
    igualar()
    ni=x
    op=s
    xi=1
    valores.innerHTML+=op
}

var borroTotal = function () {
    x = "0"
    xi = 1
    coma = 0
    valores.innerHTML = x
    
} 
var borrado = function(){
    valores.innerHTML=0
    x=0
    coma=0
    valores2.innerHTML=0
    
}
function borradoParcial(){ //Borrar sólo el último número escrito.
    cifras=x.length; //hayar número de caracteres en pantalla
    br=x.substr(cifras-1,cifras) //info del último caracter
    x=x.substr(0,cifras-1) //quitar el ultimo caracter
    if (x=="") {x="0";} //si ya no quedan caracteres, pondremos el 0
    if (br==".") {coma=0;} //Si hemos quitado la coma, se permite escribirla de nuevo.
    valores.innerHTML=x; //mostrar resultado en pantalla	 
    }