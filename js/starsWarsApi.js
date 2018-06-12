
var insertInfo = document.getElementById('insertInfo')
var planetasBtn = document.getElementById('planetas').addEventListener('click', loadDocs)
var planetaBtn = document.getElementById('planeta').addEventListener('click', loadDoc)
function buscar(){
   var PromptSearch = prompt('Buscador en procesos funciona solo con 10 nombres')
   
   
   document.getElementById('img-loading').classList.toggle('disabled')
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
           var data = JSON.parse(this.responseText)
           for(var i in data.results){
               if (data.results[i].name==PromptSearch){
                   console.log(data.results[i],PromptSearch)
                   var injeccion = `
                   <div  class="col s12 card-panel transparent overflow-wrap ">
                   <p class="black-text"><b>Clima : </b>${data.results[i].climate}</p>
                   <p class="black-text"><b>Diametro : </b>${data.results[i].diameter}</p>
                   <p class="black-text"><b>Gravedad : </b>${data.results[i].gravity}</p>
                   <p class="black-text"><b>Nombre del planeta : </b> ${data.results[i].name}</p>
                   <p class="black-text"><b>Periodo de orbita : </b>${data.results[i].orbital_period}</p>
                   <p class="black-text"><b>Poblacion : </b> ${data.results[i].population}</p>
                   <p class="black-text overflow-wrap"><b>Especies : </b>${data.results[i].residents}</p>
                   <p class="black-text"><b>Periodo de rotacion : </b>${data.results[i].rotation_period}</p>
                   <p class="black-text"><b>Superficie del agua : </b>${data.results[i].surface_water}</p>
                   <p class="black-text"><b>Terreno : </b>${data.results[i].terrain}</p>
                   <p class="black-text"><b>Url del sitio oficial : </b><a href="${data.results[i].url}">Aqui!</a></p> 
                   </div>
                   `
                    insertInfo.innerHTML=injeccion
               }
           }
           console.log(data)

           




           document.getElementById('img-loading').classList.toggle('disabled')

       } else if (this.readyState == 404) {
       }
   };
   xhttp.open("GET", `https://swapi.co/api/planets/`);
   xhttp.send();

}




















function loadDoc() {
    var numeroRandom = Math.ceil(Math.random() * 40)
    console.log(numeroRandom)
    document.getElementById('img-loading').classList.toggle('disabled')
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
            console.log(data)
            renderPlanetaHTML(data)
            document.getElementById('img-loading').classList.toggle('disabled')

        } else if (this.readyState == 404) {
        }
    };
    xhttp.open("GET", `https://swapi.co/api/planets/${numeroRandom}`);
    xhttp.send();

}

function loadDocs() {
    document.getElementById('img-loading').classList.toggle('disabled')
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
            document.getElementById('img-loading').classList.toggle('disabled')
            renderPlanetasHTML(data)
        } else if (this.readyState == 404) {
        }
    };
    xhttp.open("GET", `https://swapi.co/api/planets`);
    xhttp.send();

}


























function renderPlanetaHTML(data) {
    var output = `
<div  class="col s12 card-panel transparent overflow-wrap ">
<p class="black-text"><b>Clima : </b>${data.climate}</p>
<p class="black-text"><b>Diametro : </b>${data.diameter}</p>
<p class="black-text"><b>Gravedad : </b>${data.gravity}</p>
<p class="black-text"><b>Nombre del planeta : </b> ${data.name}</p>
<p class="black-text"><b>Periodo de orbita : </b>${data.orbital_period}</p>
<p class="black-text"><b>Poblacion : </b> ${data.population}</p>
<p class="black-text overflow-wrap"><b>Especies : </b>${data.residents}</p>
<p class="black-text"><b>Periodo de rotacion : </b>${data.rotation_period}</p>
<p class="black-text"><b>Superficie del agua : </b>${data.surface_water}</p>
<p class="black-text"><b>Terreno : </b>${data.terrain}</p>
<p class="black-text"><b>Url del sitio oficial : </b><a href="${data.url}">Aqui!</a></p> 
</div>
`
    insertInfo.innerHTML = output
}






















function renderPlanetasHTML(data) {
    for (var i in data.results) {
        var output = `

<div  class="col s6 card-panel transparent overflow-wrap ">
<p class="black-text"><b>Clima : </b>${data.results[i].climate}</p>
<p class="black-text"><b>Diametro : </b>${data.results[i].diameter}</p>
<p class="black-text"><b>Gravedad : </b>${data.results[i].gravity}</p>
<p class="black-text"><b>Nombre del planeta : </b> ${data.results[i].name}</p>
<p class="black-text"><b>Periodo de orbita : </b>${data.results[i].orbital_period}</p>
<p class="black-text"><b>Poblacion : </b> ${data.results[i].population}</p>
<p class="black-text overflow-wrap"><b>Especies : </b>${data.results[i].residents}</p>
<p class="black-text"><b>Periodo de rotacion : </b>${data.results[i].rotation_period}</p>
<p class="black-text"><b>Superficie del agua : </b>${data.results[i].surface_water}</p>
<p class="black-text"><b>Terreno : </b>${data.results[i].terrain}</p>
<p class="black-text"><b>Url del sitio oficial : </b><a href="${data.results[i].url}">Aqui!</a></p> 
</div>
`
        insertInfo.innerHTML += output
    }

}

