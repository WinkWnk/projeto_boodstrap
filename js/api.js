let tabela = document.querySelector("#tabela")

// async é uma forma que o JS tem de tranformar uma função sincrona em assincrona, muito utilizada em APIs
async function carregarDados(){
    const url = "https://jsonplaceholder.org/users"

    const resultado = await fetch(url) // fetch irá fazer ums busca na url passada como parâmetro
    const dados = await resultado.json() // Estamos convertendo todos os dados que estão vindo da api no formato json

    // console.log(resultado)

    for (const item of dados) {
        // console.log(item.email)

        //CRIANDO ELEMENTOS HTML
        const linha = document.createElement("tr")
        const tdNome = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdTrabalho = document.createElement("td")
        const tdFone = document.createElement("td")

        //CRIANDO CONTEÚDO NAS COLUNAS      
        tdNome.textContent = item.firstname
        tdEmail.textContent = item.email
        tdTrabalho.textContent = item.company.bs
        tdFone.textContent = item.phone

        // ADICIONANDO OS ELEMENTOS EM SUAS TAGS
        linha.appendChild(tdNome)
        linha.appendChild(tdEmail)
        linha.appendChild(tdTrabalho)
        linha.appendChild(tdFone)

        tabela.appendChild(linha)

    }
}

carregarDados()