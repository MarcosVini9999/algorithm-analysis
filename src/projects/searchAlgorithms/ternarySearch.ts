export class TernarySearch {
  constructor() {}

  search(number: number, sequence: number[]): number {
    let min = 0;
    let max = sequence.length - 1;

    while (min <= max) {
      const leftThird = min + Math.floor((max - min) / 3);
      const rightThird = max - Math.floor((max - min) / 3);

      if (sequence[leftThird] === number) {
        return leftThird;
      } else if (sequence[rightThird] === number) {
        return rightThird;
      } else if (sequence[leftThird] > number) {
        max = leftThird - 1;
      } else if (sequence[rightThird] < number) {
        min = rightThird + 1;
      } else {
        min = leftThird + 1;
        max = rightThird - 1;
      }
    }

    return -1;
  }
}
