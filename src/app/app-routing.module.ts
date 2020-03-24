import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FuncionarioListarComponent } from "./funcionario-listar/funcionario-listar.component";
import { CriarFuncionarioComponent } from "./criar-funcionario/criar-funcionario.component";
import { AtualizarFuncionarioComponent } from "./atualizar-funcionario/atualizar-funcionario.component";
import { FuncionarioDetalhesComponent } from "./funcionario-detalhes/funcionario-detalhes.component";

const routes: Routes = [
  { path: "", redirectTo: "funcionario", pathMatch: "full" },
  { path: "funcionarios", component: FuncionarioListarComponent },
  { path: "add", component: CriarFuncionarioComponent },
  { path: "atualizar/:id", component: AtualizarFuncionarioComponent },
  { path: "detalhes/:id", component: FuncionarioDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
