
var pageCounter = 1
var btn = document.getElementById("btn")
var animalInfo = document.getElementById("animal-info")
var switchColor = 0

//AJAX
//var ourRequest = new XMLHttpRequest();
//ourRequest.open('GET', '')
//ourRequest.onload = function () {
//    var ourData = JSON.parse(ourRequest.responseText) 
//}
//ourRequest.send()

btn.addEventListener("click", function () {

    var ourRequest = new XMLHttpRequest();
    if (pageCounter == 4) {
        btn.classList.add("hide-me")

    } else {
        ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
        ourRequest.onload = function () {
            if (ourRequest.status >= 200 && ourRequest.status < 400) {
                var ourData = JSON.parse(ourRequest.responseText)
                renderHTML(ourData)
            } else {
                console.log("We connected to the server but it returned an error")
            }
             
      };
        ourRequest.onerror = function () {
            console.log("Connection error")
            btn.classList.add("hide-me")
            animalInfo.innerHTML = "<h2>Hubo un error </h2>"
        }
        ourRequest.send()
    }
    pageCounter++
})

function renderHTML(data) {


    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        console.log(data[i])
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " That likes to eat "

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii]
            } else {
                htmlString += " and " + data[i].foods.likes[ii]
            }
        }

        htmlString += " and dislikes "

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii]
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii]
            }
        }

        htmlString += '.</p>'
    }

    animalInfo.insertAdjacentHTML("beforeend", htmlString)
}