const listaClientes = async () => {
    const resposta = await fetch(`http://localhost:3000/profile`)

    if (resposta.ok) {
        return await resposta.json()
    } else {
        throw new Error('Não foi possível listar os clientes')
    }
}

const criaCliente = async (nome, email) => {
    try {
        const resposta = await fetch(`http://localhost:3000/profile`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email
            })
        })

        if (resposta.ok) {
            return await resposta.json()
        } else {
            throw new Error('Erro na criação do cliente')
        }
    }
    catch (error) {
        console.error('Erro ao criar o cliente:', error)
        throw error
    }
}

const deletaCliente = async (id) => {
    try {
        const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
            method: 'DELETE',
        })

        if (resposta.ok) {
            return await resposta.json()
        } else {
            throw new Error('Erro na exclusão do cliente')
        }
    }
    catch (error) {
        console.error('Erro ao deletar o cliente:', error)
        throw error
    }
}

const detalhesCliente = async (id) => {
    try {
        const resposta = await fetch(`http://localhost:3000/profile/${id}`)
    
        if (resposta.ok) {
            return await resposta.json()
        } else {
            throw new Error('Erro na exclusão do cliente')
        }
    }
    catch (error) {
        console.error('Erro ao detalhar os dados do cliente:', error)
        throw error
    }
}

const editaCliente = async (id, nome, email) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome,
            email
        })
    })

    if (resposta.ok) {
        return await resposta.json()
    } else {
        throw new Error('Não foi possível editar o cliente')
    }
}

export const clienteService = {
    listaClientes, criaCliente, deletaCliente, detalhesCliente, editaCliente
}