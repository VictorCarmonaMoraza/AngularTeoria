
/*
    ===== Código de TypeScript =====
*/

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

//desestructuramos el arreglo
const [p1, p2, p3] = dbz;

//sino quieres mas que la tercera posicion del arreglo solo tienes que poner comas y omitir las demas posiciones
//const [, , p3] = dbz;

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', dbz[2]);

console.log('Forma desestructurada-->Personaje 1:', p1);
console.log('Forma desestructurada-->Personaje 2:', p2);
console.log('Forma desestructurada-->Personaje 3:', p3);