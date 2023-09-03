export class Ordained {
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

    const step = (this.max - this.min) / (this.length - 1);

    for (let i = 0; i < this.length; i++) {
      console.log(step);
      const number = Math.floor(this.min + i * step);
      sequence.push(number);
    }

    return sequence;
  }
}
