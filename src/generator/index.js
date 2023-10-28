function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterate(array) {
    for(let value of array) {
        yield value
    }
}

const mArray = ['Patito', 'David', 'Juan', 'Ana', 'XanaxScript'];
const it = iterate(mArray);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


//Pato Manera

function* yoRepartidor(mazo) {
    for (let jugadores of mazo){
        yield jugadores;
    }
}

const mazoDeCartas = ['Carta 1', 'Carta 2', 'Carta 3', 'Carta 4', 'Carta 5',
    'Carta 6',
    'Carta 7',
    'Carta 8',
    'Carta 9',
    'Carta 10',
];

const repartir = yoRepartidor(mazoDeCartas);
console.log(repartir.next().value);
console.log(repartir.next().value);
console.log(repartir.next().value);


