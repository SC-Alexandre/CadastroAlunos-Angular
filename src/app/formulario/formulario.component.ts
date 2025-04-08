import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../aluno.service';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ListaComponent],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  nomeAluno: string = '';

  constructor(private alunoService: AlunoService) {}

  salvar() {
    this.alunoService.adicionarAluno(this.nomeAluno);
    this.nomeAluno = '';
  }
}
