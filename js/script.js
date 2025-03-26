// Recupero degli elementi del DOM e/o dichiarazione delle variabili
const lampadina = document.getElementById("lampadina");
const bottone = document.getElementById("bottone");

// Corpo del programmma
bottone.addEventListener("click", function(){
    if (lampadina.src.includes("white_lamp.png")){
        lampadina.src = "img/yellow_lamp.png";
        bottone.textContent = "Spegni";
    }
    else{
        lampadina.src = "img/white_lamp.png";
        bottone.textContent = "Accendi";
    }
})
