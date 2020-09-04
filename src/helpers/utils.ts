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
