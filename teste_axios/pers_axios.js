// Personalize a solicitação (cabeçalhos, parâmetros, tempos limite…)

const axios = require('axios')

axios.get(`https://jsonplaceholder.typicode.com/users`, {
    params:{
        page:1,
        limit: 5,
    },
    headers: {
        'Authorization': 'Bearer TOKEN_SECRETO'
    },
    timeout: 5000
})
.then(res=>console.log(res.data))
.catch(err =>{
    if(err.code ==='ECONNABORTED'){
        console.log("Timeout alcançado")
    }else{
        console.error("Erro gerado: ", err.message)
    }
})

//usando aysnc /await
async function buscarDados(){
    try{
        const res = await axios.get("https://dummyjson.com/users", {
            params:{
                limit: 5, 
                sort: 'title'
            },
            headers:{
                'Authorization': 'Bearer MY_TOKEN_NOVO'
                
            },
            timeout: 3000
        })
        console.log("Dados de usuario: ", res.data)
    }catch(e){
        if(e.code ==='ECONNABORTED'){
            console.error('Limite esgotado')
        }else{
            console.error('Erro na requisicao: ', e.message)
        }
    }
}
buscarDados()

