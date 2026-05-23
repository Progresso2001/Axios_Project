// TESTANDO CONHECIMENHTO EM INSTANCIA CUSTOMIZADA COM AXIOS

const axios = require('axios')

const myInstance = (
    baseURL, 
    token, 
    contentType = 'application/json'
) => {
    const newInstanceCreated = axios.create({
        timeout: 2000,
        baseURL,
        headers: {
            'Content-Type': contentType,
        }
    })
    // Adicionar axios.interceptors na request
    newInstanceCreated.interceptors.request.use(
        (config)=> {
            if(token){
                config.headers['Authorization'] = `Bearer ${token}`
            }
            return config
        }
    );
    // Adicionar axios.interceptors na response para tratar erros
    newInstanceCreated.interceptors.response.use(
        (res) => console.log(res.data),
        (er) => Promise.reject(er)
    )
    return newInstanceCreated
}

const baseURL = 'https://jsonplaceholder.typicode.com'
const token = 'Meu_TOKEN_INVENTADO'

// INSTANCIADO O CUSTOM
const sucessApi = myInstance(baseURL, token)

sucessApi.get('/posts/1')
    .then(res=>console.log(res))
    .catch(e=>console.error(e))