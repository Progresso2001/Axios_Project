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