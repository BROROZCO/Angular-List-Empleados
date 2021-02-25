import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/modelo/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[] = [
    // Las propiedades van entre las llaves
    {legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino',salario: 25000},
    {legajo: 2, nombre: 'Carlos', apellido: 'Membreño', sexo: 'Masculino',salario: 5000},
    {legajo: 3, nombre: 'Juana', apellido: 'Martinez', sexo: 'Femenino',salario: 18500},
    {legajo: 4, nombre: 'Bryan', apellido: 'Orozco', sexo: 'Masculino',salario: 13000},
    {legajo: 5, nombre: 'Alexa', apellido: 'Yoconda', sexo: 'Femenino',salario: 9800}
  ]
  constructor() { }

  radioBTNselec = 'Todos';

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number
  {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number
  {
    // caputarar filtrando por el atributo sexo  a todos los femeninos
    return this.listEmpleados.filter( list => list.sexo == 'Femenino').length;
  }

  obtenerTotalMasculinos(): number
  {
    // caputarar filtrando por el atributo sexo  a todos los femeninos
    return this.listEmpleados.filter( list_ => list_.sexo == 'Masculino').length;
  }

  empleadoRadioButon(radioButtonselec: string): void
  {
    this.radioBTNselec = radioButtonselec;
  }

}
