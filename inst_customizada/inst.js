// Usando instancia customizada

const axios = require("axios");

const minhaInstancia = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout:5000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer meu-token-novo'
    }
});
// usando o get com instancia 
minhaInstancia.get('/users')
    .then(res=> console.log(res.data))
    .catch(e => console.error(e))

// usando o post
minhaInstancia.post('/users', {id: 11, 
    name: 'joaquim',
    username: 'DevJocas',
    email: 'devjocas@gmail.com',
    address: {
        street: 'Elisa 1',
        suite: 'Luanda 1209',
        city: 'Luanda-Mulenvos',
        zipcode: '123456788',
        geo: 'Luanda-Angola',
        phone: '020-133-091',
        website: 'devjocas.org',
        company: {
            name: 'DevJocas-Tech',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
})
    .then(res=>console.log(res.data))
    .catch(e => console.error(e))
   