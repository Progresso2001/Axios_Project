// Configurações úteis

const axios = require('axios')

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout:5000,
    headers:{
        'Content-Type':'application/json'
    }
})

async function configurarApi(){
    try{
        const res= await api('/users')
        console.log(res.data)
    }catch(e){
        console.error('Erro: ', e.message)
    }
}
configurarApi()