// import axios  from "axios";
const axios =  require('axios')

axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(function(res) {
    console.log("Dados: ", res.data)
})
.catch(function(e){
    console.error("Erro: ", e.message)
})

// usando async / await

// async function buscarDados() {
//     try{
//         const res =  await axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     console.log(res.data)
//     }catch(err){
//         console.error("Erro: ", err)
//     }
    
// }
// buscarDados()