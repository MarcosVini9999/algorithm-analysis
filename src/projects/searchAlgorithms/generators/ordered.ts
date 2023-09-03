export class Ordained {
  private readonly length: number;

  constructor(length: number) {
    this.length = length;
  }

  generateSequence(): number[] {
    const sequence: number[] = [];

    for (let i = 0; i < this.length; i++) {
      const randomNumber = i + this.getRandomNumber(2);
      sequence.push(randomNumber);
    }

    return sequence;
  }

  private getRandomNumber(number: number): number {
    return Math.floor(Math.random() * (number + 1));
  }
}
