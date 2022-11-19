import * as fs from "fs";

interface Options<T> {
  path: string;
  data?: T | T[];
  callback?: (data: T | T[]) => void;
}

function readDataSync<T>(options: Options<T>): T | T[] {
  const data = fs.readFileSync(options.path, { encoding: "utf-8" });
  const parsedData: T[] = JSON.parse(data);

  if (options?.callback) options?.callback(parsedData);

  return parsedData;
}

function writeDataSync<T>(options: Options<T>): void {
  if (!(options.data instanceof Array)) {
    const dataArr = readDataSync<T>({
      path: options.path,
    }) as T[];

    dataArr.push(options.data);

    console.log(dataArr);
    fs.writeFileSync(options.path, JSON.stringify(dataArr, undefined, 2), {
      encoding: "utf-8",
    });

    return;
  }

  fs.writeFileSync(options.path, JSON.stringify(options.data, undefined, 2), {
    encoding: "utf-8",
  });

  if (options?.callback) return options?.callback(options.data);
}

export { readDataSync, writeDataSync };
