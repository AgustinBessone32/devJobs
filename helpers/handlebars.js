module.exports = {
    seleccionarSkills: (seleccionadas = [], opciones) => {
        skills =[
            'HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'JQuery', 'Node', 'Angular', 'VueJS', 'ReactJS',
            'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python',
            'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', 'MVC', 'SASS', 'WordPress'
        ]

        let html =''
        skills.forEach(skill => {
            html += `
                <li>${skill}</li>
            `
        })

        return opciones.fn().html = html
    }
}