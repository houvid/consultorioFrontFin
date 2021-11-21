import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import {MatDialog} from '@angular/material/dialog';
import {NewEventComponent} from './new-event/new-event.component';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public events: any[];
  public options: any;

  constructor(public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaulDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false

    };
    this.events = [{
    title: 'Evento 1',
      start: new Date(),
      description: 'Evento 1'
    },
      {
        title: 'Evento 2',
        start: new Date( new Date().getTime() + 6400000),
        description: 'Evento 2'
      },
      {
        title: 'Evento 3',
        start: new Date(new Date().getTime() + 6400000 * 2),
        end: new Date(new Date().getTime() + 6400000 * 3),
        description: 'Evento 3'
      }
    ];
  }
  dialogAsig(): void {
    this.dialog.open(NewEventComponent, {
      width: '800px',
      height: '800px;',
    });
  }

}
