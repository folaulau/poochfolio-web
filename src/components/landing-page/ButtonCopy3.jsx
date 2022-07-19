import React from 'react';
import styled from 'styled-components';
import { Museosansrounded900NormalMetallicSe } from '../../styledMixins';
import { Link } from 'react-router-dom';
function ButtonCopy3(props) {


  return (
    <Link
      to="/signup"
      style={{
        position: 'absolute',
        height: '68px',
        top: '449px',
        left: 60,
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


const SIGNUP = styled.div`
  ${Museosansrounded900NormalMetallicSe}
  min-height: 20px;
  min-width: 62px;
  text-align: center;
  letter-spacing: 0;
  line-height: 47.2px;
  white-space: nowrap;
`;

export default ButtonCopy3;
