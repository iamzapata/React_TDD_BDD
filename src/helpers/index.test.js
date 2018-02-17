import maxNumber from './index';

describe('maxNumber', () => {
  describe('Given an empty array', () => {
    it('Returns 0', () => {
      expect(maxNumber([])).toEqual(0);
    });
  });

  describe('Given an array of numbers', () => {
    it('Returns the max number', () => {
      expect(maxNumber([1, 10, 2, 5])).toEqual(10);
    });
  });
});
