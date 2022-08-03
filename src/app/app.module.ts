import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConsultaAlunosComponent } from './consulta-alunos/consulta-alunos.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarAlunosComponent } from './cadastrar-alunos/cadastrar-alunos.component';
import { AppRoutingModule } from './app-routing.module';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { InicioTelaComponent } from './inicio-tela/inicio-tela.component';
import { CommonModule } from '@angular/common';
import { TurmaVirtualComponent } from './turma-virtual/turma-virtual.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    ConsultaAlunosComponent,
    CadastrarAlunosComponent,
    CalcularMediaComponent,
    InicioTelaComponent,
    TurmaVirtualComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
