const axios = require('axios')

const id = 1
const dadosAtualizados = {
    title:"Novo titulo atualizado",
    body: 'novo dado',
    userId:1
}
axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, dadosAtualizados)
.then(res=>{
    console.log("dados: ", res.data.userId)
    console.log(res.data)
})
.catch(e => {
    console.error("Erro: ", e)
})

//usando async / await

async function atualizarDados() {
    try{
        const id = 1
        const novoDados = {
            title: "Lendo livro",
            body: 'Programar em JavaScript',
            userId: 1
        }
        const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, novoDados)
        console.log("Novo dados: ", res.data)
    }catch(e){
        console.error('Erro: ', e.message)
    }
    
}
atualizarDados()