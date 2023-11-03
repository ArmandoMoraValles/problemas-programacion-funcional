const data = require('./data.json');

// Problema 1: Numero de productos con existencia mayor a 20.
function productosConExistenciaMayorA20(data) {
    const productosExistenciaMayorA20 = data.filter(producto => producto.quantityInStock > 20);
    return productosExistenciaMayorA20.length;
}

// Problema 2: Numero de productos con existencia menos a 15.
function productosConExistenciaMenosA15(data) {
    const productosExistenciaMenosA15 = data.filter(producto => producto.quantityInStock < 15);
    return productosExistenciaMenosA15.length;
}

// Problema 3: Lista de productos con la misma clasificacion y precio mayor 15.50.
function productosClasificacionPrecioMayorA1550(data) {
    const clasificaciones = ["Higiene personal", "Alimentos no perecederos", "Alimentos perecederos"];
    const productosAgrupados = {};

    clasificaciones.forEach(clasificacion => {
        const productos = data.filter(producto => producto.clasification === clasificacion && producto.priceMXN > 15.50);
        productosAgrupados[clasificacion] = productos;
    });

    return productosAgrupados;
}


// Problema 4: Lista de productos con precio mayor a 20.30 y menor a 45.00.
function productosPrecioEntre2030Y4500(data) {
    const productosPrecioEntre2030Y4500 = data.filter(producto => producto.priceMXN > 20.30 && producto.priceMXN < 45.00);
    return productosPrecioEntre2030Y4500;
}

// Problema 5: Numero de productos agrupados por su clasificacion.
function productosAgrupadosPorClasificacion(data) {
    const productosAgrupados = data.reduce((agrupados, producto) => {
        if (!agrupados[producto.clasification]) {
            agrupados[producto.clasification] = 1;
        } else {
            agrupados[producto.clasification]++;
        }
        return agrupados;
    }, {});
    return productosAgrupados;
}

function main() {
    console.log("Numero de productos con existencia mayor a 20:", productosConExistenciaMayorA20(data));
    console.log("Numero de productos con existencia menos a 15:", productosConExistenciaMenosA15(data));
    console.log("Productos con clasificacion 'Higiene personal' y precio mayor a 15.50:", productosClasificacionPrecioMayorA1550(data));
    console.log("Productos con precio entre 20.30 y 45.00:", productosPrecioEntre2030Y4500(data));
    console.log("Numero de productos agrupados por su clasificacion:", productosAgrupadosPorClasificacion(data));
}

main();
