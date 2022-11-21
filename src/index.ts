import * as fs from "fs";

interface Options<T> {
  path: string; // relative path to .json file
  data?: T | T[]; // data to write into .json file
  type?: "single" | "array"; // stores the object as a single object or as an array
  callback?: (data: T | T[]) => void;
}

function readDataSync<T>(options: Options<T>): T | T[] {
  const data = fs.readFileSync(options.path, { encoding: "utf-8" });
  // if file contains information, return it, otherwise return empty array
  const parsedData: T | T[] = data ? JSON.parse(data) : [];

  if (options?.callback) options?.callback(parsedData);

  return parsedData;
}

function writeDataSync<T>(options: Options<T>): void {
  let singleObj: T = null;

  if (!(options.data instanceof Array)) {
    // Set new value to singleObj
    singleObj = options.data;

    if (options.type === "array") {
      // Save data to array
      options.data = readDataSync<T>({
        path: options.path,
      }) as T[];

      options.data.push(singleObj);
    }
  }

  fs.writeFileSync(options.path, JSON.stringify(options.data, undefined, 2), {
    encoding: "utf-8",
  });

  if (options?.callback)
    return options?.callback(singleObj ? singleObj : options.data);
}

export { readDataSync, writeDataSync };
