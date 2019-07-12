
var dwarves = ["Doc", "Dopey","Bashful", "Grumpy"];

function dwarfRollCall(dwarves) {
  var array = [];
for (var i = 0; i < dwarves.length; i++){
 array.push(i + 1 +". "+ dwarves[i]+ " ");
}
return array.join("");
}
dwarfRollCall(dwarves);

planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

function summonCaptainPlanet(planeteerCalls){
 return planeteerCalls.map(x => x.toUpperCase()+"!");
}
shortWords = ["wind", "fire"];
assortedWords = ["earth", "wind", "heart", "fire"];

function longPlaneteerCalls(words) {
  for(var i = 0; i< words.length; i ++){
    if (words[i].length > 4){
    return true;
  }
  return false;
}
}
longPlaneteerCalls(assortedWords);

snacks = ["crackers", "gouda", "thyme"];
soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"];
ingredients = ["garlic", "rosemary", "bread"];


function findTheCheese (foods) {
  for(var i =0; i<foods.length; i++){
    if (foods[i] ==="cheddar" || foods[i] ==="gouda" || foods[i]=== "camembert" || foods[i] === "swiss")
    {
      return foods[i]
    }
  }
    return "no cheese!"
}

function wordsWithB(words){
  for(var i =0; i<words.length; i++){
  if (words[i].startsWith('b');
}
return words;
}

/*
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false
findTheCheese(ingredients);
*/
/*function summonCaptainPlanet(){
 planeteerCalls.forEach(function(element){
   return element.toUpperCase() + "!";
});

*/