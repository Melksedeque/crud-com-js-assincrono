const criaNovaLinha = (nome, email) => {
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
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

const listaClientes = async () => {
    const resposta = await fetch(`http://localhost:3000/profile`)
    console.log(resposta.json())
    return await resposta.json()
}

listaClientes()
.then(data => {
    if (Array.isArray(data)) {
        data.forEach(e => {
            tabela.appendChild(criaNovaLinha(e.nome, e.email))
        })
    } else {
        console.error("Os dados retornados não são uma matriz.")
    }
})
.catch(error => {
    console.error("Erro ao obter a lista de clientes: ", error)
})

