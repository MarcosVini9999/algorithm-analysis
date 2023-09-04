export class SequentialSearch {
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

  search2(number: number) {
    for (let i = 0; i < this.sequence.length; i++) {
      if (this.sequence[i] == number) return i;
    }

    return -1;
  }
}
