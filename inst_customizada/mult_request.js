const axios = require('axios')

const firstRequest = axios.get('https://jsonplaceholder.typicode.com/posts')
const secondRequest = axios.get('https://jsonplaceholder.typicode.com/users')

axios.all([firstRequest, secondRequest])
    .then(([posts,users]) =>{
        console.log('Posts: ', posts.data)
        console.log('Usuarios: ', users.data)
    })
    .catch(e => console.error('Erro: ', e.message))