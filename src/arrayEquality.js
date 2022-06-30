export default function arrayEquality(arrayOne, arrayTwo) {
  if (arrayOne.length != arrayTwo.length) return false;

  return arrayOne.every((element, index) => {
    return arrayTwo[index] === element;
  });
}
