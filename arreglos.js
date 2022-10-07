personas = [
    persona1 = {
        nombre: 'Israel Mendez',
        edad: 24,
        genero: 'Masculino',
        estudios: ['Primaria', 'Secundaria', 'Preparatoria', 'Universidad', 'Maestria']
    },
    persona2 = {
        nombre: 'Maria Mondragon',
        edad: 36,
        genero: 'Femenino',
        estudios: ['Primaria', 'Secundaria', 'Preparatoria']
    },
    persona3 = {
        nombre: 'Victor Lopez',
        edad: 39,
        genero: 'Masculino',
        estudios: ['Primaria', 'Secundaria', 'Preparatoria', 'Universidad']
    },
    persona4 = {
        nombre: 'Cristina Vitorez',
        edad: 69,
        genero: 'Femenino',
        estudios: ['Primaria']
    },
    persona5 = {
        nombre: 'Eduardo Mondragon',
        edad: 15,
        genero: 'Masculino',
        estudios: ['Primaria', 'Secundaria']
    }
]

personas.forEach(element => {
    if(element.estudios.includes('Universidad') && (element.edad <25)){
        console.log(element)
    }
})
