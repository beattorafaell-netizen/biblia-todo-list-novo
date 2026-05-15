import criarConteudo from "./addConteudo.js"
import removerItem from "./removerItem.js"

const inputTopico = document.querySelector('.inputTopico')

const principal = document.querySelector('.principal')

function addTopico(){
    if (inputTopico.value.trim() !== "") {      
        const divTopico = document.createElement("div")
        divTopico.classList.add('divItemBruto')

        const topicoItem = document.createElement('li')
        topicoItem.classList.add('topicoItem')
        topicoItem.innerHTML = inputTopico.value

        const btnAddConteudo = document.createElement('button')
        btnAddConteudo.textContent = "🖊"

        const btnRemoveConteudo = document.createElement('button')
        btnRemoveConteudo.textContent = "X"

        btnRemoveConteudo.addEventListener('click', () => {
            removerItem(divTopico, conteudo)
        })

        const conteudo = criarConteudo(inputTopico.value)
        conteudo.style.display = 'none'
        principal.append(conteudo)
        inputTopico.value = ''

        divTopico.addEventListener('click', () =>{
            const todosConteudos = document.querySelectorAll('.conteudo')
            todosConteudos.forEach(item => {
                item.style.display = 'none'
            })
            conteudo.style.display = 'block'

        })

        divTopico.append(topicoItem)
        divTopico.append(btnAddConteudo)
        divTopico.append(btnRemoveConteudo)
        return divTopico
        } else {
            alert('Nao pode tipoco sem valor ')
        } 
}

export default addTopico