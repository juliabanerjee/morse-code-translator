import {translate, translateWords} from "./translator.js";

// allow text inputted to be saved as variable
// event listener when enter is pressed
// the answer to display on p tag
//selecting elements
const enterButton = document.querySelector("#enter")

const translationDisplay = document.querySelector("#translationDisplay")

const textbox = document.querySelector("#textbox")

enterButton.addEventListener ("click", (event) => {
  
const saveInput = textbox.value
translate(saveInput)
console.log(translate(saveInput))
return saveInput

})

const displayingTranslation = () => {
  
  translationDisplay.innerHTML += translate(saveInput)


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

