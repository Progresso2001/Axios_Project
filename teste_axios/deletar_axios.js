const axios = require('axios')

const id = 1
axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then(res=>console.log("Deletado com sucesso\nstatus:", res.status))
.catch(e=>console.error("Erro ao deletar: ", e.message))


// usando async /await

async function deletarPost(){
    try{
        const id = 33333333333
        const res= await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log("Deletado com sucesso\nstatus: ", res.status)
    }catch(e){
        console.log("Erro: ", e.message)
    }
}
deletarPost()