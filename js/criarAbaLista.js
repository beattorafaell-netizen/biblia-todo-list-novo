
function criarLista() {

    const divLista = document.createElement('div')

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
        
        itemDaListaSpan.innerHTML = lista.value

        const btnEditarItemLista = document.createElement('button')
        btnEditarItemLista.classList.add('btnEditarItemLista')

        btnEditarItemLista.addEventListener('click', () => {
            const novoItemEditado = prompt("Qual o novo nome?")
             itemDaListaSpan.innerHTML = novoItemEditado

        })
    

        divLista.append(itemDaLista)
        divLista.append(itemDaListaSpan)
        divLista.append(btnEditarItemLista)
    })

    divLista.append(labelLista)
    divLista.append(lista)
    divLista.append(btnAddLista)

    return divLista

}

export default criarLista