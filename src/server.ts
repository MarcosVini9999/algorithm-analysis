import { NotOrdained } from "./projects/searchAlgorithms/generators/notOrdained";
import { Ordained } from "./projects/searchAlgorithms/generators/ordered";
import { SequentialSearchV1 } from "./projects/searchAlgorithms/sequentialSearch";
import { BinarySearch } from "./projects/searchAlgorithms/binarySearch";
import { QuadraticSearch } from "./projects/searchAlgorithms/quadraticSearch";
import { TernarySearch } from "./projects/searchAlgorithms/ternarySearch";
import { measureMemory } from "./projects/modules/measureMemory";
import { CubicSearch } from "./projects/searchAlgorithms/cubicSearch";
import { saveFile } from "./projects/modules/saveFile";

const numbers = new Ordained(10);
const sequence = numbers.generateSequence();
const sequence2 = new NotOrdained(0, 10, 100).generateSequence();

const data = measureMemory(() => new CubicSearch().search(6, sequence2));

saveFile(data, "test");
