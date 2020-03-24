import { Component, OnInit } from "@angular/core";
import { Funcionario } from "../funcionario";
import { FuncionarioService } from "../funcionario.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-criar-funcionario",
  templateUrl: "./criar-funcionario.component.html",
  styleUrls: ["./criar-funcionario.component.css"]
})
export class CriarFuncionarioComponent implements OnInit {
  funcionario: Funcionario = new Funcionario();
  submitted = false;

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  ngOnInit() {}

  newEmployee(): void {
    this.submitted = false;
    this.funcionario = new Funcionario();
  }

  save() {
    this.funcionarioService.createFuncionario(this.funcionario).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.funcionario = new Funcionario();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(["/funcionarios"]);
  }
}
