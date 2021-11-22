import {letterToMorseCode} from "./data.js";

// allow text inputted to be saved as variable
// event listener when enter is pressed
// the answer to display on p tag

const enterButton = document.querySelector("#enter")

const translationDisplay = document.querySelector("#translationDisplay")

const textbox = document.querySelector("#textbox")

enterButton.addEventListener = ("click", (event) => {
const saveInput = textbox.value

if(saveInput == letterToMorseCode[i].letter){
  const translation = letterToMorseCode[i].translation;

  return translation
displayingTranslation ()
}
})

const displayingTranslation = () => {
  
  translationDisplay.innerHTML = translation


}




// const morseCodeToLetters = [
//   {letter: ".-",
//   translation: "a" },
//   {letter:
//     translation: },
//   {letter:
//   translation: },
//   {letter:
//   translation: },
//   {letter: 
//   translation: },
//   {letter:
//     translation: },
//   {letter:
//   translation: },
//   {letter:
//   translation: },
//   {letter: 
//   translation: },
//   {letter:
//     translation: },
//   {letter:
//   translation: },
//   {letter:
//   translation: },
//   {letter: 
//   translation: },
//   {letter:
//     translation: },
//   {letter:
//   translation: },
//   {letter:
//   translation: },
//   {letter: 
//   translation: },
//   {letter:
//   translation: },
//   {letter:
//   translation: },
//   {letter:
//   translation: },
//   {letter: 
//   translation: },
//   {letter:
//   translation: },
//   {letter:
//   translation: },
//   {letter:
//   translation: },
//   {letter: 
//   translation: },
//   {letter:
//     translation: }, 

// ]

