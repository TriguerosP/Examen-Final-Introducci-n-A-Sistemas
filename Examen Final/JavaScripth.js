function addToDisplay(value){
    document.getElementById('display').value += value;
}

function calculate(){
    var expresion = document.getElementById('display').value;
    // La funcion eval toma la cadena expression y la ejecuta como si fuera javascript
    var result = eval(expresion);
    document.getElementById('display').value = result;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}