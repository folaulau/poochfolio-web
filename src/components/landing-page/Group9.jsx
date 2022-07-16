import React from 'react';
import styled from 'styled-components';
import { Museosansrounded500NormalMetallicSe } from '../../styledMixins';
import { Link } from 'react-router-dom';
function Group9() {
  return (
    <Link
      to="/signin"
      style={{
        height: '46px',
        marginLeft: '47px',
        marginTop: '2px',
        display: 'flex',
        padding: '9px 29.4px',
        justifyContent:'flex-end',
        alignItems:'flex-start',
        minWidth:'108px',
        backgroundColor:'#ebfdff',
        borderRadius:'22.83px'
      }}
    >
      <Login>Login</Login>
    </Link>
  );
}



const Login = styled.div`
  ${Museosansrounded500NormalMetallicSe}
  min-height: 20px;
  min-width: 40px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30.4px;
  white-space: nowrap;
`;

export default Group9;
