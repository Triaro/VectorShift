// components/BlobBackground.js
import styled, { keyframes } from 'styled-components';

const blobPulse = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) rotate(45deg) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) rotate(45deg) scale(1.2);
  }
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0a0a0a; /* base dark */
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
`;

const Blob = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle at 30% 30%, #b43fff, #3400ff 60%, transparent 100%);
  transform: translate(-50%, -50%) rotate(45deg);
  filter: blur(100px);
  opacity: 0.8;
  animation: ${blobPulse} 10s ease-in-out infinite;
`;

export const BlobBackground = () => (
  <BackgroundWrapper>
    <Blob />
  </BackgroundWrapper>
);
