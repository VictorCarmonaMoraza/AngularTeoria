
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mes',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const reproductor2: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mes',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}


console.log('El volumen actual es: ', reproductor.volumen);
console.log('El segundo actual es: ', reproductor.segundo);
console.log('La cancion actual es: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);

//Forma desestructurada

//Definimos un grupo de constantes
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log('Forma desestructurada-->El volumen actual es: ', volumen);
console.log('Forma desestructurada-->El segundo actual es: ', segundo);
console.log('Forma desestructurada-->La cancion actual es: ', cancion);
console.log('Forma desestructurada-->El autor es: ', autor);