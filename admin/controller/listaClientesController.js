import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`

    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id

    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (e) => {
    let btnDeletar = e.target.className === 'botao-simples botao-simples--excluir'

    if(btnDeletar) {
        const linhaCliente = e.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.deletaCliente(id)
    }
})

clienteService.listaClientes()
.then(data => {
    if (Array.isArray(data)) {
        data.forEach(e => {
            tabela.appendChild(criaNovaLinha(e.nome, e.email, e.id))
        })
    } else {
        console.error("Os dados retornados não são uma matriz.")
    }
})
.catch(error => {
    console.error("Erro ao obter a lista de clientes: ", error)
})