class Persona {
    constructor(nombre, edad, genero){
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    }

    obtDetalles = () => console.log(this)
}
const Persona1 = new Persona('Juan', 30, 'hombre')
Persona1.obtDetalles()

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso
        this.grupo = grupo
    }

    registrar = () => console.log(this);
}
const Estudiante1 = new Estudiante('Pepe', 20, 'hombre', '2º', 'B')
Estudiante1.registrar()

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero)
        this.asignatura = asignatura
        this.nivel = nivel
    }

    asignar = () => console.log(this);
}
const Profesor1 = new Profesor('María', 40, 'mujer', 'Matemáticas', 'segundo')
Profesor1.asignar()