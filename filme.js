export default class Filme {
  constructor(nome, duracao, sinopse, ano) {
    this.nome = nome;
    this.duracao = duracao;
    this.sinopse = sinopse;
    this.ano = ano;
  }

  compartilhar() {
    return `Estou assistindo o filme ${this.nome} que conta a seguinte história: ${this.sinopse}. Foi lançado em ${this.ano} e tem duração de ${this.duracao} minutos.`;
  }

  assistir() {
    return `Assistindo o filme ${this.nome}. Tempo restante -> ${this.duracao} minutos`;
  }
}

// Vetor de filmes definido anteriormente
let vetorFilmes = [
  {
    id: "Filme 1",
    nome: "Titanic",
    duracao: 195,
    sinopse: "Um romance épico sobre o trágico naufrágio do RMS Titanic.",
    ano: 1997,
  },
  {
    id: "Filme 2",
    nome: "Interestelar",
    duracao: 169,
    sinopse:
      "Um grupo de exploradores faz uso de um buraco de minhoca descoberto recentemente para superar as limitações de viagem espacial humana e conquistar as vastas distâncias envolvidas em uma jornada interestelar.",
    ano: 2014,
  },
  {
    id: "Filme 3",
    nome: "O Poderoso Chefão",
    duracao: 175,
    sinopse:
      "A saga de uma família ítalo-americana de crime organizado no pós-guerra em Nova York.",
    ano: 1972,
  },
  {
    id: "Filme 4",
    nome: "Matrix",
    duracao: 136,
    sinopse:
      "Um hacker descobre a verdade por trás da realidade percebida e sua participação na guerra contra seus controladores.",
    ano: 1999,
  },
  {
    id: "Filme 5",
    nome: "Avatar",
    duracao: 162,
    sinopse:
      "Um ex-fuzileiro naval paraplégico é enviado a Pandora em uma missão única, mas se torna parte da luta por sobrevivência do planeta.",
    ano: 2009,
  },
  {
    id: "Filme 6",
    nome: "Batman: O Cavaleiro das Trevas",
    duracao: 152,
    sinopse:
      "Quando a ameaça conhecida como Coringa emerge de seu passado misterioso, ele causa caos e terror em Gotham.",
    ano: 2008,
  },
  {
    id: "Filme 7",
    nome: "A Origem",
    duracao: 148,
    sinopse:
      "Um ladrão que rouba segredos corporativos por meio do uso da tecnologia de compartilhamento de sonhos está dado a tarefa de plantar uma ideia na mente de um CEO.",
    ano: 2010,
  },
  {
    id: "Filme 8",
    nome: "Vingadores: Ultimato",
    duracao: 181,
    sinopse:
      "Depois dos eventos devastadores de Vingadores: Guerra Infinita, o universo está em ruínas. Com a ajuda dos aliados restantes, os Vingadores se reúnem mais uma vez para reverter as ações de Thanos e restaurar o equilíbrio do universo.",
    ano: 2019,
  },
  {
    id: "Filme 9",
    nome: "Jurassic Park",
    duracao: 127,
    sinopse:
      "Durante um fim de semana em uma ilha remota, os dinossauros clonados de um magnata escapam de seu confinamento e começam a caçar os visitantes.",
    ano: 1993,
  },
  {
    id: "Filme 10",
    nome: "Gladiador",
    duracao: 155,
    sinopse:
      "Um ex-general romano se vinga do imperador corrupto que assassinou sua família e enviou-o à escravidão.",
    ano: 2000,
  },
];

// Transformando cada objeto do vetor em uma instância da classe Filme
vetorFilmes = vetorFilmes.map((filme) => {
  return new Filme(filme.nome, filme.duracao, filme.sinopse, filme.ano);
});

export { vetorFilmes };
