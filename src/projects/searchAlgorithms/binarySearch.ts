export class BinarySearch {
  constructor() {}

  search(number: number, sequence: number[], start: number, end: number): number {
    const midIndex = Math.floor((start + end) / 2);
    if (sequence[midIndex] == number) {
      return midIndex;
    }
    if (start >= end) {
      return -1;
    } else if (sequence[midIndex] < number) {
      return this.search(number, sequence, midIndex + 1, end);
    } else {
      return this.search(number, sequence, start, midIndex - 1);
    }
  }
}
