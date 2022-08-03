import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarAlunosComponent } from './cadastrar-alunos/cadastrar-alunos.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { ConsultaAlunosComponent } from './consulta-alunos/consulta-alunos.component';
import { InicioTelaComponent } from './inicio-tela/inicio-tela.component';
import { TurmaVirtualComponent } from './turma-virtual/turma-virtual.component';

const routes: Routes = [
  { path: 'cadastrar', component: CadastrarAlunosComponent },
  { path: 'consultar', component: ConsultaAlunosComponent },
  { path: 'calcular', component: CalcularMediaComponent },
  { path: 'inicio', component: InicioTelaComponent },
  { path: 'turma', component: TurmaVirtualComponent },
  { path: '', redirectTo: 'cadastrar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
