import { NotOrdained } from "./projects/searchAlgorithms/generators/notOrdained";
import { Ordained } from "./projects/searchAlgorithms/generators/ordered";
import { SequentialSearch } from "./projects/searchAlgorithms/sequentialSearch";
import { BinarySearch } from "./projects/searchAlgorithms/binarySearch";
import { QuadraticSearch } from "./projects/searchAlgorithms/quadraticSearch";
import { TernarySearch } from "./projects/searchAlgorithms/ternarySearch";
import { CubicSearch } from "./projects/searchAlgorithms/cubicSearch";
import { measureMemory } from "./projects/modules/measureMemory";
import { saveFile } from "./projects/modules/saveFile";
import { maxVal } from "./projects/maxVal/maxVal";

// const sequence = new NotOrdained(0, 10, 100).generateSequence();
// const sequenceSizes = [
//   100, 200, 1000, 2000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000, 100000000,
// ];
const sequenceSizes = [
  100, 200, 1000, 2000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000, 100000000,
];

sequenceSizes.map((size) => {
  const sequence = new NotOrdained(0, size, size).generateSequence();

  const maxValueSequencial = measureMemory(() => new maxVal(sequence).search());

  saveFile(maxValueSequencial, `MaxValue Sequential NotOrdained ${size}`);

  const maxValueRecursive = measureMemory(() =>
    new maxVal(sequence).searchRecursive(0, sequence.length - 1)
  );

  saveFile(maxValueRecursive, `MaxValue Recursive NotOrdained ${size}`);
});

console.log("🟥FINISH");

// sequenceSizes.map((size) => {
//   const sequence = new NotOrdained(0, size, size).generateSequence();

//   const dataSequentialSearch = measureMemory(() => new SequentialSearch(sequence).search(5));

//   saveFile(dataSequentialSearch, `SequentialSearchV1 NotOrdained ${size}`);

//   const data2SequentialSearch = measureMemory(() => new SequentialSearch(sequence).search2(5));

//   saveFile(data2SequentialSearch, `SequentialSearchV2 NotOrdained ${size}`);
// });

// sequenceSizes.map((size) => {
//   const sequence = new Ordained(size).generateSequence();

//   const dataBinarySearch = measureMemory(() =>
//     new BinarySearch().search(5, sequence, 0, sequence.length)
//   );

//   saveFile(dataBinarySearch, `BinarySearch Ordained ${size}`);
// });

// sequenceSizes.map((size) => {
//   const sequence = new Ordained(size).generateSequence();

//   const dataQuadraticSearch = measureMemory(() => new QuadraticSearch().search(5, sequence));

//   saveFile(dataQuadraticSearch, `QuadraticSearch Ordained ${size}`);
// });

// sequenceSizes.map((size) => {
//   const sequence = new NotOrdained(0, size, size).generateSequence();

//   const dataQuadraticSearch = measureMemory(() => new QuadraticSearch().search(5, sequence));

//   saveFile(dataQuadraticSearch, `QuadraticSearch NotOrdained ${size}`);
// });

// sequenceSizes.map((size) => {
//   const sequence = new Ordained(size).generateSequence();

//   const dataTernarySearch = measureMemory(() => new TernarySearch().search(5, sequence));

//   saveFile(dataTernarySearch, `TernarySearch Ordained ${size}`);
// });

// sequenceSizes.map((size) => {
//   const sequence = new NotOrdained(0, size, size).generateSequence();

//   const dataTernarySearch = measureMemory(() => new TernarySearch().search(5, sequence));

//   saveFile(dataTernarySearch, `TernarySearch NotOrdained ${size}`);
// });

// sequenceSizes.map((size) => {
//   const sequence = new Ordained(size).generateSequence();

//   const dataCubicSearch = measureMemory(() => new CubicSearch().search(5, sequence));

//   saveFile(dataCubicSearch, `CubicSearch Ordained ${size}`);
// });

// sequenceSizes.map((size) => {
//   const sequence = new NotOrdained(0, size, size).generateSequence();

//   const dataCubicSearch = measureMemory(() => new CubicSearch().search(5, sequence));

//   saveFile(dataCubicSearch, `CubicSearch NotOrdained ${size}`);
// });

// console.log("🟥FINISH");
