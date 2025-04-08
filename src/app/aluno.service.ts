import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: string[] = [];

  adicionarAluno(nome: string) {
    if (nome.trim()) {
      this.alunos.push(nome.trim());
    }
  }

  listarAlunos(): string[] {
    return this.alunos;
  }
}
