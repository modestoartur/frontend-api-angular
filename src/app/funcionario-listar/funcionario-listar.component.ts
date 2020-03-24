import { Component, OnInit } from "@angular/core";
import { Funcionario } from "../funcionario";
import { Observable } from "rxjs";
import { FuncionarioService } from "../funcionario.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-funcionario-listar",
  templateUrl: "./funcionario-listar.component.html",
  styleUrls: ["./funcionario-listar.component.css"]
})
export class FuncionarioListarComponent implements OnInit {
  funcionarios: Observable<Funcionario[]>;

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.funcionarios = this.funcionarioService.getFuncionariosList();
  }

  deleteEmployee(id: number) {
    this.funcionarioService.deleteFuncionario(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  funcionarioDetalhes(id: number) {
    this.router.navigate(["detalhes", id]);
  }
}
