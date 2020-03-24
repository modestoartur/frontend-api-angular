import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarFuncionarioComponent } from './atualizar-funcionario.component';

describe('AtualizarFuncionarioComponent', () => {
  let component: AtualizarFuncionarioComponent;
  let fixture: ComponentFixture<AtualizarFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
