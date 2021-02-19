import React, { useState } from 'react';
import { isSmartStore } from './lib/store';
import GeneInput from './components/GeneInput';
import AvailableGenetics from './components/AvailableGenetics';
import BreedingGenetics from './components/BreedingGenetics';
import Output from './components/Output';
import logo from './img/rust-logo.png';
import SmartToggle from './components/SmartToggle';
import TargetInput from './components/TargetInput';

export default function App() {
  const isSmart = isSmartStore.useValue();
  return (
    <div className="container mx-auto max-w-lg px-4 text-gray-50">
      <div className="text-center pt-3">
        <img src={logo} className="max-h-16 mx-auto" />
      </div>

      <div style={{ padding: '8px 0' }}>
        <SmartToggle />
      </div>
      <div style={{ padding: '8px 0' }}>
        <GeneInput />
      </div>
      {
        isSmart ?
          <div style={{ padding: '8px 0' }}>
            <TargetInput />
          </div>
          :
          null
      }
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
