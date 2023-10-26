import fetch from 'node-fetch'; 
const API = 'https://fakestoreapi.com/';

function fetchData(urlApi) {
    return fetch(urlApi);
};

/* fetchData(`${API}products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(() => {
        console.log('Hola')
    })
    .catch((error) => console.log(error)); */

fetchData(`${API}products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}products/${products[0].id}`)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })     
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}categories/${product.categories.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => {
        console.error('Hubo un error:', error.message);
    })
    .finally(() => console.log('Finally'));