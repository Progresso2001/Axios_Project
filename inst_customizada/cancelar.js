const axios = require('axios')

const minhaInstancia = 'https://jsonplaceholder.typicode.com'
const cancelarRequest = new AbortController()
axios
.get(minhaInstancia, {signal: cancelarRequest.signal})
    .then(res => console.log('Dados: ', res.data))
    .catch(e => {
        if(axios.isCancel(e)){
            console.error("Requisição cancelada: ", e.message)
        }else{
            console.error("Erro na requisição:", e)
        }

    })

cancelarRequest.abort()