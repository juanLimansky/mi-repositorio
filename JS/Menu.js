

// DESAFIO CLASE 8

// MIS VARIABLES GLOBALES

let divEntradas1 = document.querySelector('#entradas1')
let divEntradas2 = document.querySelector('#entradas2')
let divPlatosPrincipales1 = document.querySelector('#platosPrincipales1')
let divPlatosPrincipales2 = document.querySelector('#platosPrincipales2')
let divPostres1 = document.querySelector('#postres1')
let divPostres2 = document.querySelector('#postres2')
let divCarrito = document.querySelector(`.modal-body`)


// MIS ARRAYS


const productos = [
    {id: 1, categoria: entradas1, nombre: "Bruschetta", descripción: "Tostadas de pan de masa madre, aceite de oliva, sal, tomates y ajo", precio: 480, foto: "../Assets/Imagenes/bruschetta.png", cantidad: 1}, 
    {id: 2, categoria: entradas1, nombre: "Burratta", descripción: "Fresca mozzarella de búfalo con tomates cherries confitados, pesto de albahaca y aceite de oliva", precio: 650, foto: "../Assets/Imagenes/burratta.png", cantidad: 1}, 
    {id: 3, categoria: entradas1, nombre: "Caprese", descripción: "Clásica ensalada de mozzarella, tomates y albahaca, con aceite de oliva y reducción de aceto", precio: 700, foto: "../Assets/Imagenes/caprese.png", cantidad: 1}, 
    {id: 4, categoria: entradas2, nombre: "Ensalada italiana", descripción: "Fresca ensalada con colchón de hojas verdes, tomates secos, queso en hebras y vinagre balsámica", precio: 520, foto: "../Assets/Imagenes/ensalada.png", cantidad: 1}, 
    {id: 5, categoria: entradas2, nombre: "Ostras", descripción: "Ostras al horno con mantequilla de salvia y reducción de vino blanco", precio: 1200, foto: "../Assets/Imagenes/ostras.png", cantidad: 1},
    {id: 6, categoria: entradas2, nombre: "Carpaccio de salmón", descripción: "Salmón ahumado servido en rodajas finas con aderezo cítrico, acompañado de hojas verdes", precio: 1100, foto: "../Assets/Imagenes/salmon.png", cantidad: 1}, 
    {id: 7, categoria: platosPrincipales1, nombre: "Tagliatelle a la putanesca", descripción: "Tagliatelle con salsa de tomates, aceitunas negras, anchoas y alcaparras", precio: 670, foto: "../Assets/Imagenes/pastas.png", cantidad: 1}, 
    {id: 8, categoria: platosPrincipales1, nombre: "Spaghetti frutti di mare", descripción: "Spaghetti con salsa ligeramente picante con langostinos, almejas y mejillones", precio: 850, foto: "../Assets/Imagenes/pasta-mariscos.png", cantidad: 1}, 
    {id: 9, categoria: platosPrincipales1, nombre: "Gnocchis don Corleone", descripción: "Gnocchis de papa con salsa de tomate, tomates frescos y hojas de menta", precio: 710, foto: "../Assets/Imagenes/gnocchi.png", cantidad: 1},
    {id: 10, categoria: platosPrincipales2, nombre: "Pizza serrana", descripción: "Pizza con salsa de tomate, prosciuttto, rúcula, queso de búfalo y aceite de oliva extra virgen", precio: 620, foto: "../Assets/Imagenes/pizza.png", cantidad: 1}, 
    {id: 11, categoria: platosPrincipales2, nombre: "Risotto silvestre", descripción: "Risotto de tomate con espinacas salteadas, frutos de mar y huevo poché", precio: 680, foto: "../Assets/Imagenes/risotto.png", cantidad: 1}, 
    {id: 12, categoria: platosPrincipales2, nombre: "Picatta de pollo", descripción: "Pechuga de pollo macerada en limón con cremoso de batata y reducción de jugo de cocción", precio: 730, foto: "../Assets/Imagenes/pollo.png", cantidad: 1}, 
    {id: 13, categoria: postres1, nombre: "Tiramisú", descripción: "Cremoso pastel con notas de café y queso, a base de bizcocho de almendras y queso mascarpone", precio: 300, foto: "../Assets/Imagenes/tiramisu.png", cantidad: 1},
    {id: 14, categoria: postres1, nombre: "Cannoli", descripción: "Trío de cannolis rellenos de nutella con nueces, dulce de leche con almendras y ricota con pistachos", precio: 240, foto: "../Assets/Imagenes/cannoli.png", cantidad: 1}, 
    {id: 15, categoria: postres1, nombre: "Gelato", descripción: "Tradicional helado italiano de vainilla, chocolate, dulce de leche o crema, acompañado de frutos secos", precio: 200, foto: "../Assets/Imagenes/gelato.png", cantidad: 1},
    {id: 17, categoria: postres2, nombre: "Cheesecake", descripción: "Cremosa torta de queso con base crujiente de galletitas, con mermelada de frutos rojos", precio: 250, foto: "../Assets/Imagenes/cheesecake.png", cantidad: 1}, 
    {id: 18, categoria: postres2, nombre: "Panna cotta", descripción: "Típico postre italiano elaborado a partir de crema y azúcar, acompañado de compota de frutos rojos", precio: 270, foto: "../Assets/Imagenes/pannacotta.png", cantidad: 1},
    {id: 16, categoria: postres2, nombre: "Brownie", descripción: "Tibio brownie de chocolate bañado con salsa de chocolate o dulce de leche a elección", precio: 180, foto: "../Assets/Imagenes/brownie.png", cantidad: 1}, 
]
const bebidas = [
    {nombre: "Agua", precio: 80}, 
    {nombre: "Gaseosa", precio: 90}, 
    {nombre: "Cerveza", precio: 150}, 
    {nombre: "Café", precio: 100}, 
    {nombre: "Té", precio: 60}, 
    {nombre: "Limonada", precio: 250}, 
    {nombre: "Copa de vino", precio: 150}, 
    {nombre: "Botella de vino", precio: 850}, 
    {nombre: "Champagne", precio: 500} 
]

