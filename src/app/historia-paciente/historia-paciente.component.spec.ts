import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaPacienteComponent } from './historia-paciente.component';

describe('HistoriaPacienteComponent', () => {
  let component: HistoriaPacienteComponent;
  let fixture: ComponentFixture<HistoriaPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
