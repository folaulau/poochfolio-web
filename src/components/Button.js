import React from 'react';
import styled from 'styled-components';
import { Museosansrounded700NormalWhite15px, Border1pxSkyBlue } from '../styledMixins';

function Button() {
  return (
    <ButtonCopy5>
      <CONTINUE>CONTINUE</CONTINUE>
    </ButtonCopy5>
  );
}

const ButtonCopy5 = styled.div`
  ${Border1pxSkyBlue}
  position: absolute;
  height: 56px;
  top: 1207px;
  left: 3495px;
  display: flex;
  padding: 0 231.8px;
  align-items: flex-start;
  min-width: 545px;
  background-color: var(--metallic-seaweed);
  border-radius: 28.24px;
  box-shadow: -9.184850467946473e-16px 15px 20px #00a3ce26;
`;

const CONTINUE = styled.div`
  ${Museosansrounded700NormalWhite15px}
  min-height: 20px;
  margin-top: -22.76px;
  min-width: 80px;
  text-align: center;
  letter-spacing: 0;
  line-height: 100px;
  white-space: nowrap;
`;

export default Button;
