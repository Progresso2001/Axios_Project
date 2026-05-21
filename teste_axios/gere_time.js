// Gerenciamento de tempo morto

const axios = require('axios')

async function fetchWithTimeout(){
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts",{
            timeout:5000,
            transitional: {
                // configurar por preferencia ETIMEOUT do que ECONNABORTED
                clarifyTimeoutError: true
            }
        })
        console.log("Resp: ", res.data)

    }catch(error){
        if(axios.isAxiosError(error)){
            if(error.code === 'ECONNABORTED' || error.code === 'ETIMEOUT'){
                console.error("Request time out. Please try again.")
                return;
            }
            console.error("Axios erro: ", error.message)
            return;
        }
        console.error("Unexpected erro: ", error)
    }
}
fetchWithTimeout()

// Nota: usar sempre o timeout, para genciar tempo.