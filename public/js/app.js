document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelector('.lista-conocimientos')

    if(skills){
        skills.addEventListener('click', agregarSkill)
    }
})


const skills = new Set()
const agregarSkill = (e) => {
    if(e.target.tagName === 'LI'){
        if(e.target.classList.contains('activo')){
            // quitar del set y la clase
            skills.delete(e.target.textContent)
            e.target.classList.remove('activo')
        }else{
            //agregarlo al set y agregar clase
            skills.add(e.target.textContent)
            e.target.classList.add('activo')
        }
    }

    const skillsArray = [...skills]
    document.querySelector('#skills').value = skillsArray
}