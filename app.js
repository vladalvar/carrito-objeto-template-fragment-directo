const carrito = document.querySelector('#carrito');
const template = document.querySelector('#template');
const footer = document.querySelector('#footer');
const templateFooter = document.querySelector('#templateFooter');
const fragment = document.createDocumentFragment();

document.addEventListener('click', e => {
    // console.log(e.target.matches(".card .btn-outline-primary"));
    if(e.target.matches(".card .btn-outline-primary")){
        agregarAlCarrito(e)
    }

    //console.log(e.target.matches(".list-group-item .btn-success"))
    if(e.target.matches(".list-group-item .btn-success")){
        btnAumentar(e);
    }

    if(e.target.matches(".list-group-item .btn-danger")){
        btnReducir(e);
    }
})


let carritoObjeto = [];

const agregarAlCarrito = (e) => {
    //console.log(e.target.dataset.comida);

    const producto = {
        titulo: e.target.dataset.comida,
        id: e.target.dataset.comida,
        cantidad: 1, 
        precio: parseInt(e.target.dataset.precio),
    }

    const indice = carritoObjeto.findIndex((item) => item.id === producto.id);
    if(indice === -1){
        carritoObjeto.push(producto);
    }else{
        carritoObjeto[indice].cantidad ++;
        //carritoObjeto[indice].precio = carritoObjeto[indice].cantidad * producto.precio;
    }
    pintarCarrito();
};

const pintarCarrito = () => {
    carrito.textContent = "";
    carritoObjeto.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.text-white .lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad;
        clone.querySelector('.btn-danger').dataset.id = item.id;
        clone.querySelector('.btn-success').dataset.id = item.id;
        fragment.appendChild(clone);

    });
    carrito.appendChild(fragment);
    pintarFooter();
};

const pintarFooter = () => {
    console.log("Pintar footer");
    footer.textContent = "";

    const total = carritoObjeto.reduce(
        (acc, current) => acc + current.cantidad * current.precio,
        0
    );
    //console.log(total)

    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector('span').textContent = total;
    if(total === 0){
        foter.removeChild(clone);
    } else{
        footer.appendChild(clone)
    }   
}

const btnAumentar = (e) => {
    //console.log("Me diste click", e.target.dataset.id);
    carritoObjeto = carritoObjeto.map(item => {
        if(item.id === e.target.dataset.id){
            item.cantidad ++;
        }
        return item;
    })
    pintarCarrito();
};

const btnReducir = (e) => {
    carritoObjeto = carritoObjeto.filter(item => {
        if(item.id === e.target.dataset.id){
            if(item.cantidad > 0){
                item.cantidad --;
                if(item.cantidad === 0) return;
                return item;
            }            
        } else { return item; }
        
    });
    pintarCarrito();
};

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
