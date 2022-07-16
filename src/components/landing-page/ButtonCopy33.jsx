import React from 'react';
import styled from 'styled-components';
import { Museosansrounded900NormalMetallicSe } from '../../styledMixins';
import { Link } from 'react-router-dom';
function ButtonCopy33(props) {
  const { className } = props;

  return (
    <Link
      to="/signup"
      style={{
        position: 'absolute',
        height: '68px',
        top: '658px',
        left: '1px',
        display: 'flex',
        padding: '10.9px 91.2px',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        minWidth: '247px',
        backgroundColor: '#95e8f7',
        borderRadius: '33.95px',
        boxShadow: '-9.184850467946473e-16px 15px 20px #00a3ce26',
      }}
    >
      <SIGNUP className="sign-up-1">SIGN UP</SIGNUP>
    </Link>
  );
}

const ButtonCopy31 = styled.div`
  position: absolute;
  height: 68px;
  top: 449px;
  left: 0;
  display: flex;
  padding: 10.9px 91.2px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 247px;
  background-color: var(--anakiwa);
  border-radius: 33.95px;
  box-shadow: -9.184850467946473e-16px 15px 20px #00a3ce26;

  &.button-copy-3.button-copy {
    top: 658px;
    left: 1px;
  }

  &.button-copy-3.button-copy-2 {
    top: 849px;
    left: 1837px;
  }
`;

const SIGNUP = styled.div`
  ${Museosansrounded900NormalMetallicSe}
  min-height: 20px;
  min-width: 62px;
  text-align: center;
  letter-spacing: 0;
  line-height: 47.2px;
  white-space: nowrap;
`;

export default ButtonCopy33;
