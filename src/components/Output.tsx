import React from 'react';
import { breedingGeneticsStore } from '../lib/store';
import { objCopy, redColor, greenColor, redGenes } from '../lib/basic';
import { calculateOutputs } from '../lib/calculate';


export default function Output() {
  const [breedingGenetics, setBreedingGenetics] = breedingGeneticsStore.use();
  const outputs = breedingGenetics.length > 2 ? calculateOutputs(breedingGenetics) : [];
  outputs.sort();
  // const outputs: string[] = [];
  return (
    <>
    <p className="text-sm">Result</p>
      <div
        style={{
          height: 200,
          padding: '10px 15px',
          overflow: 'auto'
        }}
        className="bg-gray-100"
      >
        {outputs.map((value, index) => {
          return (
            <div
              key={index}
              style={{
                display: 'flex'
              }}
            >
              <div style={{ flexGrow: 1 }}>
                {
                  value.split('').map((g, i) => {
                    if (redGenes.includes(g)) {
                      return (<span key={i} style={{ color: redColor }}>{g}</span>);
                    } else {
                      return (<span key={i} style={{ color: greenColor }}>{g}</span>)
                    }
                  })
                }
              </div>
            </div>
          )
        })}

      </div>
    </>
  );
}