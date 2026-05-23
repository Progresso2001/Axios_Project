// Pratica de cancelamento usando AbortController()

const axios = require('axios')
// const url = 'https://jsonplaceholder.typicode.com'

// const cancelarURL = new AbortController()
// axios
//     .get(url, {signal: cancelarURL.signal})
//     .then((res) => console.log("Dados cancelado: ", res))
//     .catch((e)=>{
//         if(axios.isCancel(e)){
//             console.log("URL cancelada com sucesso: ",e.message)
//         }else{
//             console.error("Verificar: ", e)
//         }
//     })
// cancelarURL.abort()

// USANCO O CancelToken()

// const CancelToken = axios.CancelToken
// const source = CancelToken.source()
// axios
//     .post("/posts", {name:'Joaquim', idade: 32}, {cancelToken: source.token})
//     .then((res) => console.log("Inserção de dados cancelados: ", res))
//     .catch((e)=>{
//         if(axios.isCancel(e)){
//             console.log("URL cancelada com sucesso: ",e.message)
//         }else{
//             console.error("Verificar: ", e)
//         }
//     })
// source.cancel('Post cancelado com sucesso.')

// USANCO EXECUTOR DE FUNÇÃO 
const url = 'https://jsonplaceholder.typicode.com'
const CancelToken = axios.CancelToken
let cancel;

axios
    .put(url, {name: 'joaquim', data: '02.10.2001', cidade: 'Luanda-Angola'}, {
        cancelToken : new CancelToken(function executor(c){
            cancel = c;
        })
    })
    .then((res) => console.log("Atualização de dados cancelados: ", res))
    .catch((e)=>{
        if(axios.isCancel(e)){
            console.log("URL cancelada com sucesso: ",e.message)
        }else{
            console.error("Verificar: ", e)
        }
    })
cancel("OK")
