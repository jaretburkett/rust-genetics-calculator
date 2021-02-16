import { objCopy } from './basic';

type Gene = 'y' | 'g' | 'h' | 'w' | 'x';

type GeneStrength = {
  gene: Gene,
  strength: number
}

const geneStrengthDefault: GeneStrength[] = [
  {
    gene: 'y',
    strength: 0
  },
  {
    gene: 'g',
    strength: 0
  },
  {
    gene: 'h',
    strength: 0
  },
  {
    gene: 'w',
    strength: 0
  },
  {
    gene: 'x',
    strength: 0
  },
];

const greenGeneStrength = 10;
const redGeneStrength = 19;

const redGenes = ['w', 'x'];

const getGeneStrengthArr = (breedingGenetics: string[]) => {
  // split genetics into array of genetics
  const splits = breedingGenetics.map((value) => value.split(''));

  // go through each genetic place holder to determine genetic output
  let geneStrengthArr = [] as GeneStrength[][];
  for (let i = 0; i < 6; i++) {
    let geneStrength = objCopy(geneStrengthDefault);
    // go through all plants and add their strengths
    for (let p = 0; p < splits.length; p++) {
      const plantGene = splits[p][i];
      for (let s = 0; s < geneStrength.length; s++) {
        if (geneStrength[s].gene === plantGene) {
          //determine number of strength
          if (redGenes.includes(geneStrength[s].gene)) {
            geneStrength[s].strength += redGeneStrength;
          } else {
            geneStrength[s].strength += greenGeneStrength;
          }
        }
      }
    }
    // sort the genes based on strength
    geneStrength.sort((a, b) => {
      if(a.strength > b.strength){
        return 1;
      } else if(a.strength < b.strength){
        return -1;
      } else {
        return 0;
      }
    })
    geneStrengthArr.push(geneStrength);
  }
  return geneStrengthArr;
}

export const calculateOutputs = (breedingGenetics: string[]) => {
  let geneStrengthArr = getGeneStrengthArr(breedingGenetics);
  // sort all the genes
};