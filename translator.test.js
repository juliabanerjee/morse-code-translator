// write the tests for each letter of the alphabet in morse code

import { translate} from './translator.js';
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

  it("translate e to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate f to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate g to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate h to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate i to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate i to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate i to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate i to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate i to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate i to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate i to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate i to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })

  it("translate i to .-", ()=> {
    const result = translate("a");
    expect(result).toBe(".-");
  })



})