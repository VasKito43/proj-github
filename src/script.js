

const botao = document.querySelector("#botao")

var div_cartoes = document.querySelector("#div_cartoes")
botao.addEventListener("click", busca_usuario)

function busca_usuario(){
    let usuario = document.querySelector("#input").value
    let url = `https://api.github.com/users/${usuario}`
    console.log(usuario)
    console.log(url)


    cartao = document.createElement('div')
    cartao.className = "w-96 flex flex-col items-center rounded-lg bg-white shadow-2xl pb-8 pl-8 h-full overflow-y-auto"
    img_fundo = document.createElement('img')
    img_fundo.src = "pordosol1.jpg"
    img_fundo.className = "w-96 rounded-tr-md rounded-tl-md"
    login = document.createElement('p')
    nome = document.createElement('p')
    nome.className = "text-stone-400 pb-6"
    p_reposit = document.createElement('p')
    p_reposit.className = "font-bold pb-4 mr-56"

    fetch(url)
    .then((resposta) => resposta.json())
    .then((dados) => {
        avatar = document.createElement('img')
        avatar.src = dados.avatar_url
        avatar.className = "rounded-full w-28 -translate-y-14 border-white border-8"
        login.textContent = dados.login
        nome.textContent = dados.name

        cartao.appendChild(img_fundo)
        cartao.appendChild(avatar)
        cartao.appendChild(login)
        cartao.appendChild(nome)
        cartao.appendChild(p_reposit)
        fetch(dados.repos_url)
            .then((resposta) => resposta.json())
            .then((repos) => {
                for (let i = 0; i < repos.length; i++){
                    div_repositorio = document.createElement('div')
                    div_repositorio.className = "bg-stone-300 w-80 rounded px-6 pt-4 pb-4 mb-4"
                    nome_resp = document.createElement('p')
                    nome_resp.className = "font-bold pb-2"
                    nome_resp.textContent = repos[i].name
                    desc_resp = document.createElement('p')
                    desc_resp.className = "text-stone-600 pb-6 text-justify"
                    desc_resp.textContent = repos[i].description
                    linguagem = document.createElement('div')
                    linguagem.className = "bg-stone-600 font-bold rounded "
                    linguagem.textContent = `#${repos[i].language}`
                    div_repositorio.appendChild(nome_resp)
                    div_repositorio.appendChild(desc_resp)
                    div_repositorio.appendChild(linguagem)
                    cartao.appendChild(div_repositorio)
                }
            })
            .catch((erro) => console.log(erro))
    })
    .catch((erro) => console.log(erro))
    div_cartoes.appendChild(cartao)
}
