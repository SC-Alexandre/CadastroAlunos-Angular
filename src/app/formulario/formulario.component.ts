import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nomeAluno: string = '';
  listaDeAlunos: string[] = [];

  salvar() {
    if (this.nomeAluno.trim()) {
      this.listaDeAlunos.push(this.nomeAluno);
      this.nomeAluno = '';
    }
  }
}
