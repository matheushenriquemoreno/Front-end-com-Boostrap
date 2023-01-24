var Destaques = [
  {
    autor: "Obra Artur",
    destaque: "Realizada 16/12/2021",
    urlImage: "../img/g_2.jpg",
  },
  {
    autor: "Obra abstrata",
    destaque: "Realizada 11/08/2022",
    urlImage: "../img/g_3.jpg",
  },
  {
    autor: "Obra Paulo",
    destaque: "Realizada 16/12/2021",
    urlImage: "../img/g_4.jpg",
  },
  {
    autor: "Gravite metro",
    destaque: "Realizada 01/05/2020",
    urlImage: "../img/g_5.jpg",
  },
  {
    autor: "Grafite centro cidade ",
    destaque: "Realizada 25/08/2021",
    urlImage: "../img/g_6.jpg",
  },
];

var Destaqueshtml = Destaques.map((destaque) => {
  return `
    <div class="col-md-6">
        <img class="img-destaque center-image img-fluid" src="${destaque.urlImage}"></img>
        <h3>${destaque.autor}</h3>
        <p class="secondary-color">${destaque.destaque}</p>
        <a href="#" class="btn btn-dark">Detalhes</a>
    </div>
`;
});

Destaqueshtml.forEach(
  (html) => (document.querySelector("#Destaques").innerHTML += html)
);

/*
        <div class="col-12 col-md-6">
          <img class="img-destaque center-image" src="./img/g_2.jpg"></img>
          <h3>Obra de Artur</h3>
          <p class="secondary-color">Realizada: 26/01/2018</p>
          <a href="#" class="btn btn-dark">Detalhes</a>
        </div>
*/
