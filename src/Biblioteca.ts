import { Livro } from "./Livro";

export class Biblioteca {
  private acervo: Livro[] = [];

  // aqui agente Adicionar livro


  public adicionarLivro(livro: Livro): void {
    this.acervo.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado.`);
  }

  // aqui a gente Registrar empréstimo


  public registrarEmprestimo(codigo: number): void {
    const livro = this.acervo.find(l => l.codigo === codigo);

    if (!livro) {
      console.log("Livro não encontrado.");
      return;
    }

    if (!livro.disponivel) {
      console.log("Livro já emprestado.");
      return;
    }

    livro.disponivel = false;
    console.log(`Livro "${livro.titulo}" emprestado.`);
  }

  // aqui a gente faz uma Consulta de disponibilidade
  public consultarDisponibilidade(codigo: number): boolean {
    const livro = this.acervo.find(l => l.codigo === codigo);

    if (!livro) {
      throw new Error("Livro não encontrado.");
    }

    return livro.disponivel;
  }
}