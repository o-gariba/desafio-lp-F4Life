const botaoEnvio = document.querySelector('button');

const padraoEmail = /^([a-zA-Z0-9\.]{1,32})@([a-z0-9]{1,16})\.(com)$/;
//  Explicando o RegEx:
//  a-zA-Z -> O user pode conter todas as letras do alfabeto, maiusculas e minusculas
// \d -> permite numerais (digits)
// \. -> permite pontos finais

function validacao(campo, regEx) {
    if(regEx.test(campo.value)) { 
        campo.className = 'input-valido';
        return true;
    }

    else {
        campo.className = 'input-invalido';
        return false;
    }
}

botaoEnvio.addEventListener('click', (e) => {
    const emailCadastrado = document.querySelector('input');

    if (!(validacao(document.querySelector('input'), padraoEmail))) {
        alert('e-mail inválido! Antes do @ aceitamos até 32 caracteres, incluindo numerais e ponto final. Depois do @ aceitamos até 16 caracteres minusculos e numerais. O final do seu e-mail deve terminar com ".com"');
        e.preventDefault();
    } else {
        console.log('deu certo');
    }
})