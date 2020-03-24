import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioListarComponent } from './funcionario-listar.component';

describe('FuncionarioListarComponent', () => {
  let component: FuncionarioListarComponent;
  let fixture: ComponentFixture<FuncionarioListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
