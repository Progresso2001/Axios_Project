// Testando conhecimento
const axios = require('axios')

async function testarConhecimentoApi(){
    try{
        const res = await axios.get('https://viacep.com.br/')
        
        console.log("Dados da api VIACEP: ", res.status)

        console.log("Status: ", res.status)
        console.log("Requisicão com sucesso: ", res.statusText)
        console.log(res)
    }
    catch(error){
    // tratamento de erro usando a funcao includes()

       if(error.message.includes('Request failed')){
         console.error("Verificar o link: ", error.status)
       }else{
         console.error("Erro: ", error)
       }

    // tratamento de erro usando o status
        if(error.status === 404){
            console.error("Alerta Verifique a requisição: ", error.statusText)
        }else{
            console.error("Erro: ", error)
        }
    }
}
testarConhecimentoApi()

// -------------------------------------TESTANDO OBJETOS-------------------------------------------------------------
const infPessoal = {
    id: 1,
    nome: "Joaquim",
    email: "joaquime@gmail.com",
    habilidades: {
        programcao: ["Python", "JavaScript", "MySQL", "Node.js"], 
        livros : [
            {titulo: "JavaScript completo", autor: "Editora OReil", ano: 2022},
            {titulo: "Python Para Data Science", autor: "Editora OReil", ano: 2022}
        ]
    }
}
// console.log(typeof infPessoal)
async function transformarEmJson(){
    // impressao de dados sem tratamento de erros

    const res = await JSON.stringify(infPessoal, null, 2)
    console.log("Dados em Json: ", res)
    
    // imprimir com tratamento de erro

    const myFyle =  JSON.stringify(infPessoal)
    const res = await myFyle
    if(typeof(res)=== 'string'){
        console.log("Dados transformado em json: ", res)
    }else{
        console.log("Erro ao transformar em json o objecto")

    }
}
transformarEmJson()