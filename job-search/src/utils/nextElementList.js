const nextElementList = (list, value) => {
  const currentActionIndex = list.indexOf(value);
  const nextValueIndex = (currentActionIndex + 1) % list.length;
  const nextValue = list[nextValueIndex];
  return nextValue;

  // const nextValueIndex = (currentActionIndex + 1) % 4; // 4 % 4 = 0 ( 2 % 4 --Whenever you have a situation like this where the left hand operand is smaller than the right hand operand, the remainder when two is divided by 4 is actually 2 (remainder will always be the small left operand). **John Johnson says 4 goes into 0 the remainder is going to be 2 --As divisor is 4, remainder will range from 0 to 3
};

export default nextElementList;
