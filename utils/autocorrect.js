const resume = require("../resume.json");
const FuzzySet = require("fuzzyset.js");

categories = [
  ["work", "company"],
  ["volunteer", "organization"],
  ["education", "institution"],
  ["awards", "title"],
  ["publications", "name"],
  ["skills", "name"],
  ["languages", "language"],
  ["interests", "name"],
  ["references", "name"],
];
const wordsArray = FuzzySet()
for (key in resume) {
  wordsArray.add(key)
}
const Nodes = [
  "email",
  "phone",
  "website",
  "summary",
  "location",
  "profile",
  "AECOM",
  "QuEST",
  "Zen",
  "San Diego State University",
  "App Academy",
  "Product School",
  "Employee of the Month",
  "Awesome Patent that Danny Wrote",
  "Ruby on Rails",
  "Express.js",
  "Node.js",
  "Python",
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Redux",
  "Styled Components",
  "PostgreSQL",
  "MongoDB",
  "Socket.IO",
  "Peer.js",
  "AWS S3",
  "Git",
  "English",
  "Chinese-Mandarin",
  "Sports",
  "Video Games",
  "Books",
  "Jonathan Yang",
  "Andrew Walker",
  "Syna Moshggou"
];

for (let i=0;i<Nodes.length;i++){
  wordsArray.add(Nodes[i]);
}

const getSuggestions = (word) => {
  return wordsArray.get(word);
}


// console.log(WORD_COUNTS)

// function editDistance1(word) {
//   word = word.toLowerCase().split("");
//   var results = [];

//   //Adding any one character (from the alphabet) anywhere in the word.
//   for (var i = 0; i <= word.length; i++) {
//     for (var j = 0; j < alphabet.length; j++) {
//       var newWord = word.slice();
//       newWord.splice(i, 0, alphabet[j]);
//       results.push(newWord.join(""));
//       results.push(newWord.join("").toUpperCase());
//     }
//   }

//   //Removing any one character from the word.
//   if (word.length > 1) {
//     for (var i = 0; i < word.length; i++) {
//       var newWord = word.slice();
//       newWord.splice(i, 1);
//       results.push(newWord.join(""));
//     }
//   }

//   //Transposing (switching) the order of any two adjacent characters in a word.
//   if (word.length > 1) {
//     for (var i = 0; i < word.length - 1; i++) {
//       var newWord = word.slice();
//       var r = newWord.splice(i, 1);
//       newWord.splice(i + 1, 0, r[0]);
//       results.push(newWord.join(""));
//     }
//   }

//   //Substituting any character in the word with another character.
//   for (var i = 0; i < word.length; i++) {
//     for (var j = 0; j < alphabet.length; j++) {
//       var newWord = word.slice();
//       newWord[i] = alphabet[j];
//       results.push(newWord.join(""));
//     }
//   }
//   console.log(results)
//   return results;
// }

// function correct(word) {
//   if (word in WORD_COUNTS) {
//     return word;
//   }
  

//   var maxCount = 0;
//   var correctWord = word;
//   var editDistance1Words = editDistance1(word);
//   var editDistance2Words = [];

//   for (var i = 0; i < editDistance1Words.length; i++) {
//     editDistance2Words = editDistance2Words.concat(
//       editDistance1(editDistance1Words[i])
//     );
//   }

//   for (var i = 0; i < editDistance1Words.length; i++) {
//     // console.log(editDistance1Words[i])
//     if (editDistance1Words[i] in WORD_COUNTS) {
//       // console.log(editDistance1Words[i], WORD_COUNTS[editDistance1Words[i]]);
//       if (WORD_COUNTS[editDistance1Words[i]] > maxCount) {
//         maxCount = WORD_COUNTS[editDistance1Words[i]];
//         correctWord = editDistance1Words[i];
//       }
//     }
//   }
//   console.log(
//     "========================================================================"
//   );
  
//   var maxCount2 = 0;
//   var correctWord2 = correctWord;

//   for (var i = 0; i < editDistance2Words.length; i++) {
//     if (editDistance2Words[i] in WORD_COUNTS) {
//       // console.log(editDistance2Words[i], WORD_COUNTS[editDistance2Words[i]]);
//       if (WORD_COUNTS[editDistance2Words[i]] > maxCount2) {
//         maxCount2 = WORD_COUNTS[editDistance2Words[i]];
//         correctWord2 = editDistance2Words[i];
//       }
//     }
//   }

//   if (word.length < 6) {
//     if (maxCount2 > 100 * maxCount) {
//       return correctWord2;
//     }
//     return correctWord;
//   } else {
//     if (maxCount2 > 4 * maxCount) {
//       return correctWord2;
//     }
//     return correctWord;
//   }
// }

module.exports = {
  getSuggestions
}