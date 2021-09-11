// MIS VARIABLES GLOBALES

let divEntradas1 = document.querySelector('#entradas1')
let divEntradas2 = document.querySelector('#entradas2')
let divPlatosPrincipales1 = document.querySelector('#platosPrincipales1')
let divPlatosPrincipales2 = document.querySelector('#platosPrincipales2')
let divPostres1 = document.querySelector('#postres1')
let divPostres2 = document.querySelector('#postres2')
let divCarrito = document.querySelector(`.modal-body`)


// MIS ARRAYS

class Producto {
    constructor(id, categoria, nombre, descripción, precio, foto, cantidad) {
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.descripción = descripción;
        this.precio = precio;
        this.foto = foto;
        this.cantidad = cantidad;
    }
}

const platos = []

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

// CARGA ASINCRONICA DE INFROMACION DE PRODUCTOS DE ORIGEN LOCAL (producto.json)

$.get("../JS/data/producto.json", function(datos, estado){
    console.log(datos);
    console.log(estado);
    if(estado == "success") {
        for(const producto of datos){
            platos.push(new Producto(producto.id, producto.categoria, producto.nombre, producto.descripción, producto.precio, producto.foto, producto.cantidad));
        }
        
    
}

const renderizarProductos = (productos, categoria, lugarDondeLoPone) => {
    const arrayDePrueba = productos.filter(producto => producto.categoria == categoria)

for (const producto of arrayDePrueba) {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${producto.foto} data-aos="fade-up" class="fotos--Menu">
                     <h3 class="nombres--Platos">${producto.nombre}</h3>
                     <h4 class="descripcion--Platos">${producto.descripción} ($${producto.precio})</h4>
                     <button id="${producto.id}" class="btn btn-outline-secondary color--Boton">COMPRAR</button>`;
                     lugarDondeLoPone.appendChild(div)
    }
}

renderizarProductos(platos, entradas1, divEntradas1)
renderizarProductos(platos, entradas2, divEntradas2)
renderizarProductos(platos, platosPrincipales1, divPlatosPrincipales1)
renderizarProductos(platos, platosPrincipales2, divPlatosPrincipales2)
renderizarProductos(platos, postres1, divPostres1)
renderizarProductos(platos, postres2, divPostres2)



// AGREGAR COSAS AL CARRITO

const carrito = []

function agregarAlCarrito(){
    const seleccionado = productos.find(producto => producto.id == this.id);
    const existe = carrito.find(producto => producto.id == this.id)

    
    let posicion = carrito.indexOf(existe)

    if (carrito.length == 0){

        carrito.push(seleccionado)

    } else if (existe == undefined){
        carrito.push(seleccionado)
    } else {
        carrito[posicion].cantidad += 1
    }


localStorage.setItem("CARRITO", JSON.stringify(carrito))

// ESTRUCTURA HTML DEL CARRITO

    divCarrito.innerHTML = ``


for (const element of carrito){
    $(".modal-body").append( `
    <div class="platosEnCarrito">
    <h4>${element.nombre}</h4>
    <p>$${element.precio}</p>
    <p>Cantidad: ${element.cantidad}</p>
    <a id="${element.id}" class="btn btn-danger btn-delete">X</a>
    </div>`)
    console.log(carrito) 
}

// ELIMINAR COSAS DEL CARRITO

function eliminarCarrito(e){
    let posicion = carrito.findIndex(p => p.id = e.target.id)
    carrito.splice(posicion, 1);
    console.log(e.target.parentNode)
    $(e.target.parentNode).remove()
    }



$(".btn-delete").click(eliminarCarrito);

console.log(carrito)

}


// SELECCIONAR BOTONES

const botones = $(".color--Boton")

for (const boton of botones) {
    boton.onclick = agregarAlCarrito;
}


$(document).ready(
    function() {
        if ("carrito" in localStorage){
            const data = JSON.parse(localStorage.getItem("carrito"))
            for (const dato of data){
                carrito.push(productos.nombre, productos.id, productos.descripción, productos.precio, productos.categoria, productos.foto, productos.cantidad)
                console.log(carrito)
                agregarAlCarrito();
            }
        }
    }
)





})

