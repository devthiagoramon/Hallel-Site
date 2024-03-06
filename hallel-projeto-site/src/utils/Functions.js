export default function formatarData(inputData) {
  if (inputData && inputData.length >= 11) {
    const day = inputData.slice(8, 10);
    const month = inputData.slice(5, 7);
    const year = inputData.slice(0, 4);
    return `${day}/${month}/${year}`;
  }
  return inputData;
}
