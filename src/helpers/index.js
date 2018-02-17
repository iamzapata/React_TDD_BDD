function maxNumber(numbers) {
  return numbers.length > 0
    ? Math.max(...numbers) :
    0;
}

export default maxNumber;
