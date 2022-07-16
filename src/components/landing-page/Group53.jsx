import React from 'react';
import styled from 'styled-components';
import { Museosansrounded500NormalWhite15px, Border2pxWhite } from '../../styledMixins';

function Group53() {
  return (
    <Group5>
      <EShape15 src="/landing-page/headset.svg" />
      <Support>Support</Support>
    </Group5>
  );
}

const Group5 = styled.div`
  ${Border2pxWhite}
  height: 46px;
  margin-left: 18px;
  margin-top: 2px;
  display: flex;
  padding: 7px 24.4px;
  align-items: flex-start;
  min-width: 149px;
  border-radius: 22.83px;
`;

const EShape15 = styled.img`
  width: 24px;
  height: 19px;
  align-self: center;
  margin-bottom: 4.96px;
  object-fit: cover;
`;

const Support = styled.div`
  ${Museosansrounded500NormalWhite15px}
  min-height: 20px;
  margin-left: 15px;
  letter-spacing: 0;
  line-height: 30.4px;
  white-space: nowrap;
`;

export default Group53;
