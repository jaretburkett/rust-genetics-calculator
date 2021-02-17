import React, { useState } from 'react';
import { availableGeneticsStore } from '../lib/store';
import { objCopy, possibleGenes } from '../lib/basic';


export default function GeneInput() {
  const [availableGenetics, setAvailableGenetics] = availableGeneticsStore.use();
  const [gene, setGene] = useState('');
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (gene.length === 6) {
          const genes = objCopy(availableGenetics);
          genes.push(gene);
          setAvailableGenetics(genes);
          setGene('');
        }
      }}>
        <input
          type="text"
          value={gene}
          className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-800 text-gray-50 w-full"
          style={{
            width:'100%'
          }}
          placeholder="eg: XYYHGG"
          onChange={(e) => {
            let value = e.target.value.toUpperCase();
            let fieldArr = value.split('');
            // remove non possible genes
            fieldArr = fieldArr.filter((value: string) => possibleGenes.includes(value));
            if (fieldArr.length > 6) {
              fieldArr = fieldArr.slice(0, 6);
            }
            value = fieldArr.join('');
            setGene(value);
          }}
        />
      </form>
    </div>
  );
}
