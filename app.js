const carrito = document.querySelector('#carrito');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();
const Botones = document.querySelectorAll('.card .btn');

const carritoObjeto = [];

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.comida);

    const producto = {
        titulo: e.target.dataset.comida,
        id: e.target.dataset.comida,
        cantidad: 1
    }

    const indice = carritoObjeto.findIndex((item) => item.id === producto.id);
    if(indice === -1){
        carritoObjeto.push(producto);
    }else{
        carritoObjeto[indice].cantidad ++;
    }
    //console.log(carritoObjeto)
    pintarCarrito(carritoObjeto);
};

const pintarCarrito = (array) => {
    carrito.textContent = "";
    array.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        fragment.appendChild(clone);

    });
    carrito.appendChild(fragment);
};

Botones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito))

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numerosPor = numeros.map((num) => num * 2);
// console.log(numerosPor);

// const users = [
//     { uid: 1, name: "John", age: 34 },
//     { uid: 2, name: "Amy", age: 20 },
//     { uid: 3, name: "camperCat", age: 10 },
// ];



// const existe = users.findIndex((item) => item.uid === 1)
// console.log(existe);

// const arr = ["Cat", "Dog", "Tiger", "Zebra"];
// //             0     [1      2]        3

// const arrayNuevo = arr.slice(1,3);
// console.log(arrayNuevo);

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];

// const arrayNuevo = array1.concat(array2);
// console.log(arrayNuevo);

// const numeros = [1, 2, 3, 4, 5];

// const sumarTodos = numeros.reduce((acc, valorActual) => acc + valorActual)
// console.log(sumarTodos);

// const arrayNumeros = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
// ];

// const soloNumeros = arrayNumeros.reduce(
//     (acc, current) => acc.concat(current)
// )

// console.log(soloNumeros);

// const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

// const arrayMeses = cadenaMeses.split(",");
// console.log(arrayMeses);

// const nuevoTexto = arrayMeses.join();
// console.log(nuevoTexto);

// const cajitas = document.querySelectorAll('.border');

// cajitas.forEach(caja => {
//     caja.addEventListener('click', (e) => {
//         e.stopPropagation();
//         console.log("Me diste click");
//     })
// })

// const formulario =  document.querySelector('form');
// formulario.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log("Mediste Click")
// })
