import addTopico from "./addTopico.js"

const btnAddTopico = document.querySelector('.btnAddTopico')
const topicos = document.querySelector('.topicos')
function adicionarTopico(){

    const topico = addTopico()

    if(topico){
        topicos.append(topico)
    }

}

btnAddTopico.addEventListener('click', adicionarTopico)

document.addEventListener('keydown', (e) => {

    if(e.key === 'Enter'){
        adicionarTopico()
    }

})