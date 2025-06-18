import { useState } from 'react';
import { Position } from 'reactflow';
import { Select, MenuItem, InputLabel } from '@mui/material';
import { BaseNode } from '../common/BaseNode';
import * as Styled from './style.js';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

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
        <InputLabel id="output-type-label">Type:</InputLabel>
        <Select
          labelId="output-type-label"
          value={outputType}
          label="Type"
          onChange={(e) => setOutputType(e.target.value)}
        >
          <MenuItem value="Text">Text</MenuItem>
          <MenuItem value="File">Image</MenuItem>
        </Select>
      </Styled.StyledFormControl>
    </Styled.ContentContainer>
  );

  return (
    <BaseNode
      id={id}
      title="Output"
      content={content}
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-value` },
      ]}
    />
  );
};
