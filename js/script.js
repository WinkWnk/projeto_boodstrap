// alert("Hello World!!") 
// console.log("Só quem é DEV vai descobrir!")
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if(nome.value = ""){
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