import criarLista from "./criarAbaLista.js"
import conteudoTextearea from "./criarAbaTextearea.js"


function criarConteudo(inputTopico){

    const tituloInfos = document.createElement('div')
    tituloInfos.classList.add('tituloInfos')


    const h1 = document.createElement('h1')
    h1.textContent = inputTopico


    const conteudo = document.createElement('div')
    conteudo.classList.add('conteudo')


    const labelTitulo = document.createElement('label')
    labelTitulo.textContent = "Digite o titulo aqui"
    labelTitulo.classList.add('addTitulo')


    const inputTitulo = document.createElement('input')
    inputTitulo.classList.add('addTitulo')


    const btnTitulo = document.createElement('button')
    btnTitulo.innerHTML = 'Enviar'

    btnTitulo.addEventListener('click', () => {
        const titulo = document.createElement('h2')
        titulo.textContent = inputTitulo.value
        conteudo.append(titulo)
        btnTitulo.style.display = 'none'
        labelTitulo.style.display = 'none'
        inputTitulo.style.display = 'none'
    })

    const divTexteareaLista = document.createElement('div')
    divTexteareaLista.classList.add('ladoAlado')    


    const btnLista = document.createElement('button')
    btnLista.innerHTML = "Listas"

    btnLista.addEventListener('click', () => {
        conteudo.append(criarLista())
    })


    const btnTextearea = document.createElement('button')
    btnTextearea.innerHTML = "Textearea"

    btnTextearea.addEventListener('click', () => {
        conteudo.append(conteudoTextearea())
    })


    conteudo.append(tituloInfos)
    conteudo.append(btnTitulo)
    conteudo.append(divTexteareaLista)


    tituloInfos.append(h1)
    tituloInfos.append(labelTitulo)
    tituloInfos.append(inputTitulo)

    
    divTexteareaLista.append(btnLista)
    divTexteareaLista.append(btnTextearea)


    return conteudo
}

export default criarConteudo