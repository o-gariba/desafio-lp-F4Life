const botaoEnvio = document.querySelector('button');

const padraoEmail = /^([a-zA-Z0-9\.]{1,32})@([a-z0-9]{1,16})\.(com)$/;
//  Explicando o RegEx:
//  a-zA-Z -> O user pode conter todas as letras do alfabeto, maiusculas e minusculas
// \d -> permite numerais (digits)
// \. -> permite pontos finais

function validacaoEmail(campo, regEx) {
    if(regEx.test(campo.value)) { 
        campo.className = 'input-valido';
        return true;
    }

    else {
        campo.className = 'input-invalido';
        return false;
    }
}

function olaUser(email) {
    const emailDividido = email.value.split("@");
    const user = emailDividido[0];

    return alert(`Obrigado pelo contato, ${user}!`);
}

botaoEnvio.addEventListener('click', (e) => {
    const emailCadastrado = document.querySelector('input');
    const mensagemEnviada = document.querySelector('textarea').value.length;

    if (!(validacaoEmail(emailCadastrado, padraoEmail))) {
        alert('Erro no envio: Endereço de mail inválido');
        e.preventDefault();
    } else {
        if (mensagemEnviada) {
            console.log('deu certo');
            olaUser(emailCadastrado);
        } else {
            alert('Erro no envio: Insira uma mensagem');
            e.preventDefault();
        }
    }
})