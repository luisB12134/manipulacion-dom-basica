const h1 = document.querySelector('h1');
const p1 = document.querySelector('p');
const p2 = document.querySelector('.parrafito');
const p3 = document.querySelector('#pid');
const p4 = document.querySelector('input');

console.log(p4.value);
console.log({
    h1,
    p1,
    p2,
    p3,
    p4,
});

// Conviete todo a codigo HTML
h1.innerHTML = 'Patito';
//Convieter a texto
h1.innerText = 'Pepe';
//Obtener valor de atributos
console.log(h1.getAttribute('pantalla'));
//Modificar valor de atributos
h1.setAttribute('pantalla', 'Trek');

//ClassList para solo modificar atributos de tipo clase
h1.classList.add('BMC');

p4.value = 'Hola';

//Crear elemento html
const img = document.createElement('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1674904744153-0603f0df3afd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80');
p3.append(img); // Agregan el contenido respetando el contenido anterior