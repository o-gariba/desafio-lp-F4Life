const botaoEnvio = document.querySelector('button');
const form = document.getElementById('form');
const elementoError = document.getElementById('error');

const padraoEmail = /^([a-zA-Z0-9\.]{1,32})@([a-z0-9]{1,16})\.(com)$/;

function validacaoEmail(campo, regEx) {
    if(regEx.test(campo.value)) { 
        return true;
    } else {
        return false;
    }
}


form.addEventListener('submit', (e) => {
    let mensagem = [];
    const emailCadastrado = document.querySelector('input');
    const tamanhoMensagem = document.querySelector('textarea').value.length;

    if (!(validacaoEmail(emailCadastrado, padraoEmail))) {
        mensagem.push('Erro no envio: Endereço de mail inválido');
    } else {
        if (tamanhoMensagem) {
            const user = emailCadastrado.value.split('@');
            mensagem.push(`Obrigado pelo contato, ${user[0]}!`);
        } else mensagem.push('Erro no envio: Insira uma mensagem');
    }

    if (mensagem.length > 0) {
        e.preventDefault();
        form.reset();
        elementoError.innerText = mensagem.join();
        // devolve o array (mensagem) como string
    }

})