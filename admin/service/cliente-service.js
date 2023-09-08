const listaClientes = async () => {
    const resposta = await fetch(`http://localhost:3000/profile`)
    const data = await resposta.json()
    console.log(data)
    return data
}

export const clienteService = {
    listaClientes
}