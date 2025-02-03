import {Invoice} from "../../core/moveResponsibility/Invoice";

describe('Invoice', ()=>{
  it('calculates net amount', ()=>{
    const result = Invoice.create("100", "10").calculateNetAmount();
    expect(result).toBe("90");
  })

  it('should throw an error when amount is not a number', ()=>{
    expect(() => Invoice.create("NotANumber", "10")).toThrowError();
  })

  it('should throw an error when amount is not a positive number', ()=>{
    expect(() => Invoice.create("-100", "10")).toThrowError();
  })
  
  it('should throw an error when tax is not a number', ()=>{
    expect(() => Invoice.create("100", "NotANumber")).toThrowError();
  })

  it('should throw an error when tax is not a positive number', ()=>{
    expect(() => Invoice.create("100", "-10")).toThrowError();
  })
})