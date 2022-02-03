export const showBoolean = (item: boolean) => {
    return item ? "1" : "0";
}

export const sleep = (second: number) => new Promise((res) => setTimeout(res, second));
