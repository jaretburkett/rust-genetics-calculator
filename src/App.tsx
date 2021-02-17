import React, { useState } from 'react';
import { availableGeneticsStore, breedingGeneticsStore } from './lib/store';
import GeneInput from './components/GeneInput';
import AvailableGenetics from './components/AvailableGenetics';
import BreedingGenetics from './components/BreedingGenetics';
import Output from './components/Output';
import logo from './img/rust-logo.png';

export default function App() {
  const [availableGenetics, setAvailableGenetics] = availableGeneticsStore.use();
  const [breedingGenetics, setBreedingGenetics] = breedingGeneticsStore.use();
  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <img src={logo} className="max-h-16 mx-auto"/>
      </div>

      <div style={{ padding: '8px 0' }}>
        <GeneInput />
      </div>
      <div style={{ padding: '8px 0' }}>
        <AvailableGenetics />
      </div>
      <div style={{ padding: '8px 0' }}>
        <BreedingGenetics />
      </div>
      <div style={{ padding: '8px 0' }}>
        <Output />
      </div>
    </div>
  );
}
