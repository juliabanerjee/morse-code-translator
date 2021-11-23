export const translate = (message) => {
  if (message == "a")
  return ".-";
  else if (message == "b")
  return "-...";
  else if (message == "c")
  return "-.-.";
  else if (message == "d")
  return "-..";
  else if (message == "e")
  return ".";
  else if (message == "f")
  return "..-.";
  else if (message == "g")
  return "--.";
  else if (message == "h")
  return "....";
  else if (message == "i")
  return "..";
  else if (message == "j")
  return ".---";
  else if (message == "k")
  return "-.-";
  else if (message == "l")
  return ".-..";
  else if (message == "m")
  return "--";
  else if (message == "n")
  return "-.";
  else if (message == "o")
  return "---";
  else if (message == "p")
  return ".--.";
  else if (message == "q")
  return "--.-";
  else if (message == "r")
  return ".-.";
  else if (message == "s")
  return "...";
  else if (message == "t")
  return "-";
  else if (message == "u")
  return "..-";
  else if (message == "v")
  return "...-";
  else if (message == "w")
  return ".--";
  else if (message == "x")
  return "-..-";
  else if (message == "y")
  return "-.--";
  else (message == "z")
  return "--..";

} 
//
export const translateWords = (word) => { 
    const wordArr = [...word]
    // iterate through array 
    //get translation as you iterate through array
    // find  a way of storing them
    const translationArr = []
    // get the array back to one big string
    for(let i = 0; i < wordArr.length; i++) {
    translationArr.push(translate(wordArr[i]))
    
  }
  const translatedWord = translationArr.join(" ")
  return translatedWord
  
  
}