// alert("Hello World!!") 
// console.log("Só quem é DEV vai descobrir!")
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if(nome.value == ""){
        nome.style.border = "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur", exibirNome) // O addEventListener cria um evento para algum elemento no caso estamos utilizando o evento 'blur', que é quando o foco sai de um campo.

// nome.addEventListener("focus", function(){
//     nome.value = ""
// })

let idade = document.querySelector("#idade")

idade.addEventListener("blur", function(){
    if(idade.value >= 18){
        alert("Você possui 18 anos ou mais!")
    }
    else{
        alert("Infelizmente você não é de maior!")
        // Essa função irá redireionar o usuário para um link específico (window.location.href)
        window.location.href = "https://poki.com.br/?campaign=15246028732&adgroup=144982370624&extensionid=&targetid=kwd-30943913&location=1001561&matchtype=b&network=g&device=c&devicemodel=&creative=606569517799&keyword=jogos%20online&placement=&target=&gclid=EAIaIQobChMIupXtg83LgAMVQkJIAB2oYAtBEAAYASAAEgL0pvD_BwE"
    }
})

let endereco = document.querySelector("input[name=endereco]")
endereco.addEventListener("blur", function(){
    console.log(endereco.value.length)
    if(endereco.value.length >= 35){
        alert("Seu endereço ultrapassou o limite do campo!")
        endereco.style.border = "2px solid red"
    }
    else{
        alert("OK")
        endereco.style.border = "2px solid yellow"
    }
});

let email = document.querySelector("#email")
let confirmacao = document.querySelector("#confirmar")
 //Tornando o conteúdo do email minúsculo 

email.addEventListener("keyup", function(){
    let minusculo = email.value.toLowerCase()
    confirmacao.value = email.value

    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.com') == -1){
        console.log("Email inválido")
        // email.style.border='2px solid red'
        email.classList.add("border-danger")
        email.classList.remove("border-success")
        
    }
    else{
        console.log("Email válido")
        // email.style.border='2px solid green'
        email.classList.remove("border-danger")
        email.classList.add("border-success")
    }

    console.log(email.value.indexOf("@"))
})

let senha = document.querySelector("#senha")
let btn_olho = document.querySelector(".fa-eye")

//()=>{} isto é uma arrow function, ou seja, uma versão resumida da função anônima
btn_olho.addEventListener("click", ()=>{
    if(btn_olho.classList.contains("fa-eye")){
        console.log("A classe existe")
        btn_olho.classList.remove("fa-eye")
        btn_olho.classList.add("fa-eye-slash")

        senha.setAttribute("type", "text")
    }
    else{
        console.log("A classe não existe")
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")

        senha.setAttribute("type", "password")
    }
}) 

// PEGANDO DADOS DO CAMPO RADIO
let escolaridade = document.querySelectorAll("input[name=escolaridade]")
let btnEscolaridade = document.querySelector("#btnEscolaridade")

btnEscolaridade.addEventListener("click", (evento)=>{
    // console.log(evento)
    evento.preventDefault() //Esta função irá impedir o comportamento padrão do botão

    // console.log(escolaridade[0])
    for(let itens of escolaridade){
        // console.log(itens)
        if(itens.checked){
            alert(`Sua escolaridade é ${itens.value}`) //Isto é um template string, outra forma de concatenar.
            // console.log("Sua escolaridade é:" + itens.value)
            // confirm("Tem certeza?")
        }
    }
})

let escolha = document.querySelector("#escolha")
let contrato = document.querySelector("#contrato")

contrato.classList.add("d-none")
escolha.addEventListener("change", ()=>{
    if(escolha.checked){
        contrato.classList.remove("d-none")
        contrato.classList.add("d-block")
    }
    else{
        contrato.classList.remove("d-block")
        contrato.classList.add("d-none")
    }
})

let concordo = document.querySelector("#concordo")
concordo.addEventListener("click",()=>{

    if(concordo.checked){
        alert("Parabéns, alma vendida com sucesso!")
    }

    else{
        alert("Alma perdida com sucesso!")
        let mensagem = prompt("Diga porque você desmarcou") //Cria uma caixa de texto
    }
})

let trabalho = document.querySelector(".form-select")
trabalho.addEventListener("change", ()=>{
    // console.log(trabalho.options)

    for(let itens of trabalho){
        if(itens.selected){
            // console.log(itens.value)
            if(itens.value == "RH"){
                trabalho.style.backgroundColor = "cyan"
            }
            if(itens.value == "tecnologia"){
                trabalho.style.backgroundColor = "yellow"
            }
            if(itens.value == "financeiro"){
                trabalho.style.backgroundColor = "pink"
            }
            
        }
    }
})