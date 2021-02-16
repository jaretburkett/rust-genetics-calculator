import React, { useState } from 'react';
import { } from './lib/calculate';
import { availableGeneticsStore, breedingGeneticsStore } from './lib/store';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col, Divider } from 'antd';
import GeneInput from './components/GeneInput';

export default function App() {
  const [availableGenetics, setAvailableGenetics] = availableGeneticsStore.use();
  const [breedingGenetics, setBreedingGenetics] = breedingGeneticsStore.use();
  return (
    <div className="App">
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div style={{ padding: '8px 0' }}>
            <GeneInput />
          </div>
        </Col>
      </Row>
    </div>
  );
}
