
export const objCopy = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
}

export const greenColor = 'green';
export const redColor = 'red';
export const redGenes = ['W', 'X'];
export const greenGenes = ['Y', 'G', 'H'];
export const possibleGenes = ['Y', 'G', 'H', 'W', 'X'];
