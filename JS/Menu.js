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
    agregarCantidad(valor){
        this.cantidad += valor;
    }
    subtotal() {
        return this.cantidad * this.precio;
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






            // CARGA ASINCRONICA DE INFROMACION DE PRODUCTOS DE ORIGEN LOCAL (producto.json)


            $(document).ready(
                function() {
                    if ("carrito" in localStorage){
                        const data = JSON.parse(localStorage.getItem("carrito"))
                        for (const dato of data){
                            carrito.push(productos.nombre, productos.id, productos.descripción, productos.precio, productos.categoria, productos.foto, productos.cantidad)
                        }
                            agregarAlCarrito();
                        }
            
            $.get("../JS/data/producto.json", function(datos, estado){
                console.log(datos);
                console.log(estado);
                if(estado == "success") {
                    for(const producto of datos){
                        platos.push(new Producto(producto.id, producto.categoria, producto.nombre, producto.descripción, producto.precio, producto.foto, producto.cantidad));
                    }
                    console.log(platos);


// AGREGAR PRODUCTOS AL HTML



const renderizarProductos = (productos, categoria, lugarDondeLoPone) => {
    const arrayDePrueba = productos.filter(producto => producto.categoria == categoria.id)

for (const producto of arrayDePrueba) {
    let div = document.createElement("div");
    div.innerHTML = `<img src=${producto.foto} class="fotos--Menu">
                     <h3 class="nombres--Platos">${producto.nombre}</h3>
                     <h4 class="descripcion--Platos">${producto.descripción} ($${producto.precio})</h4>
                     <button id="${producto.id}" class="btn btn-outline-secondary color--Boton">COMPRAR</button>`;
                     lugarDondeLoPone.appendChild(div)
    }
    // FUNCIÓN PARA EL BOTÓN DE AGREGAR AL CARRITO

const botones = $(".color--Boton")

for (const boton of botones) {
    boton.onclick = agregarAlCarrito;
}

}



            renderizarProductos(platos, entradas1, divEntradas1)
            renderizarProductos(platos, entradas2, divEntradas2)
            renderizarProductos(platos, platosPrincipales1, divPlatosPrincipales1)
            renderizarProductos(platos, platosPrincipales2, divPlatosPrincipales2)
            renderizarProductos(platos, postres1, divPostres1)
            renderizarProductos(platos, postres2, divPostres2)
                }
                }
            )
            
            })



// AGREGAR COSAS AL CARRITO

const carrito = []

function agregarAlCarrito(){
    const seleccionado = platos.find(producto => producto.id == this.id);
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
    <p>${element.nombre}</p>
    <p> $${element.precio}</p>
    <p> Cantidad: </p>
    <p> ${element.cantidad}</p>
    <p> -> </p>
    <p> $${element.subtotal()}</p>
    <a id="${element.id}" class="btn btn-danger btn-delete">X</a>
    <a id="${element.id}" class="btn btn-info btn-restar">-</a>
    <a id="${element.id}" class="btn btn-warning btn-add">+</a>
    </div>`)
    console.log(carrito) 
}
$(".modal-body").append( `<p id="totalCarrito"> TOTAL $${totalCarrito(carrito)}</p>`)


// MANEJADOR PARA ELIMINAR COSAS DEL CARRITO

function eliminarCarrito(e){
    let posicion = carrito.findIndex(p => p.id = e.target.id)
    carrito.splice(posicion, 1);
    console.log(e.target.parentNode)
    $(e.target.parentNode).remove()
    }

// GUARDAR EN STORAGE

localStorage.setItem("CARRITO", JSON.stringify(carrito))

// FUNCIÓN PARA EL BOTÓN DE ELIMINAR

$(".btn-delete").click(eliminarCarrito);


// MANEJADOR PARA SUMAR CANTIDAD EN EL CARRITO


function agregarCantidad() {
    console.log(totalCarrito(carrito))

 
    let producto = carrito.find(p => p.id == this.id);
    producto.agregarCantidad(1);
    $(this).parent().children()[3].innerHTML = producto.cantidad;
    $(this).parent().children()[5].innerHTML = producto.subtotal();
    console.log(totalCarrito(carrito))
    $(this).parent().children().innerHTML = totalCarrito(carrito);
    $('#totalCarrito').remove()
   $(".modal-body").append( `<p id="totalCarrito"> TOTAL $${totalCarrito(carrito)}</p>`)

    console.log(carrito)



// GUARDAR EN STORAGE

localStorage.setItem("CARRITO", JSON.stringify(carrito))

}

// FUNCIÓN PARA EL BOTÓN DE AGREGAR

$(".btn-add").click(agregarCantidad);



// MANEJADOR PARA RESTAR CANTIDAD EN EL CARRITO

function restarCantidad() {
    let producto = carrito.find(p => p.id == this.id);
    if (producto.cantidad > 1) {
        producto.agregarCantidad(-1);
        $(this).parent().children()[3].innerHTML = producto.cantidad;
        $(this).parent().children()[5].innerHTML = producto.subtotal();
        $(this).parent().children().innerHTML = totalCarrito(carrito);
        $('#totalCarrito').remove()
       $(".modal-body").append( `<p id="totalCarrito"> TOTAL $${totalCarrito(carrito)}</p>`)
    }

        // GUARDAR EN STORAGE

localStorage.setItem("CARRITO", JSON.stringify(carrito))


}


// FUNCIÓN PARA EL BOTÓN DE RESTAR

$(".btn-restar").click(restarCantidad);


}

// FUNCION PARA OBTENER EL PRECIO TOTAL DEL CARRITO
function totalCarrito(carrito) {
    console.log("Totcarrito")
    console.log(carrito);
    let total = 0;
    carrito.forEach(p => total += p.subtotal());
    return total.toFixed(2);
  }
  
// FUNCION PARA ENVIAR AL BACKEND LA ORDEN DE PROCESAMIENTO DE COMPRA
function confirmarCompra(){

// REALIZAMOS LA PETICION POST
    const URLPOST = 'http://jsonplaceholder.typicode.com/posts';
  
// INFORMACION A ENVIAR
    const DATA = {productos: JSON.stringify(carrito), total: totalCarrito(carrito)}
  
// PETICION POST CON AJAX
    $.post(URLPOST, DATA, function(respuesta,estado){
//console.log(respuesta);
//console.log(estado);
        if(estado == 'success'){
//MOSTRAR NOTIFICACION DE CONFIRMACIÓN 
          $("#notificaciones").html(`<div class="alert alert-sucess alert-dismissible fade show" role="alert">
                      <strong>COMPRA CONFIRMADA!</strong> Comprobante Nº ${respuesta.id}.
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      </div>`).fadeIn().delay(2000);
                    }
     //VACIAR CARRITO;
          carrito.splice(0, carrito.length);
     //SOBREESCRIBIR ALMACENADO EN STORAGE
          localStorage.setItem("CARRITO",'[]');
        }
    )}

    // FUNCIÓN PARA EL BOTÓN CONFIRMAR COMPRA

    $("#btnConfirmar").click(confirmarCompra);

    localStorage.clear();