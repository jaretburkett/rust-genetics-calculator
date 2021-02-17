import React from 'react';
import { availableGeneticsStore, breedingGeneticsStore } from '../lib/store';
import { FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import { objCopy, redColor, greenColor, redGenes } from '../lib/basic';

export default function BreedingGenetics() {
  const [breedingGenetics, setBreedingGenetics] = breedingGeneticsStore.use();
  return (
    <>
      <p className="text-sm">Breeding Genetics</p>
      <div
        style={{
          height: 200,
          padding: '10px 15px',
          overflow: 'auto'
        }}
        className="rounded-sm px-4 py-3 bg-gray-800"
      >
        {breedingGenetics.map((value, index) => {
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
              <div>
                <FaTrashAlt
                  onClick={() => {
                    console.log('delete ' + index)
                    const breeding = objCopy(breedingGenetics);
                    breeding.splice(index, 1);
                    setBreedingGenetics(breeding)
                  }}
                  className="cursor-pointer text-red-500"
                />
              </div>
            </div>
          )
        })}

      </div>
    </>
  );
}