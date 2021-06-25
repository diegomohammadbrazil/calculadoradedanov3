// Definir dados iniciais

const pessoa = {
    nome: 'Allan Santos',
    sobrenome: 'Gengivão',
    idade: 42,

    doido: true,

    imagemSerio: 'https://cdn.crusoe.com.br/uploads/2020/05/49941920231_e059a473e8_o-700x467.jpg',
    imagemSorriso: 'https://pbs.twimg.com/media/EInf-9uXsAAdraZ.png',
}

// Atualizar dados

const elementoNome = document.getElementById('nome');
const elementoSobrenome = document.getElementById('sobrenome');
const elementoIdade = document.getElementById('idade');

elementoNome.innerText = pessoa.nome;
elementoSobrenome.innerText = pessoa.sobrenome;
elementoIdade.innerText = pessoa.idade;

// Atualizar humor
function atualizarHumor() {
    const elementoImagem = document.getElementById('imagem');
    const blocoHumor = document.getElementById('bloco_humor');

    if (pessoa.doido) {
        elementoImagem.src = pessoa.imagemSorriso;
        blocoHumor.innerText = pessoa.nome + ' tá doido!';
    } else {
        elementoImagem.src = pessoa.imagemSerio;
        blocoHumor.innerText = pessoa.nome + ' tá sério!';
    }
}

atualizarHumor();

// Alterar humor

const botaoAlterarHumor = document.getElementById('alterarHumor');
botaoAlterarHumor.addEventListener('click', function () {
    pessoa.doido = !pessoa.doido;

    atualizarHumor();
});
