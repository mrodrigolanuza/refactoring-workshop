import {Arithmetic, God} from "../../core/moveResponsibility/God";

describe('The Arithmetic class', ()=>{
  it('adds numbers', ()=>{
    const god = new God();
    expect(new Arithmetic().add(2, 2)).toBe(4);
  })

  it('subtracts numbers', ()=>{
    const god = new God();
    expect(new Arithmetic().substract(2, 2)).toBe(0);
  })
})