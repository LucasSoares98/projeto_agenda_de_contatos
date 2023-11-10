const form = document.querySelector('#form-contatos')
const agenda_contatos = []
const agenda_numeros = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha(){
    const Nome = document.querySelector('#nome')
    const Numero = document.querySelector('#numero')

    if(agenda_contatos.includes(Nome.value) || agenda_numeros.includes(Numero.value)){
        alert(`Esse contato já foi inserido!`)
    } else {
        agenda_contatos.push(Nome.value)
        agenda_numeros.push(Numero.value)

        let linha = '<tr>'
        linha += `<td> ${Nome.value} </td>`
        linha += `<td> ${Numero.value} </td>`
        linha += '</tr>'
        
        linhas += linha
    }    

    Nome.value = ''
    Numero.value = ''
    
}

function atualizaTabela(){
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = linhas
}

