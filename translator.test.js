// write the tests for each letter of the alphabet in morse code

import { translate} from './translator.js';
import { translateWords } from './translator.js';
import {describe, it, expect} from '@jest/globals';


describe("should translate letters of the alphabet to morse code", ()=>{

  it("translate a to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate b to -... ", ()=> {
    const result = translate("b");
    expect(result).toBe("-...");
  })

  it("translate c to -.-.", ()=> {
    const result = translate("c");
    expect(result).toBe("-.-.");
  })

  it("translate d to -..", ()=> {
    const result = translate("d");
    expect(result).toBe("-..");
  })

  it("translate e to .", ()=> {
    const result = translate("e");
    expect(result).toBe(".");
  })

  it("translate f to ..-.", ()=> {
    const result = translate("f");
    expect(result).toBe("..-.");
  })

  it("translate g to --.", ()=> {
    const result = translate("g");
    expect(result).toBe("--.");
  })

  it("translate h to ....", ()=> {
    const result = translate("h");
    expect(result).toBe("....");
  })

  it("translate i to ..", ()=> {
    const result = translate("i");
    expect(result).toBe("..");
  })

  it("translate j to .---", ()=> {
    const result = translate("j");
    expect(result).toBe(".---");
  })

  it("translate k to -.-", ()=> {
    const result = translate("k");
    expect(result).toBe("-.-");
  })

  it("translate l to .-..", ()=> {
    const result = translate("l");
    expect(result).toBe(".-..");
  })

  it("translate m to --", ()=> {
    const result = translate("m");
    expect(result).toBe("--");
  })

  it("translate n to -.", ()=> {
    const result = translate("n");
    expect(result).toBe("-.");
  })
  it("translate o to ---", ()=> {
    const result = translate("o");
    expect(result).toBe("---");
  })
  it("translate p to .--.", ()=> {
    const result = translate("p");
    expect(result).toBe(".--.");
  })
  it("translate q to --.-", ()=> {
    const result = translate("q");
    expect(result).toBe("--.-");
  })
  it("translate r to .-.", ()=> {
    const result = translate("r");
    expect(result).toBe(".-.");
  })
  it("translate s to ...", ()=> {
    const result = translate("s");
    expect(result).toBe("...");
  })
  it("translate t to -", ()=> {
    const result = translate("t");
    expect(result).toBe("-");
  })
  it("translate u to ..-", ()=> {
    const result = translate("u");
    expect(result).toBe("..-");
  })
  it("translate v to ...-", ()=> {
    const result = translate("v");
    expect(result).toBe("...-");
  })
  it("translate w to .--", ()=> {
    const result = translate("w");
    expect(result).toBe(".--");
  })
  it("translate x to -..-", ()=> {
    const result = translate("x");
    expect(result).toBe("-..-");
  })
  it("translate y to -.--", ()=> {
    const result = translate("y");
    expect(result).toBe("-.--");
  })
  it("translate z to --..", ()=> {
    const result = translate("z");
    expect(result).toBe("--..");
  })



})


describe("should translate words to morse code", ()=>{
it ("translate hi", ()=> {
  const result = translateWords("hi");
  expect(result).toBe(".... ..");
})
})
