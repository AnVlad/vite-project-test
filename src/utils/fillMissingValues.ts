interface DataItem {
  name: string;
  a?: number;
  b?: number;
}

export const fillMissingValues = (arr: DataItem[]): DataItem[] => {
  const copyArr = [...arr];

  let a = 0;

  let prev = 0;

  copyArr.forEach((val, index, array) => {
    if (typeof val.a === 'undefined') {
      if (a === 0) {
        prev = index - 1;
      }

      a++;
    } else {
      if (a > 0) {
        for (let i = a; i > 0; i--) {
          const res = (array[prev].a! + array[index].a!) / (i + 1);
          copyArr[index - i].a = res;
        }
      }
      a = 0;
    }
  });

  copyArr.forEach((val, index, array) => {
    if (typeof val.b === 'undefined') {
      if (a === 0) {
        prev = index - 1;
      }

      a++;
    } else {
      if (a > 0) {
        for (let i = a; i > 0; i--) {
          const res = (array[prev].b! + array[index].b!) / (i + 1);
          copyArr[index - i].b = Number(res.toFixed(1));
        }
      }
      a = 0;
    }
  });

  return copyArr;
};
