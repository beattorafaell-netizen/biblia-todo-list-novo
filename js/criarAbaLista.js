

function criarLista() {

    const divLista = document.createElement('div')

    const InputTitutoLista = document.createElement('input')

    const btnInputTitutoLista = document.createElement('button')

    btnInputTitutoLista.addEventListener('click', () => {

        InputTitutoLista.style.display = 'none'
        btnInputTitutoLista.style.display = 'none'

        const titulo = document.createElement('h1')
        titulo.classList.add('tituloLista')
        titulo.textContent = InputTitutoLista.value

        const labelLista = document.createElement('label')
        labelLista.textContent = "Digite aqui um item da sua lista:"
        labelLista.classList.add('itemListaBusca')


        const lista = document.createElement('input')
        lista.type = 'text'
        lista.classList.add('itemListaBusca')

        const btnAddLista = document.createElement('button')
        btnAddLista.textContent = "Enviar"


        btnAddLista.addEventListener('click', () => {

            

            

            const itemDaLista = document.createElement('input')
            itemDaLista.classList.add("itemDaLista")
            itemDaLista.type = 'checkbox'


            const itemDaListaSpan = document.createElement('span')
            itemDaLista.classList.add('itemDaListaSpan')
            
            itemDaListaSpan.textContent = lista.value

            const btnEditarItemLista = document.createElement('button')
            btnEditarItemLista.classList.add('btnEditarItemLista')

            btnEditarItemLista.addEventListener('click', () => {
                const novoItemEditado = prompt("Qual o novo nome?")
                itemDaListaSpan.textContent = novoItemEditado

            })
        
            
            divLista.append(itemDaLista)
            divLista.append(itemDaListaSpan)
            divLista.append(btnEditarItemLista)
            
        })
        divLista.append(titulo)
        divLista.append(labelLista)
        divLista.append(lista)
        divLista.append(btnAddLista)

    })

    divLista.append(InputTitutoLista)    
    divLista.append(btnInputTitutoLista)
    return divLista

}

export default criarLista