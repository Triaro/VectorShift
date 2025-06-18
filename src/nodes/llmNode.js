import { Position } from 'reactflow';
import { BaseNode } from '../common/BaseNode';

export const LLMNode = ({ id }) => {
  const content = <span>This is a LLM.</span>;

  return (
    <BaseNode
      id={id}
      title="LLM"
      content={content}
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: `${100 / 3}%` } },
        { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: `${200 / 3}%` } },
        { type: 'source', position: Position.Right, id: `${id}-response` },
      ]}
    />
  );
};
