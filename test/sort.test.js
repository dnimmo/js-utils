import sort from '../src/sort';

describe('sort', () => {
  it(
    'should sort numeric entries in an array',
    () => 
      expect(sort([2, 3, 1]))
        .toEqual([1, 2, 3])
  );
  
  it(
    'should sort alpha entries in an array',
    () => 
      expect(sort(['b', 'c', 'a']))
        .toEqual(['a', 'b', 'c'])
  );
  
  it(
    'should not modify the input array',
    () => {
      const input = [3, 2, 1]
      sort(input)

      expect(input)
        .toEqual([3, 2, 1])
    })
});