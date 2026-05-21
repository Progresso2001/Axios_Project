
const nomeUsuario = document.querySelector('#nomeUsuario');

function trazerRepositorios(){
    axios.get(`https://api.github.com/users/${nomeUsuario.value}/repos`)
    .then(res=>{
        const repos = res.data
        console.log(repos);
        var lista = document.querySelector('#repos');
        if (i in repos){
            console.log(repos[i])
            var elemento = document.createElement('li');
            elemento.innerHTML = JSON.stringify(repos[i].url)
            lista.appendChild(elemento)
        }
    })
    .catch(err=>console.error('Erro: ', err.message))
}
