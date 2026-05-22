// TRABALHANDO COM INSTANCIA CUSTOMIZADA E INTERCEPTORES
const axios = require("axios");

const axiosInstance = (
    baseurl ='https://jsonplaceholder.typicode.com',
    token,
    contentType= "application/json, charset 'utf-8'" 
) =>{
    // criando instancia  customizada
    const minhaInstancia = axios.create({
        baseURL:baseurl,
        timeout: 60000,
        headers: {
            'Content-Type': contentType,
            'Acess-Control-Allow-Origin':'*'
        }
    });
    //Adiconar interceptores para token no request
    minhaInstancia.interceptors.request.use((config) =>{
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    });
    // Adicionar response no interceptors para pegar erros
    minhaInstancia.interceptors.response.use(
        (res) => res,
        (error) => Promise.reject(error)
        
    );
    return minhaInstancia
}
// Instancia Sem token
const api = axiosInstance()

api.get('/posts/1')
    .then(res=>console.log(res.data))
    .catch(e => console.error(e.response?.data || e.message))

// Definindo o token

const tokeApi = axiosInstance(undefined, 'MEU_TOKEN_AQUI') //Sem token

tokeApi.get('/posts/1')
    .then(res=>console.log(res.data))
    .catch(e => console.error(e.response?.data || e.message))

