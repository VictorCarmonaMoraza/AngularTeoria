
/*
    ===== Código de TypeScript =====
*/
class PersonaNormal{
    // nombre: string;
    // direccion: string;

    constructor(
        public nombre: string,
        public direccion: string) {
        // this.nombre = nombre;
        // this.direccion = direccion;
    }

}

class Heroe extends PersonaNormal {
    //  alterEgo: string;
    //  edad: number;
    // nombreReal: number;

    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string) {
        super(nombreReal,'New York, USA');
    }
}

const ironman = new Heroe('Ironan',45,'Tony');

console.log(ironman);