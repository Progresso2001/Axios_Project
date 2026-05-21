const axios = require('axios')
axios.get('https://jsonplaceholder.typicode.com/post/1')

.then(res=> console.log('Dados: ',res.data))
.catch(error=>{
    if(error.res){
        console.error("Erro de servidor: ", error.res.status)
    }else if(error.request){
        console.error("Solicitação mal feita: ", error.request)
    }else{
        console.error("Erro ao configurar: ", error.message)
    }
})

// Usando async /await 

async function tratarErros(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/post/1')
    .then(res=> console.log("Dados: ", res.data))
    .catch(e =>{
        if(e.res){
            console.error('Erros na resposta: ', e.res.status)
        }else if(e.request){
            console.error('Erros na solicitação com status: ', e.status)
        }else{
            console.error('Erros ao configurar: ', e.message)
        }
    })
}

tratarErros()