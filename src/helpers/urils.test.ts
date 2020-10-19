import { comparator, join } from './utils';

describe('actions', () => {
  const mockArray = [{ name: 'C' }, { name: 'A' }, { name: 'D' }];

  it('should sort array', () => {
    const comp = comparator('name');
    mockArray.sort(comp);
    expect(mockArray).toEqual([{ name: 'A' }, { name: 'C' }, { name: 'D' }]);
  });

  it('should correctly join array', () => {
    const array = ['a', 'b', 'c'];
    const result = join(array);
    expect(result.join('')).toEqual('a, b, c');
  });
});
