import criarLista from "./criarAbaLista.js"
import conteudoTextearea from "./criarAbaTextearea.js"


function criarConteudo(){

    const tituloInfos = document.createElement('div')
    tituloInfos.classList.add('tituloInfos')


    const conteudo = document.createElement('div')
    conteudo.classList.add('conteudo')


    const labelTitulo = document.createElement('label')
    labelTitulo.textContent = "Digite o titulo aqui"
    labelTitulo.classList.add('addTitulo')


    const inputTitulo = document.createElement('input')
    inputTitulo.classList.add('addTitulo')


    const btnTitulo = document.createElement('button')
    btnTitulo.innerHTML = 'Enviar'

    const titulo = document.createElement('h2')
    
    titulo.style.display = 'none'

    btnTitulo.addEventListener('click', () => {
        
        titulo.textContent = inputTitulo.value
        btnTitulo.style.display = 'none'
        labelTitulo.style.display = 'none'
        inputTitulo.style.display = 'none'
        titulo.style.display = 'flex'
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
    conteudo.append(titulo)
    conteudo.append(tituloInfos)
    conteudo.append(btnTitulo)


    tituloInfos.append(labelTitulo)
    tituloInfos.append(inputTitulo)

    
    divTexteareaLista.append(btnLista)
    divTexteareaLista.append(btnTextearea)
    conteudo.append(divTexteareaLista)


    return conteudo
}

export default criarConteudo