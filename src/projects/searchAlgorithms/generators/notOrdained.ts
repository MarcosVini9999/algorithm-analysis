export class NotOrdained {
  private readonly min: number;
  private readonly max: number;
  private readonly length: number;

  constructor(min: number, max: number, length: number) {
    this.min = min;
    this.max = max;
    this.length = length;
  }

  generateSequence(): number[] {
    const sequence: number[] = [];

    for (let i = 0; i < this.length; i++) {
      const randomNumber = this.getRandomNumber();
      sequence.push(randomNumber);
    }

    return sequence;
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
