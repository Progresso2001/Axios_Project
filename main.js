// Testando conhecimento
const axios = require('axios')

async function testarConhecimentoApi(){
    try{
        const res = await axios.get('https://viacep.com.br/')
        
        console.log("Dados da api VIACEP: ", res.status)

        // console.log("Status: ", res.status)
        // console.log("Requisicão com sucesso: ", res.statusText)
        // console.log(res)
    }
    catch(error){
    // tratamento de erro usando a funcao includes()

    //    if(error.message.includes('Request failed')){
    //      console.error("Verificar o link: ", error.status)
    //    }else{
    //      console.error("Erro: ", error)
    //    }
    // tratamento de erro usando o status
        if(error.status === 404){
            console.error("Alerta Verifique a requisição: ", error.statusText)
        }else{
            console.error("Erro: ", error)
        }
    }
}
testarConhecimentoApi()