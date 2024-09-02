import Filme from "./filme.js";

// Definição da classe Series que estende Filme
export default class Series extends Filme {
  constructor(nome, nomeSerie, duracao, sinopse, ano, episodio, temporada) {
    super(nome, duracao, sinopse, ano);
    this.nomeSerie = nomeSerie;
    this.episodio = episodio;
    this.temporada = temporada;
  }

  assistir() {
    return `Assistindo à série ${this.nomeSerie}, temporada ${this.temporada}, episodio ${this.episodio}. Tempo restante -> ${this.duracao} minutos`;
  }

  compartilhar() {
    return `Estou assistindo à série ${this.nomeSerie}, temporada ${this.temporada}, episodio ${this.episodio}. Sinopse: ${this.sinopse}. Foi lançada em ${this.ano}.`;
  }
}

// Vetor Series
let vetorSeries = [
  {
    id: "Série 1",
    nome: "Breaking Bad",
    nomeSerie: "Breaking Bad",
    duracao: 45,
    sinopse:
      "Um professor de química se torna um fabricante de metanfetaminas após descobrir que tem câncer terminal.",
    ano: 2008,
    episodio: 62,
    temporada: 5,
  },
  {
    id: "Série 2",
    nome: "Stranger Things",
    nomeSerie: "Stranger Things",
    duracao: 50,
    sinopse:
      "Em uma cidade pequena, crianças enfrentam mistérios sobrenaturais envolvendo experiências secretas do governo e forças sobrenaturais.",
    ano: 2016,
    episodio: 25,
    temporada: 3,
  },
  {
    id: "Série 3",
    nome: "Game of Thrones",
    nomeSerie: "Game of Thrones",
    duracao: 60,
    sinopse:
      "Nove famílias nobres lutam pelo controle sobre as terras míticas de Westeros, enquanto um antigo inimigo retorna depois de estar adormecido por milhares de anos.",
    ano: 2011,
    episodio: 73,
    temporada: 8,
  },
  {
    id: "Série 4",
    nome: "Friends",
    nomeSerie: "Friends",
    duracao: 22,
    sinopse:
      "A vida, amores e risos de seis amigos vivendo em Nova York enquanto navegam pelas complexidades da vida e dos relacionamentos.",
    ano: 1994,
    episodio: 236,
    temporada: 10,
  },
  {
    id: "Série 5",
    nome: "The Mandalorian",
    nomeSerie: "The Mandalorian",
    duracao: 35,
    sinopse:
      "As viagens do mandaloriano em uma galáxia longe, longe, enquanto transportava 'A Criança' para o seu lar.",
    ano: 2019,
    episodio: 16,
    temporada: 2,
  },
  {
    id: "Série 6",
    nome: "The Crown",
    nomeSerie: "The Crown",
    duracao: 60,
    sinopse:
      "A vida da rainha Elizabeth II enquanto ela navega pelas complexidades políticas do reinado e os desafios pessoais.",
    ano: 2016,
    episodio: 40,
    temporada: 4,
  },
  {
    id: "Série 7",
    nome: "NCIS",
    nomeSerie: "NCIS",
    duracao: 45,
    sinopse:
      "Um time de agentes especiais investiga crimes envolvendo a Marinha dos Estados Unidos e o Corpo de Fuzileiros Navais.",
    ano: 2003,
    episodio: 400,
    temporada: 19,
  },
  {
    id: "Série 8",
    nome: "Boa Sorte, Charlie!",
    nomeSerie: "Boa Sorte, Charlie!",
    duracao: 22,
    sinopse:
      "A família Duncan enfrenta as alegrias e desafios de criar um bebê enquanto documenta tudo em vídeo para sua filha mais nova, Charlie.",
    ano: 2010,
    episodio: 100,
    temporada: 4,
  },
  {
    id: "Série 9",
    nome: "Hora de Aventura",
    nomeSerie: "Hora de Aventura",
    duracao: 11,
    sinopse:
      "As aventuras de Jake, um cachorro com poderes mágicos, e Finn, um garoto humano, enquanto exploram a terra de Ooo e enfrentam vilões.",
    ano: 2010,
    episodio: 283,
    temporada: 10,
  },
  {
    id: "Série 10",
    nome: "RuPaul's Drag Race",
    nomeSerie: "RuPaul's Drag Race",
    duracao: 60,
    sinopse:
      "Concurso de drag queens apresentado por RuPaul em busca da próxima grande estrela drag dos Estados Unidos.",
    ano: 2009,
    episodio: 187,
    temporada: 14,
  },
];

// Transformando cada objeto do vetor em uma instância da classe Series
vetorSeries = vetorSeries.map((serie) => {
  return new Series(
    serie.nome,
    serie.nomeSerie,
    serie.duracao,
    serie.sinopse,
    serie.ano,
    serie.episodio,
    serie.temporada
  );
});

export { vetorSeries }; // Exportando o vetor de séries
