import React from 'react';
import { availableGeneticsStore, breedingGeneticsStore, isSmartStore } from '../lib/store';
import { FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import { objCopy, redColor, greenColor, redGenes } from '../lib/basic';

export default function BreedingGenetics() {
  const [breedingGenetics, setBreedingGenetics] = breedingGeneticsStore.use();
  const isSmart = isSmartStore.useValue();
  return (
    <>
      <p className="text-sm">Breeding Genetics</p>
      <div
        style={{
          height: 120,
          padding: '10px 15px',
          overflow: 'auto'
        }}
        className="rounded-sm px-4 py-3 bg-gray-700"
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
              {
                isSmart ?
                  null
                  :
                  <div className="mt-1">
                    <FaTrashAlt
                      onClick={() => {
                        console.log('delete ' + index)
                        const breeding = objCopy(breedingGenetics);
                        breeding.splice(index, 1);
                        setBreedingGenetics(breeding)
                      }}
                      className="cursor-pointer text-tomato-700"
                    />
                  </div>
              }
            </div>
          )
        })}

      </div>
    </>
  );
}