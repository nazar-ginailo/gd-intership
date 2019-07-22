// import { pairwise } from './pairwise';

xdescribe('Pairwise', () => {


    test('pairwise([1, 4, 2, 3, 0, 5], 7) should return 11', () => {
        expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11);
    });

    test('pairwise([1, 3, 2, 4], 4) should return 1', () => {
        expect(pairwise([1, 3, 2, 4], 4)).toBe(1);
    });

    test('pairwise([1, 1, 1], 2) should return 1', () => {
        expect(pairwise([1, 1, 1], 2)).toBe(1);
    });

    test('pairwise([0, 0, 0, 0, 1, 1], 1) should return 10', () => {
        expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10);
    });

    test('pairwise([], 100) should return 0', () => {
        expect(pairwise([], 100)).toBe(0);
    });
});