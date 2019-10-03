var range = _.range(1, 91);

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
// console.log(test);
// test.textContent = "hola";
var newNumber = () => {
  var shuffle = _.shuffle(range);
  var popped = shuffle.pop();
  bombo.textContent = popped;
};
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