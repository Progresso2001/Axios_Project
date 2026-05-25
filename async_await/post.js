const axios = require('axios')

// Criar instancia e configurar

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000,
    headers:{'Content-Type': 'application/json'}
})

async function criarPosts(){
    try{
        const res =  await api.post('/postsnnnnnn', 
        {
            userId: 1,
            title: "async e await",
            body: 'Joaquim estudando api'
        }
    );
        console.log("Dados criado com sucesso: ", res.data)
    }
    catch(e){
        if(e.res){
            console.error("Erro ao criar dados: ", e.res.status)
        }else if(e.request  === undefined){
            console.error("Erro ao fazer requisição: ", e.request.message)
        }else{
            console.error("Verificar a url de dados")
        }
    }
}
criarPosts()

