import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  constructor() { }
  fechaInicio: any  = '';
  fechaFin: any  = '';
  ngOnInit(): void {
  }

}
