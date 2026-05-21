// usando interceptadores, transformação de dados e cancelamentos
// sintaxe:
axios.interceptors.request.use(config =>{
    config.headers['Authorization'] ='Bearer TEU_TOKEN';
    return config
},error => Promise.reject(error));