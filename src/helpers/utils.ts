import {object} from "prop-types";

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


export const deepEquals = (o1, o2) => {
  if(!o1 || !o2) {
    return true;
  }

  const o1Keys = Object.keys(o1);
  const o2Keys = Object.keys(o2);
  if(o1Keys.length !== o2Keys.length) {
    return false;
  }
  return o1Keys.every( key => o1[key] === o2[key])


};