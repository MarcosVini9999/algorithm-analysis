export class maxVal {
  private readonly sequence: number[];

  constructor(sequence: number[]) {
    this.sequence = sequence;
  }

  search() {
    let max = this.sequence[0];
    for (let i = 0; i < this.sequence.length; i++) {
      if (this.sequence[i] > max) max = this.sequence[i];
    }
    return max;
  }

  searchRecursive(init: number, end: number) {
    if (end - init <= 1) {
      return Math.max(this.sequence[init], this.sequence[end]);
    }

    const middle = Math.floor((init + end) / 2);
    const vet1: number = this.searchRecursive(init, middle);
    const vet2: number = this.searchRecursive(middle + 1, end);
    return Math.max(vet1, vet2);
  }
}
