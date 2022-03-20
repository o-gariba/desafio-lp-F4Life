const inputs = document.querySelectorAll('input');

const padraoEmail = /^([a-zA-Z\d\.]{1,32})@([a-zA-Z\d]{1,16})\.([a-z]{2,5})$/;
//  Explicando o RegEx:
//  a-zA-Z -> O user pode conter todas as letras do alfabeto, maiusculas e minusculas
// \d -> permite numerais (digits)
// \. -> permite pontos finais

function validacao(campo, regEx) {
    if(!(regEx.test(campo.value))) campo.className = 'input-invalido';
    else campo.className = 'input-valido';
}

inputs.forEach(input => {
    input.addEventListener('keyup', evento => {
        console.log(evento.target.attributes.name.value);
        validacao(evento.target, padraoEmail);
    })
})
