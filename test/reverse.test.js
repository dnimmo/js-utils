import reverse from '../src/reverse';

describe('reverse', () => {
  it(
    'should reverse the order of the items in an array',
    () => 
      expect(reverse([1, 2, 3]))
        .toEqual([3, 2, 1])
  );

  it(
    'should not modify the input array',
    () => {
      const input = [1, 2, 3];
      reverse(input);

      expect(input)
        .toEqual([1, 2, 3]);
    }
  );
});