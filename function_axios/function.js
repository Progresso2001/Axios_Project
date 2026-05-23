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

