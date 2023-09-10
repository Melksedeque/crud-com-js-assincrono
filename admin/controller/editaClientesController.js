import { clienteService } from '../service/cliente-service.js'

(async () => {
    const url = new URL(window.location)
    const id = url.searchParams.get('id')
    
    const inputNome = document.querySelector('input[data-nome]')
    const inputEmail = document.querySelector('input[data-email]')
    
    try {
        const dados = await clienteService.detalhesCliente(id)
        inputNome.value = dados.nome
        inputEmail.value = dados.email
    }
    catch (error) {
        console.log(error)
        window.location.href = '../telas/erro.html'
    }
    
    const formulario = document.querySelector('[data-form]')
    
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault()
        try {
            await clienteService.editaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = '../telas/edicao_concluida.html'
        }
        catch (error) {
            console.log(error)
            window.location.href = '../telas/erro.html'
        }
    })
})()
