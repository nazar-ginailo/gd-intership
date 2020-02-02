import { recursionCloneArr } from './recursion-clone-arr';

describe('recursion-clone-arr', () => {
  test(`recursionCloneArr([]) should return an array`, () => {
    expect(Array.isArray(recursionCloneArr([]))).toBe(true);
  });

  test('mutation should not be happened', () => {
    const original = [1, 2, 3, 4, 5];
    const copy = recursionCloneArr(original);

    copy.splice(0, 3);

    expect(original.length).toBe(5);
  });
});
