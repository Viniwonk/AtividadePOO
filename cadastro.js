import { Usuario } from "./usuario.js";

export class Cadastro {
  constructor() {
    this.usuarios = [];
  }

  cadastrarUsuario(nome, email, senha) {
    const novoUsuario = new Usuario(nome, email, senha);
    this.usuarios.push(novoUsuario);
  }

  listarUsuarios() {
    return this.usuarios;
  }

  encontrarUsuario(email) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}
