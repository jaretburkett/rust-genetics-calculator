import React from 'react';
import { availableGeneticsStore, breedingGeneticsStore } from '../lib/store';
import { FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import { objCopy } from '../lib/basic';

const greenColor = 'green';
const redColor = 'red';
const redGenes = ['W', 'X'];

export default function AvailableGenetics() {
  const [availableGenetics, setAvailableGenetics] = availableGeneticsStore.use();
  const [breedingGenetics, setBreedingGenetics] = breedingGeneticsStore.use();
  return (
    <div
      style={{
        height: 300,
        background: '#eee',
        padding:'10px 15px',
        overflow:'auto'
      }}
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
            <div style={{marginRight:5}}>
              <FaPlusCircle onClick={() => {
                const breeding = objCopy(breedingGenetics);
                breeding.push(value);
                setBreedingGenetics(breeding)
              }}/>
            </div>
            <div>
              <FaTrashAlt onClick={() => {
                console.log('delete ' + index)
                const available = objCopy(availableGenetics);
                available.splice(index, 1);
                setAvailableGenetics(available)
              }}/>
            </div>
          </div>
        )
      })}

    </div>
  );
}