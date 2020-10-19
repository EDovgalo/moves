export const comparator = (sortBy: string):
  ((a: any, b: any) => number) => (a: any, b: any): any => {
  if (a[sortBy] > b[sortBy]) {
    return 1;
  }
  if (a[sortBy] < b[sortBy]) {
    return -1;
  }
  return 0;
};

export const join = (arr: Array<any>):
  any => (arr ? arr.map((item, index) => (index ? `, ${item}` : item)) : arr);
