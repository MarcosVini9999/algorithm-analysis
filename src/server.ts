import { NotOrdained } from "./projects/searchAlgorithms/generators/notOrdained";
import { Ordained } from "./projects/searchAlgorithms/generators/ordered";
import { SequentialSearchV1 } from "./projects/searchAlgorithms/sequentialSearch";
import { BinarySearch } from "./projects/searchAlgorithms/binarySearch";
import { QuadraticSearch } from "./projects/searchAlgorithms/quadraticSearch";
import { TernarySearch } from "./projects/searchAlgorithms/ternarySearch";
import { measureMemory } from "./projects/modules/measureMemory";
import { CubicSearch } from "./projects/searchAlgorithms/cubicSearch";

const numbers = new Ordained(10);
const sequence = numbers.generateSequence();
const sequence2 = new NotOrdained(0, 10, 2000).generateSequence();

measureMemory(() => new CubicSearch().search(6, sequence2));
