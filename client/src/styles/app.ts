import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 4px solid grey;
  border-right: 4px solid grey;
  border-bottom: 4px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
