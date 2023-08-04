const form = document.getElementById('form-verificar')
const formEx = document.getElementById('form-excluir')
const nome = []
const contatos = []
let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionarContato()
    atualizaTabela()
})

function adicionarContato() {
    const nomeContato = document.getElementById('nome-contato')
    const telContato = document.getElementById('tel-contato')

    if(nome.includes(nomeContato.value)) {
        alert(`O contato: ${nomeContato.value} ja foi adicionado`)
    }else {
        nome.push(nomeContato.value)
        contatos.push(parseFloat(telContato.value))

        let linha = '<tr>'
        linha += `<td>${nomeContato.value}</td>`
        linha += `<td>${telContato.value}</td>`
        linha += `<td><img src="img/verificar.png" alt="verificar"></td>`
        linha += `</tr>`

        linhas += linha
    }


    nomeContato.value = ''
    telContato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

