(function() {
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
    }
    setId(id) {
      this.id = id;
    }
    getHtml() {
      return `<div class="col col-3">
        <div class="box"><a href="#">
        <img src="${this.img}" title="imagem ${this.tipo} ${this.id}" alt="imagem ${this.tipo} ${this.id}"></a>
        </div>
      </div>`;
    }
  }
  var cards = [];
  let i = 0;
  filmes.forEach(filme => {
    let item = new card(`./img/Filmes/${filme}`, "filme");
    item.setId(i);
    i += 1;
    cards.push(item);
  });
  eventos.forEach(evento => {
    let item = new card(`./img/Eventos/${evento}`, "evento");
    item.setId(i);
    i += 1;
    cards.push(item);
  });
  shows.forEach(show => {
    let item = new card(`./img/Shows/${show}`, "show");
    item.setId(i);
    i += 1;
    cards.push(item);
  });

  cards.forEach(card => {
    switch (card.tipo) {
      case "filme":
        $("#filmesContent").before(card.getHtml());
        break;
      case "evento":
        $("#eventosContent").before(card.getHtml());
        break;
      case "show":
        $("#showsContent").before(card.getHtml());
        break;
      default:
        break;
    }
  });
})();
