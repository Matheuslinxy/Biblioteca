import { Livro } from "./Livro";
import { Biblioteca } from "./Biblioteca";

// Criando biblioteca
const biblioteca = new Biblioteca();

// aqui agente Cadastrar livros
const livro1 = new Livro(1, "Dom Casmurro", "Machado de Assis");
const livro2 = new Livro(2, "1984", "George Orwell");
const livro3 = new Livro(3, "O Hobbit", "Tolkien");

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

// aqui agente Fazer empréstimo
biblioteca.registrarEmprestimo(2);

// aqui agente Consulta a disponibilidade
try {
  console.log("Livro 2 disponível?", biblioteca.consultarDisponibilidade(2));
  console.log("Livro 1 disponível?", biblioteca.consultarDisponibilidade(1));

  // aqui agente faz um Teste de erro
  console.log(biblioteca.consultarDisponibilidade(999));
} catch (erro) {
  console.log("Erro:", (erro as Error).message);
}