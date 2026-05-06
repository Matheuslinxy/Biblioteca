export class Livro {
  public codigo: number;
  public titulo: string;
  public autor: string;
  public disponivel: boolean;

  constructor(codigo: number, titulo: string, autor: string) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true; // começa disponível
  }
}