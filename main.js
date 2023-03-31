const form = document.getElementById('form-agenda');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotalFinal();

});

function adicionaLinha() {
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputTelefoneAgenda = document.getElementById('telefone-agenda');

    contatos.push(inputNomeAgenda.value);
    telefones.push(inputTelefoneAgenda.value);
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td>${inputTelefoneAgenda.value}</td>`;
    linha += `</tr>`;
    
    linhas += linha;

    inputNomeAgenda.value = '';
    inputTelefoneAgenda.value = '';
};

function atualizaTabela() {  
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function atualizaTotalFinal() {
    const mediaFinal = calculaTotalFinal();

    document.getElementById('total-usuarios-cadastrados').innerHTML = mediaFinal;

}

function calculaTotalFinal() {
    let somaDosContatos = 0;

    for (let i = 0; i < contatos.length; i++) {
        somaDosContatos += 1;
    }

    return somaDosContatos
}