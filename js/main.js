import addTopico from "./addTopico.js"
const btnAddTopico = document.querySelector('.btnAddTopico')
const topicos = document.querySelector('.topicos')


btnAddTopico.addEventListener('click', () => {
    topicos.append(addTopico())
})