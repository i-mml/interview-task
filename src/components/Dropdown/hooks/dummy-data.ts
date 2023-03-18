let index = 0;

const generateRandomData = (size: number) =>
  new Array(size).fill(0).map((item) => ({
    label: `option-${index}`,
    value: `option-${index++}`,
  }));

export default generateRandomData;
