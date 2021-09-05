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

renderizarProductos(productos, entradas1, divEntradas1)
renderizarProductos(productos, entradas2, divEntradas2)
renderizarProductos(productos, platosPrincipales1, divPlatosPrincipales1)
renderizarProductos(productos, platosPrincipales2, divPlatosPrincipales2)
renderizarProductos(productos, postres1, divPostres1)
renderizarProductos(productos, postres2, divPostres2)

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
    <h4>${element.nombre}</h4>
    <p>$${element.precio}</p>
    <p>Cantidad: ${element.cantidad}</p>
    <a id="${element.id}" class="btn btn-danger btn-delete">X</a>`)

}

// ELIMINAR COSAS DEL CARRITO

function eliminarCarrito(e){
    let posicion = carrito.findIndex(p => p.id = e.target.id)
    carrito.slice(posicion, 1);
  //  agregarAlCarrito(carrito);
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













