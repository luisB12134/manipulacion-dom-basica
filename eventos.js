const h1      = document.querySelector('h1');
const form    = document.querySelector('#form');
const input1  = document.querySelector('#calculo1');
const input2  = document.querySelector('#calculo2');
const boton   = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result');

//Usar addEvenListener
//boton.addEventListener('click', butonOnClick);
form.addEventListener('submit', butonOnClick);

function butonOnClick(event) {
    //console.log({event});
    event.preventDefault();
    const sumaInput = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = `Resultado de la suma -> ${sumaInput}`;
}