import React from 'react';
import styled from 'styled-components';
import { Border3pxWhite } from '../../styledMixins';

function Support(props) {
  const { src } = props;

  return (
    <Support1>
      <EShape31 src={src} />
    </Support1>
  );
}

const Support1 = styled.div`
  ${Border3pxWhite}
  height: 92px;
  align-self: center;
  margin-left: 59px;
  margin-top: 160.33px;
  display: flex;
  padding: 16.4px 19.9px;
  align-items: flex-start;
  min-width: 92px;
  background-color: var(--charlotte);
  border-radius: 46px;
  box-shadow: -9.184850467946473e-16px 15px 20px #00617b26;
`;

const EShape31 = styled.img`
  width: 48px;
  height: 54px;
  object-fit: cover;
`;

export default Support;
