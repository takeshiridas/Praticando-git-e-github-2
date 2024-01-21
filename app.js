let listaNumSort = [];
let limiteNum = 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1});
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMsgInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e ' + limiteNum + ':');
}

exibirMsgInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let  palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
    let msgTentativas = 'Você acertou em ' + tentativas + ' ' + palavraTentativa + '.';
    if(chute==numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');    
    }
    else {
        exibirTextoNaTela('h1', 'Você errou!');
        if(chute>numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor que ' + chute + '.');
        }
        else {
            exibirTextoNaTela('p', 'O número secreto é maior que ' + chute + '.');
        }
        tentativas++;
        limparCampo();
    }
}

function numeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * limiteNum + 1);
    let qtdNumLista = listaNumSort.length;

    if(qtdNumLista == limiteNum) {
        listaNumSort = [];
    }

    if(listaNumSort.includes(numEscolhido)) {  
        return numeroAleatorio();
    }
    
    else {
        listaNumSort.push(numEscolhido);
        return numEscolhido;
    } 
}
function novoJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}