function conteudoTextearea() {
    const divTexatearea = document.createElement('div')
    const texteareaValor = document.createElement('textarea')



    const btnTesteareaAparecer = document.createElement('button')
    btnTesteareaAparecer.innerHTML = "alsdnflasdn"
    btnTesteareaAparecer.addEventListener('click', () => {
        texteareaValor.style.display = 'none'
        btnTesteareaAparecer.style.display = 'none'


        const pTextearea = document.createElement('p')
        pTextearea.innerHTML = texteareaValor.value
        divTexatearea.append(pTextearea)
    })




    divTexatearea.append(texteareaValor)

    divTexatearea.append(btnTesteareaAparecer)

    return divTexatearea
}

export default conteudoTextearea