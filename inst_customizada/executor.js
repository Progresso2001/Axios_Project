// usando função executora

const axios = require('axios')

const CancelToken = axios.CancelToken

let cancel;

const minhaURL = 'https://jsonplaceholder.typicode.com'
axios.get(minhaURL, {
        cancelToken: new CancelToken(function executor(c){
            cancel = c;
        })
    })
    .then(res => console.log(res.data))
    .catch(err =>{
        if(axios.isCancel(err)){
            console.log("Requisição cancelada: ", err.message)
        }
    })
cancel("Cancelado pelo proprietario.")