// AGREGAR PRODUCTOS AL HTML

let categoria = ""

if (categoria == entradas1){
for (const producto of productos) {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${productos.foto} data-aos="fade-up" class="fotos--Menu">
                    <h3 class="nombres--Platos">${productos.nombre}</h3>
                    <h4 class="descripcion--Platos">${productos.descripción} ($${productos.precio})</h4>
                    <button id="${productos.id}" class="btn btn-outline-secondary color--Boton">COMPRAR</button>`;
                    divEntradas1.appendChild(div)
                }
            }
/*
for (const entrada of entradas2) {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${entrada.foto} data-aos="fade-up" class="fotos--Menu">
                    <h3 class="nombres--Platos">${entrada.nombre}</h3>
                    <h4 class="descripcion--Platos">${entrada.descripción} ($${entrada.precio})</h4>
                    <button id="${entrada.id}" class="btn btn-outline-secondary color--Boton">COMPRAR</button>`;
                    divEntradas2.appendChild(div)}

for (const platoPrincipal of platosPrincipales1) {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${platoPrincipal.foto} data-aos="fade-up" class="fotos--Menu">
                    <h3 class="nombres--Platos">${platoPrincipal.nombre}</h3>
                    <h4 class="descripcion--Platos">${platoPrincipal.descripción} ($${platoPrincipal.precio})</h4>
                    <button id="${platoPrincipal.id}" class="btn btn-outline-secondary color--Boton">COMPRAR</button>`;
                    divPlatosPrincipales1.appendChild(div)}

for (const platoPrincipal of platosPrincipales2) {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${platoPrincipal.foto} data-aos="fade-up" class="fotos--Menu">
                    <h3 class="nombres--Platos">${platoPrincipal.nombre}</h3>
                    <h4 class="descripcion--Platos">${platoPrincipal.descripción} ($${platoPrincipal.precio})</h4>
                    <button id="${platoPrincipal.id}" class="btn btn-outline-secondary color--Boton">COMPRAR</button>`;
                    divPlatosPrincipales2.appendChild(div)}

for (const postre of postres1) {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${postre.foto} data-aos="fade-up" class="fotos--Menu">
                    <h3 class="nombres--Platos">${postre.nombre}</h3>
                    <h4 class="descripcion--Platos">${postre.descripción} ($${postre.precio})</h4>
                    <button id="${postre.id}" class="btn btn-outline-secondary color--Boton">COMPRAR</button>`;
                    divPostres1.appendChild(div)}

for (const postre of postres2) {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${postre.foto} data-aos="fade-up" class="fotos--Menu">
                    <h3 class="nombres--Platos">${postre.nombre}</h3>
                    <h4 class="descripcion--Platos">${postre.descripción} ($${postre.precio})</h4>
                    <button id="${postre.id}" class="btn btn-outline-secondary color--Boton">COMPRAR</button>`;
                    divPostres2.appendChild(div)}
*/

// SELECCIONAR BOTONES

const botones = document.getElementsByClassName(`color--Boton`)



// AGREGAR COSAS AL CARRITO

const carrito = []

function agregarAlCarrito(){
    const seleccionado = entradas1.find(entrada => entrada.id == this.id);
    const existe = carrito.find(entrada => entrada.id == this.id)

    
    let posicion = carrito.indexOf(existe)

    if (carrito.length == 0){

        carrito.push(seleccionado)

    } else if (existe == undefined){
        carrito.push(seleccionado)
    } else {
        carrito[posicion].cantidad += 1
    }

    divCarrito.innerHTML = ``


for (const element of carrito){
    let div = document.createElement(`div`)
    div.innerHTML = `
    <h4>${element.nombre}</h4>
    <p>$${element.precio}</p>
    <p>Cantidad: ${element.cantidad}</p>`

    divCarrito.appendChild(div)
}

}


for (const boton of botones) {
    boton.addEventListener("click", agregarAlCarrito)
}



// AGREGAR AL STORAGE

localStorage.setItem("CARRITO", JSON.stringify(carrito));