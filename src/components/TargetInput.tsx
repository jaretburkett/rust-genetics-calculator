import React, { useState } from 'react';
import { availableGeneticsStore, breedingGeneticsStore, isSmartStore, targetStore } from '../lib/store';
import { possibleGenes } from '../lib/basic';
import { breedForTarget } from '../lib/calculate';


export default function TargetInput() {
  const [target, setTarget] = targetStore.use();
  const [gene, setGene] = useState(targetStore.get());
  return (
    <div>
      <p className="text-sm">Target</p>
      <input
        type="text"
        value={gene}
        className="rounded-sm px-4 py-3 focus:outline-none bg-gray-700 text-gray-50 w-full"
        style={{
          width: '100%'
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
          if (value.length === 6) {
            setTarget(value)
            breedingGeneticsStore.set(breedForTarget(availableGeneticsStore.get(), value));
          }
        }}
      />
    </div>
  );
}
