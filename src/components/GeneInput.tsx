import React, { useState } from 'react';
import { availableGeneticsStore } from '../lib/store';
import { Form, Input } from 'antd';
import { objCopy } from '../lib/basic';

const possibleGenes = ['Y', 'G', 'H', 'W', 'X'];

interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

export default function GeneInput() {
  const [availableGenetics, setAvailableGenetics] = availableGeneticsStore.use();
  const [fields, setFields] = useState<FieldData[]>([{ name: ['newGene'], value: '' }]);
  return (
    <Form
      name="geneInput"
      fields={fields}
      onFinish={(values) => {
        if (values.newGene.length === 6) {
          const genes = objCopy(availableGenetics);
          genes.push(values.newGene);
          setAvailableGenetics(genes);
          setFields([{ name: ['newGene'], value: '' }])
        }
        // check to make sure it is valid
        console.log('onFinish', values);
      }}
      onFieldsChange={(_, allFields) => {
        const cleanFields = allFields.map((field) => {
          //@ts-ignore
          if (field.name[0] === 'newGene') {
            field.value = (field.value as string).toUpperCase();
            let fieldArr = field.value.split('');
            // remove non possible genes
            fieldArr = fieldArr.filter((value: string) => possibleGenes.includes(value));
            if (fieldArr.length > 6) {
              fieldArr = fieldArr.slice(0, 6);
            }
            field.value = fieldArr.join('');

            return field;
          } else {
            return field;
          }
        })
        console.log('onfieldchange', cleanFields);
        setFields(cleanFields);
      }}
    >
      <Form.Item
        label="New Gene"
        name="newGene"
      >
        <Input 
          autoComplete={'none'}
        />
      </Form.Item>

    </Form>
  );
}
