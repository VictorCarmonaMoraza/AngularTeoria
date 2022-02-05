
/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

function calculaISV(productos: Producto[]): [number,number] {

    let total = 0;

    // productos.forEach((producto: Producto) => {
    //     total += producto.precio;
    // })

    //otra forma
    productos.forEach(({ precio }) => {
        total += precio;
    })

    return [total,total * 0.15];
}

const articulos = [telefono, tableta];

const [total, ist] = calculaISV(articulos);

const isv = calculaISV(articulos);



console.log('ISV:', isv);
console.log('Total:', total);
console.log('ISV:',ist)
