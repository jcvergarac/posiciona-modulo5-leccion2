// ===============================
// CLASE PRODUCTO
// Modela un producto dentro del inventario
// ===============================
class Producto {

    // Constructor: inicializa las propiedades del producto
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    // Método vender: descuenta stock si hay cantidad suficiente
    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            return `Venta realizada: ${cantidad} unidad(es) de ${this.nombre}. Stock restante: ${this.stock}`;
        } else {
            return `No hay suficiente stock de ${this.nombre} para realizar la venta.`;
        }
    }

    // Método reponer: aumenta el stock del producto
    reponer(cantidad) {
        this.stock += cantidad;
        return `Stock de ${this.nombre} aumentado a ${this.stock}.`;
    }

    // Getter informacion: devuelve los datos del producto formateados
    get informacion() {
        return `Producto: ${this.nombre} | Precio: $${this.precio} | Stock: ${this.stock}`;
    }

    // Método estático: compara precios entre dos productos
    static compararPrecio(prodA, prodB) {
        return prodA.precio > prodB.precio ? prodA.nombre : prodB.nombre;
    }
}

// ===============================
// CREACIÓN DE INSTANCIAS
// ===============================
const prod1 = new Producto('Teclado', 25000, 10);
const prod2 = new Producto('Mouse', 12000, 5);

// Información inicial del producto
console.log(prod1.informacion);

// Simulación de venta
console.log(prod1.vender(3));

// Reposición de stock
console.log(prod1.reponer(5));

// Información actualizada
console.log(prod1.informacion);

// Comparación de precios usando método estático
console.log(`El producto más caro es: ${Producto.compararPrecio(prod1, prod2)}`);

// ===============================
// FILTRADO CON ARROW FUNCTION
// ===============================

// Lista de productos
const listaProductos = [
    prod1,
    prod2,
    new Producto('Monitor', 55000, 2)
];

// Filtrar productos con stock menor a 5
const productosBajoStock = listaProductos.filter(prod => prod.stock < 5);

// Mostrar información de productos con bajo stock
console.log(
    productosBajoStock.map(prod => prod.informacion)
);
