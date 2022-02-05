
/*
    ===== Código de TypeScript =====
*/

//De esta forma es como si fuera un array de any
let habilidades = [];

habilidades.push(100);

//Array de string
let habilidades2: string[] = [];



//Array de diferentes tipos
let habilidades3: (boolean | string | number)[] = [];

//NOTA
//let y const se utilizan en javascript para inicializar variables

//Interface
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    //Este campo sera opcional y se pone con el simbolo ? detras del nombre del campo
    puebloNatal?: string;
}

//Objeto
const personaje:Personaje = {
    nombre: 'Victor',
    hp: 100,
    habilidades:['Bash','Counter','Healing']
}
personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);