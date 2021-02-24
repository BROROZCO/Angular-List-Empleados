export class Empleado
{
    legajo: number;
    nombre: string;
    apellido: string;
    sexo: string;
    salario: number;

    constructor(Legajo: number, Nombre: string, Apellido: string, Sexo: string, Salario: number)
    {
        this.legajo = Legajo;
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.sexo = Sexo;
        this.salario = Salario;

    }

}