import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CriarFuncionarioComponent } from "./criar-funcionario/criar-funcionario.component";
import { FuncionarioListarComponent } from "./funcionario-listar/funcionario-listar.component";
import { FuncionarioDetalhesComponent } from "./funcionario-detalhes/funcionario-detalhes.component";
import { AtualizarFuncionarioComponent } from "./atualizar-funcionario/atualizar-funcionario.component";

@NgModule({
  declarations: [
    AppComponent,
    CriarFuncionarioComponent,
    FuncionarioListarComponent,
    FuncionarioDetalhesComponent,
    AtualizarFuncionarioComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
