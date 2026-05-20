const axios = require('axios')

const id = 1
axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    title:"Novo titulo atualizado"
} )
.then(res=>{
    console.log("dados", res.data.userId)
    console.log(res.data)
})
.catch(e => {
    console.error("Erro: ", e)
})