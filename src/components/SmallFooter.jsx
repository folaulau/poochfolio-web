import React from 'react';
import styled from 'styled-components';
import { Museosansrounded500NormalGraniteGra } from '../styledMixins';

function SmallFooter() {
  return (
    <Powered>
      <PoochTechnologiesInc>Pooch Technologies Inc</PoochTechnologiesInc>
      <PrivacyPolicyTermsOfUse>
        Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp; Terms of Use
      </PrivacyPolicyTermsOfUse>
    </Powered>
  );
}

const Powered = styled.div`
  ${Museosansrounded500NormalGraniteGra}
  position: absolute;
  width: 100%;
  height: 42px;
  top: 929px;
  left: 3038px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: var(--lily-white);
`;

const PoochTechnologiesInc = styled.div`
  // margin-bottom: -30.5px;
  width: 122px;
  height: 25px;
  margin-left: 175px;
  letter-spacing: 0.5px;
  // line-height: 100px;
  white-space: nowrap;
`;

const PrivacyPolicyTermsOfUse = styled.p`
  // margin-bottom: -30.5px;
  width: 153px;
  height: 25px;
  margin-right: 177.5px;
  text-align: right;
  letter-spacing: 0.5px;
  // line-height: 100px;
  white-space: nowrap;
`;

export default SmallFooter;
