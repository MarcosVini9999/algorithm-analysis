export class SequentialSearchV1 {
  private readonly sequence: number[];

  constructor(sequence: number[]) {
    this.sequence = sequence;
  }

  search(number: number) {
    let indice = -1;

    for (let i = 0; i < this.sequence.length; i++) {
      if (this.sequence[i] == number) indice = i;
    }

    return indice;
  }
}
