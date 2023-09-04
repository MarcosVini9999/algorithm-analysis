export class QuadraticSearch {
  constructor() {}

  search(number: number, sequence: number[]): object {
    let counter = 0;
    let position = -1;
    let entered = false;

    for (let i = 0; i < sequence.length; i++) {
      for (let j = i; j < sequence.length; j++) {
        if (sequence[i] === number) {
          if (!entered) {
            position = i;
            if (sequence[j] === number) {
              counter++;
            }
          }
        }
      }
      if (counter > 0) {
        entered = true;
      }
    }

    return { position, counter };
  }
}
