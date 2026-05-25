const axios = require('axios')

// Criar instancia e configurar

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000,
    headers:{'Content-Type': 'application/json'}
})

async function buscarDados(id){
   try{
     const res = await api(`/users/${id}`)
    console.log(res.data)
    return res.data
   }
   catch(e){
    if(e.request){
    console.error("Erro na API: ", e.request.message)

    }
   }
}
buscarDados(5)


// POST COM PARAMETRO NA FUNCAO

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 2000,
    headers:{'Content-Type': 'application/json'}
})

async function buscarDados(dados){
   try{
     const res = await api.post("/posts", dados)
    console.log("Dados criados com sucesso: ", res.data)
    return res.data
   }
   catch(e){
    if(e.request){
    console.error("Erro na API: ", e.request.message)

    }
   }
}
buscarDados({
    name: 'joaquim',
    title: 'eliseu',
    body: 'joaquimeliseu@annie.ca'
}
)
