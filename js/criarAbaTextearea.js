

function conteudoTextearea() {

    const divTexatearea = document.createElement('div')
    divTexatearea.classList.add('divTextearea')

    const labelTituloTextearea = document.createElement('label')
    labelTituloTextearea.classList.add('labelTituloTextearea')
    labelTituloTextearea.textContent = "Digite aqui seu titulo da sessão"

    
    
    const inputTituloTextearea = document.createElement('input')
    inputTituloTextearea.classList.add('inputTituloTextearea')

    inputTituloTextearea.addEventListener('click', () => {
        tituloTextearea.textContent = inputTituloTextearea.value
        labelTituloTextearea.style.display = 'none'
        labelTituloTextearea.style.display = 'none'
    })

    
    const tituloTextearea = document.createElement('h2')
    tituloTextearea.classList.add('tituloTextearea')


    const texteareaValor = document.createElement('textarea')
    texteareaValor.classList.add('texteareaValor')


    const btnTesteareaAparecer = document.createElement('button')
    btnTesteareaAparecer.classList.add('btnTesteareaAparecer')
    btnTesteareaAparecer.innerHTML = "Salvar"


    btnTesteareaAparecer.addEventListener('click', () => {
        texteareaValor.style.display = 'none'
        btnTesteareaAparecer.style.display = 'none'


        const pTextearea = document.createElement('p')
        pTextearea.innerHTML = texteareaValor.value


        divTexatearea.append(pTextearea)
    })


    divTexatearea.append(labelTituloTextearea)
    divTexatearea.append(inputTituloTextearea)
    divTexatearea.append(tituloTextearea)
    divTexatearea.append(texteareaValor)
    divTexatearea.append(btnTesteareaAparecer)

    return divTexatearea
}

export default conteudoTextearea