import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Funcionario } from "../funcionario";
import { FuncionarioService } from "../funcionario.service";

@Component({
  selector: "app-funcionario-detalhes",
  templateUrl: "./funcionario-detalhes.component.html",
  styleUrls: ["./funcionario-detalhes.component.css"]
})
export class FuncionarioDetalhesComponent implements OnInit {
  id: number;
  funcionario: Funcionario;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionarioService
  ) {}

  ngOnInit() {
    this.funcionario = new Funcionario();

    this.id = this.route.snapshot.params["id"];

    this.funcionarioService.getFuncionario(this.id).subscribe(
      data => {
        console.log(data);
        this.funcionario = data;
      },
      error => console.log(error)
    );
  }

  list() {
    this.router.navigate(["funcionarios"]);
  }
}
