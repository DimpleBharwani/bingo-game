var range = _.range(1, 91); //crea un rango del 1 al 90

// var dom = {
//   button: ,
//   bombo: ,
// }
// var datos = {
//   playerCard: 
// }

var button = document.querySelector("#button");
var bombo = document.querySelector("#numbombo");
var test = document.querySelector("#test");
var cartones = document.querySelectorAll(".carton");
var findBola = document.querySelectorAll(".num" + newNumber);


// console.log(test);
// test.textContent = "hola";

//numero para el bombo
var newNumber = () => {
  var shuffle = _.shuffle(range);
  var popped = shuffle.pop();
  bombo.textContent = popped;
};

//al hacer click saca el numero
button.addEventListener("click", newNumber);
const createCard = () => {
  var shuffle = _.shuffle(range);
  for (var i = 0; i < 75; i++) {
    shuffle.pop();
  }
  return shuffle;
};
// var checkNumber = () => {
//   var numBombo = newNumber();
//   if numBombo = 
// }

//
var showCard = (carton) => {
  var card = createCard(); //array shuffle de 15e
  for (var i = 0; i < card.length; i++) {
    var div = document.createElement('div');
    div.className = 'num num' + card[i];
    div.textContent = card[i];
    carton.appendChild(div);
  }
}
cartones.forEach(carton => {
  showCard(carton);
})


  for (var i=0; i < findBola.length; i++) {
    findBola[i].classList.add("tachado");
    _.pull(carton, newNumber);
  }
