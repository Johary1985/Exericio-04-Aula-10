
//Imprimir datos con un click//

function dados(){
    let nombre = document.getElementById("name").value;
    let clase = document.getElementById("tur").value;
    let modulos = document.getElementById("mod").value; 

let tabla = document.getElementById("resultado");
let newRow = tabla.insertRow(1);
let cell1 = newRow.insertCell(0);
let cell2 = newRow.insertCell(1);
let cell3 = newRow.insertCell(2);

cell1.innerHTML = nombre; 
cell2.innerHTML = clase;
cell3.innerHTML = modulos;

}

//Comparar datos con otro click//

function comparar() {

    let nombres = document.querySelectorAll('th').value;
    let clases = document.querySelectorAll('th').value;
    let modulos = document.querySelectorAll('th').value;
    


}




