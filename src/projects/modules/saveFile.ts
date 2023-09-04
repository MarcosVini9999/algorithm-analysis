import { writeFile } from "fs";
import data from "./../../data/results.json";

const path = "./src/data/results.json";

export const saveFile = (content: any, title: string) => {
  data.results.push({ title, ...content });

  return writeFile(path, JSON.stringify(data), (err) => {
    if (err) return err;

    console.log(`✅ ${title} Gravado`);
  });
};
