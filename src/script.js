


const url = "https://api.github.com/users/VasKito43"

fetch(url)
    .then((resposta) => resposta.json())
    .then((dados) => {
        console.log(dados.avatar_url)
    })
    .catch((erro) => console.log(erro))
