import { objCopy, redGenes } from './basic';

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
const numGenes = 6;

const getGeneStrengthArr = (breedingGenetics: string[]) => {
  // split genetics into array of genetics
  const splits = breedingGenetics.map((value) => value.split(''));

  // go through each genetic place holder to determine genetic output
  let geneStrengthArr = [] as GeneStrength[][];
  for (let i = 0; i < numGenes; i++) {
    let geneStrength = objCopy(geneStrengthDefault);
    // go through all plants and add their strengths
    for (let p = 0; p < splits.length; p++) {
      const plantGene = splits[p][i];
      for (let s = 0; s < geneStrength.length; s++) {
        if (geneStrength[s].gene === plantGene.toLowerCase()) {
          //determine number of strength
          if (redGenes.includes(geneStrength[s].gene.toUpperCase())) {
            geneStrength[s].strength += redGeneStrength;
          } else {
            geneStrength[s].strength += greenGeneStrength;
          }
        }
      }
    }
    // sort the genes based on strength
    geneStrength.sort((a, b) => {
      if (a.strength > b.strength) {
        return -1;
      } else if (a.strength < b.strength) {
        return 1;
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
  let possibleGenes: string[] = [''];
  //determine genes by strength
  for (let i = 0; i < numGenes; i++) {
    const topStrength = geneStrengthArr[i][0].strength;
    // add the gene
    for (let a = 0; a < possibleGenes.length; a++) {
      possibleGenes[a] = possibleGenes[a] + geneStrengthArr[i][0].gene.toUpperCase();
    }
    // run through the rest to see if any match
    for (let g = 1; g < geneStrengthArr[i].length; g++) {
      if (geneStrengthArr[i][g].strength === topStrength) {
        const genesToAdd: string[] = [];
        // add additional gene by duplicating all possible genes with this option
        for (let a = 0; a < possibleGenes.length; a++) {
          const newGene = possibleGenes[a].slice(0, -1) + geneStrengthArr[i][g].gene.toUpperCase();
          genesToAdd.push(newGene);
        }
        possibleGenes = possibleGenes.concat(genesToAdd);
      }
    }
  }
  return possibleGenes;
};