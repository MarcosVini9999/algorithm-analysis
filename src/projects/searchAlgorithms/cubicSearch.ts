export class CubicSearch {
  constructor() {}

  search(number: number, sequence: number[]): number {
    let index = -1;

    for (let i = 0; i < sequence.length; i++) {
      for (let j = 0; j < sequence.length; j++) {
        for (let k = 0; k < sequence.length; k++) {
          if (sequence[i] === number && sequence[j] === number && sequence[k] === number) {
            index = i;
          }
        }
      }
    }

    return index;
  }
}
