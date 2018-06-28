// Create an array of words
var superHeroes = [

'Thor',
'blackPanther',
'wonderWoman',
'superMan',
'Hulk',
'Spiderman',
'Batman',
'captainAmerica',
'ironMan',
'theIncredibles',

];

// Choose word randomly

let randNum = Math.floor(Math.random() * superHeroes.length);
let rightWord = [];
let wrongWord = [];
let choosenSuperHeroes = superHeroes[randNum];
let underscore = [];
console.log(choosenSuperHeroes);

// Create underscores based on length of word
generateUnderscore = () => {
    for(i = 0; i <choosenSuperHeroes.length; i++) {
        underscore.push('_');
    }
    return underscore;
}

console.log(generateUnderscore());
// Get users guess
document.addEventListener('keypress', (event) => {
    docuement.getElementByclass ("superHeroes").innerHTML;
  let keyword = string.fromCharCode (event.keycode);
  if(choosenSuperHeroes.indexof(keyword) > -1) {
      console.log(true);
  }
});
// Check if the users guess is right
if(choosenSuperHeroes.indexOf(keyword) > -1) {
  rightWord.push(keyword);
  underscore[choosenWord.indexof(keyword)] = keyword;
  if (underscore.join('') == choosenWord) {
      alert('You Win');
  }
};
// If right push to right array
    rightWord.push(keyword);
    console.log(rightWord);

// If wrong push to wrong array
    