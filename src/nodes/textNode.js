import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../common/BaseNode';
import * as Styled from './style.js';
export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');

  const content = (
    <>
      <Styled.StyledTextField
        label='Text:'
        variant='outlined'
        size='small'
        placeholder='Enter Text'
        fullWidth
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
      />
    </>
  );

  return (
    <BaseNode
      id={id}
      title="Text"
      content={content}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    />
  );
};
