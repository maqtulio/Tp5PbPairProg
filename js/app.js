var filmes = [
  "20988-cartaz.jpg",
  "22678-cartaz.jpg",
  "22726-cartaz.jpg",
  "22784-cartaz.jpg",
  "22786-cartaz.jpg",
  "22805-cartaz.jpg",
  "22885-cartaz.jpg",
  "22947-cartaz.jpg",
  "23004-cartaz.jpg"
];
var eventos = [
  "22049-cartaz.jpg",
  "22050-cartaz.jpg",
  "22423-cartaz.jpg",
  "22583-cartaz.jpg",
  "22633-cartaz.jpg",
  "22794-cartaz.jpg",
  "22919-cartaz.jpg",
  "22950-cartaz.jpg",
  "22999-cartaz.jpg"
];
var shows = [
  "22747-cartaz.jpg",
  "22749-cartaz.jpg",
  "22757-cartaz.jpg",
  "22775-cartaz.jpg",
  "22776-cartaz.jpg",
  "22778-cartaz.jpg",
  "22779-cartaz.jpg",
  "22780-cartaz.jpg",
  "22895-cartaz.jpg"
];

class card {
  constructor(src, tipo) {
    this.img = src;
    this.tipo = tipo;
    this.html = ` <div class="col col-3">
    <div class="box">
    <img src="${this.img}">
    </div>
  </div>`;
  }
}
var cards = [];

filmes.forEach(filme => {
  cards.push(new card(`./img/Filmes/${filme}`, "filme"));
});
eventos.forEach(evento => {
  cards.push(new card(`./img/Eventos/${evento}`, "evento"));
});
shows.forEach(show => {
  cards.push(new card(`./img/Shows/${show}`, "show"));
});
cards.forEach(card => {
  switch (card.tipo) {
    case "filme":
      $("#filmesContent").before(card.html);
      break;
    case "evento":
      $("#eventosContent").before(card.html);
      break;
    case "show":
      $("#showsContent").before(card.html);
      break;
    default:
      break;
  }
});
