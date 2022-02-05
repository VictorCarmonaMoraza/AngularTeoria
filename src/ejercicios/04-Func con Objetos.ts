
/*
    ===== Código de TypeScript =====
*/

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

//
function curar(personaje:PersonajeLOR, curarX:number):void {
    
    personaje.pv += curarX;
    
    console.table(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Victor',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de ida',this.pv);
    }
}

curar(nuevoPersonaje, 20);