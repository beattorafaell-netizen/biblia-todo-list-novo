
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
        const itemDaListaSpan = document.createElement('span')
        itemDaLista.type = 'checkbox'
        itemDaListaSpan.innerHTML = lista.value
        
        itemDaLista.classList.add('itemLista')
        divLista.append(itemDaLista)
        divLista.append(itemDaListaSpan)
    })

    divLista.append(labelLista)
    divLista.append(lista)
    divLista.append(btnAddLista)

    return divLista

}

export default criarLista