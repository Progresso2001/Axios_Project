const axios = require('axios')

axios.post('https://jsonplaceholder.typicode.com/posts', {
    userId: 1,
    title: 'Estudando biblioteca axios',
    body:'joaquimmenianga99@gmail.com'
})
.then(res => {
    console.log("Inserido dado novo: ", res.data.id)
    console.log(res.data)
})
.catch(err=> {
    console.error('Erro ao criar dado: ', err);
})