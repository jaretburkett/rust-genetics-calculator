import React from 'react';
import { availableGeneticsStore, breedingGeneticsStore } from '../lib/store';
import { FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import { objCopy, redColor, greenColor, redGenes } from '../lib/basic';

export default function AvailableGenetics() {
  const [availableGenetics, setAvailableGenetics] = availableGeneticsStore.use();
  const [breedingGenetics, setBreedingGenetics] = breedingGeneticsStore.use();
  return (
    <>
    <p className="text-sm">Available Genetics</p>
      <div
        style={{
          height: 200,
          padding: '10px 15px',
          overflow: 'auto'
        }}
        className="rounded-sm px-4 py-3 bg-gray-800"
      >
        {availableGenetics.map((value, index) => {
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
              <div style={{ marginRight: 5 }}>
                <FaPlusCircle
                  onClick={() => {
                    const breeding = objCopy(breedingGenetics);
                    breeding.push(value);
                    setBreedingGenetics(breeding)
                  }}
                  className="cursor-pointer text-green-500"
                />
              </div>
              <div>
                <FaTrashAlt
                  onClick={() => {
                    console.log('delete ' + index)
                    const available = objCopy(availableGenetics);
                    available.splice(index, 1);
                    setAvailableGenetics(available)
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