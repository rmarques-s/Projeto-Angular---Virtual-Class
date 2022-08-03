import { Component, OnInit } from '@angular/core';
import { Alunos } from '../consulta-alunos/alunos';
import { BoletimServiceService } from '../consulta-alunos/boletim.service';

@Component({
  selector: 'app-turma-virtual',
  templateUrl: './turma-virtual.component.html',
  styleUrls: ['./turma-virtual.component.css'],
})
export class TurmaVirtualComponent implements OnInit {
  constructor(private boletim: BoletimServiceService) {}
  alunos: Alunos[];

  ngOnInit() {
    this.boletim.retornaralunos().subscribe((aluno) => {
      this.alunos = aluno;
    });
  }
}
