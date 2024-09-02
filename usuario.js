export class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  fazerLogin(email, senha) {
    if (this.email === email && this.senha === senha) {
      return "Login efetuado";
    } else {
      return "Email ou senha incorretos";
    }
  }
}
