const axios = require('axios')

function criarRequest(){
    const controller = new AbortController()
    const promise = axios.get('https://jsonplaceholder.typicode.com/todos/1', {
        signal: controller.signal
    });
    return{
        promise, 
        cancelar : () => controller.abort()
    }
};
const { promise, cancelar } = criarRequest();
promise
    .then(res => {
        const dadoJson = res.data
        console.log(dadoJson)
    })
    .catch(e =>{
        if(e.name === 'CanceledError'){
            console.log('URL cancelada: ', e.message)
        }else{
            console.error(e)
        }
    })
setTimeout(()=> cancelar(), 2000)

// Usando async e await


const controller = new AbortController()

async function carregarDados(){
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1', 
            {
        signal: controller.signal
    })
    console.log(res.data)
    }catch(e){
        if(e.name ==='CanceledError' || e.name=== 'AborError'){
            console.log('Requisição abortada na saida')
        }else{
            console.error(e)
        }
    }
}
carregarDados()

setTimeout(()=>controller.abort(), 2000)

// Multiplas requisições canceladas

const CancelToken = axios.CancelToken;
let cancel;

const token = new CancelToken(function executor(c){
    cancel = c;
})

axios.get('https://jsonplaceholder.typicode.com/posts', {
    cancelToken: token
})
axios.get('https://jsonplaceholder.typicode.com/users', {
    cancelToken: token
})
.then(res=>console.log(res.data))
.catch(e =>{
    if(e.name === 'CanceledError'){
        console.log("Status do cancelamento: ", e.message)
    }else{
        console.error("Usuario cancelou")
    }
})

setTimeout(()=>cancel('OK'), 1000)
