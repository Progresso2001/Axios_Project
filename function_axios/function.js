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


// Se a função “executora” chama outra função
// Se você tem uma função principal que executa outra, as duas podem ser organizadas assim:

async function executar() {
  try {
    const dados = await buscarDados();
    console.log(dados);
  } catch (erro) {
    console.error(erro);
  }
}

async function buscarDados() {
  const resposta = await axios.get("https://api.exemplo.com/dados");
  return resposta.data;
}

executar();

const baseURL = 'https://jsonplaceholder.typicode.com'

const customNovo = new axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json'
    }
})

customNovo.get('/posts/1')
    .then(res=> console.log(res.data))
   
    .catch(e=>{
        if(e.name === 'Request failed'){
            console.log("Requisição feita com sucesso: ", e.status)
        }else{
            console.log("falha ao fazer requisição: ", e.message)
            
        }
    })


const baseurl = 'https://jsonplaceholder.typicode.com'
const contentType = 'application/json'
const tempoRes = 4000

const custom = (
    baseurl, 
    contentType,
    tempoRes
) => {
    const dadosApi = axios.create({
    baseURL: baseurl,
    timeout: tempoRes,
    headers: {
        'Content-Type': contentType
    }
})
dadosApi.interceptors.response.use(
    (res)=> res,
    (e) => Promise.reject(error)
    )
    return dadosApi
}

const imprimirDados = custom(baseurl, contentType, tempoRes)
imprimirDados.get('/users')
    .then(res=>console.log("Dados: ", res.data))
    .catch(e=>{
        if(e.message.includes('error is not defined')){
             console.log("Verificar o caminho da  url: ", e.status)
        }else{
             console.log("Configurar o erro encontrado na definição: ", e.message)
        }
    }
)