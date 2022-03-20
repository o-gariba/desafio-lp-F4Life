const inputs = document.querySelectorAll('input');

const padraoEmail = /^([a-zA-Z\d\.]{1,32})@([a-zA-Z\d]{1,16})\.([a-z]{2,7})$/;
//  Explicando o RegEx:
//  a-zA-Z -> O user pode conter todas as letras do alfabeto, maiusculas e minusculas
// \d -> permite numerais (digits)
// \. -> permite pontos finais

inputs.forEach(input => {
    input.addEventListener('keyup', evento => {
        console.log(evento.target.attributes.name.value);
        validacao(evento.target, padraoEmail);
    })
})


function validacao(campo, regEx) {
    console.log(regEx.test(campo.value));
    // .test retorna true ou false
}
