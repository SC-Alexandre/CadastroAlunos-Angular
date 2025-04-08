import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html'
})
export class ListaComponent {
  constructor(private alunoService: AlunoService) {}

  get alunos(): string[] {
    return this.alunoService.listarAlunos();
  }
}
