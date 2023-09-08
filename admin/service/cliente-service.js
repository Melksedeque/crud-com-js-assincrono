const listaClientes = async () => {
    const resposta = await fetch(`http://localhost:3000/profile`)
    const data = await resposta.json()

    return data
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
            return await resposta.json();
        } else {
            throw new Error('Erro na criação do cliente');
        }
    }
    catch (error) {
        console.error('Erro ao criar o cliente:', error);
        throw error;
    }
}

export const clienteService = {
    listaClientes, criaCliente
}