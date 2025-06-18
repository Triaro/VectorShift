import { Handle } from 'reactflow';
import * as Styled from './style.js'
export const BaseNode = ({ title, handles = [], content, style = {} }) => {
  const defaultStyle = {
    width: 200,
    color: '#FFFF',
    border: '2px solid rgb(188, 125, 255)',
    borderRadius: '10px',
    overflow: 'hidden',
    ...style,
  };

  return (
    <div style={defaultStyle}>
      {handles.map((handleProps, index) => (
        <Handle key={index} {...handleProps} />
      ))}
      <Styled.Title>
        {title}
      </Styled.Title>
      <Styled.NodeContent>{content}</Styled.NodeContent>
    </div>
  );
};
