import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import * as EventEmitter from 'events';


@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

  // Decorador @Input para pasar datos a otros componentes. del padre al hijo
  // @output para enviar del hijo al padre
  @Output() countRadioButtonChange = new EventEmitter<string>();
  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;

  


  radioBTNselec = 'Todos';
  constructor() { 
    this.todos = 0;
    this.masculino = 0;
    this.femenino = 0;
  }

  ngOnInit(): void {
    console.log(this.todos);
  }

  radioChange(): void{
    this.countRadioButtonChange.emit(this.radioBTNselec);
  }

}
