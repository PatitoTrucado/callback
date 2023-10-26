const Promise = new Promise(function (resolve, reject) {
    resolve('Hey all nice!');
});

const cows = 15;

const countCow = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject('There is no cows on the farm');
    }
})

countCow.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('Finally'))


const diaper = 10;

const gibHelado = new Promise(function (resolve, reject) {
    if(diaper >  9) {
        resolve(`Izan tiene ${diaper} pañales :3`);
    } else {
        reject(`Izan es mion y necesita más pañales`);
    }
})

gibHelado.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('Termine de contar los pañales'));