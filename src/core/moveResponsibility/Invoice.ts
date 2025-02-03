export class Invoice {
  private readonly grossAmount: number;
  private readonly taxPercentage: number;
  private readonly numberOfItems: number;
  constructor(grossAmount: number, taxPercentage: number, numberOfItems: number) {
    this.grossAmount = grossAmount;
    this.taxPercentage = taxPercentage;
    this.numberOfItems = numberOfItems;
  }
  
  static create(amount: string, tax: string): Invoice {
    this.ValidateAmountFormat(amount);
    this.ValidateTaxFormat(tax);
    const zeroItems = 0;
    return new Invoice(parseInt(amount), parseInt(tax), zeroItems);
  }

  private static ValidateTaxFormat = (tax: string) => {
    if (isNaN(parseInt(tax)))
      throw new Error("Tax must be a number");

    if (parseInt(tax) < 0)
      throw new Error("Tax must be a postive number");
  }
  private static ValidateAmountFormat = (amount: string) => {
    if (isNaN(parseInt(amount)))
      throw new Error("Amount must be a number");

    if (parseInt(amount) < 0)
      throw new Error("Amount must be a postive number");
  }

  calculateNetAmount(): string {
    return (this.grossAmount - (this.grossAmount * (this.taxPercentage / 100))).toString();
  }
}