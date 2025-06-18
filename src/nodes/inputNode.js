import { useState } from 'react';
import { Position } from 'reactflow';
import { Select, MenuItem, InputLabel } from '@mui/material';

import { BaseNode } from '../common/BaseNode';
import * as Styled from './style.js';
export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const content = (
    <Styled.ContentContainer>
      <Styled.StyledTextField
        label='Name:'
        variant='outlined'
        size='small'
        placeholder='Enter Name'
        fullWidth
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
      />
      <Styled.StyledFormControl variant="outlined" size="small">
        <InputLabel id="input-type-label">Type:</InputLabel>
        <Select
          labelId="input-type-label"
          value={inputType}
          label="Type"
          onChange={(e) => setInputType(e.target.value)}
        >
          <MenuItem value="Text">Text</MenuItem>
          <MenuItem value="File">File</MenuItem>
        </Select>
      </Styled.StyledFormControl>
    </Styled.ContentContainer>
  );

  return (
    <BaseNode
      id={id}
      title="Input"
      content={content}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` },
      ]}
    />
  );
};
