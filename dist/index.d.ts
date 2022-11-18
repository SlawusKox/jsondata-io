interface Options<T> {
    path: string;
    data?: T | T[];
    callback?: (data: T | T[]) => void;
}
declare function readDataSync<T>(options: Options<T>): T | T[];
declare function writeDataSync<T>(options: Options<T>): void;
export { readDataSync, writeDataSync };
