const axios = require('axios')

// Criar instancia e configurar

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000,
    headers:{'Content-Type': 'application/json'}
})

// Função GET usando async e await

async function getPosts(){
    try{
        const resp = await api.get('/posts', {params: {_limit: 2}})
        console.log("Lista de posts: ", resp.data)
    }
    catch(e){
        if(e.resp){
            console.error("Erro na resposta da Api: ", e.resp.status, e.resp.data)
        }else if(e.request){
            console.error("Sem resposta no servidor: ", e.message)
        }else{
            console.error("Erro ao configurar: ", e.message)
        }

    }
    finally{
        console.log('✅ Requisição GET finalizada')
    }
}
getPosts()