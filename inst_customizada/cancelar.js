const axios = require('axios')

const url = "https://api.github.com/users/tiagomatosweb";

const controller = new AbortController();

axios
  .get(url, {
    signal: controller.signal,
  })
  .then((response) => {
    console.log("Dados do user:", response.data);
  })
  .catch((err) => {
    if (axios.isCancel(err)) {
      console.log("Requisição cancelada:", err.message);
    } else {
      console.error("Erro na requisição:", err);
    }
  });
controller.abort("Operação cancelada por timeout");

// Para cancelar a requisição antes de terminar:
setTimeout(() => {
  controller.abort("Operação cancelada por timeout");
}, 3000);


// USANDO CancelToken(legado)

const minhaURL = 'https://jsonplaceholder.typicode.com'

const cancelToken = axios.CancelToken
const source = cancelToken.source()

axios
    .get(minhaURL, {
        cancelToken: source.token,
    })
    .then(res => console.log(res.data))
    .catch(e =>{
        if(axios.isCancel(e)){
            console.log("Requisição cancelada: ", e.message)
        }else{
            console.error("Erro na requisição: ", e)
        }
    })
    // cancelar
source.cancel("Cancelado pelo usuario")