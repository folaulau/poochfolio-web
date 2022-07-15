import React from 'react';
import styled from 'styled-components';
import {
  Museosansrounded700NormalGraniteGra,
  Museosansrounded900NormalGraniteGra,
} from '../styledMixins';

function Group15(props) {
  const { overlapGroup, strokeEffect, eShape2376 } = props;

  return (
    <Group15Copy>
      <AvailableHours>Available Hours</AvailableHours>
      <OverlapGroup3>
        <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
          <StrokeEffect src={strokeEffect} />
        </OverlapGroup>
        <EShape2376 src={eShape2376} />
        <X0900am>09:00am</X0900am>
        <X0500pm>05:00pm</X0500pm>
        <To>to</To>
      </OverlapGroup3>
    </Group15Copy>
  );
}

const Group15Copy = styled.div`
  width: 969px;
  margin-top: 71px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 98px;
`;

const AvailableHours = styled.div`
  ${Museosansrounded900NormalGraniteGra}
  // margin-top: -35px;
  min-height: 24px;
  margin-left: 4.93px;
  letter-spacing: 0;
  line-height: 91.4px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  ${Museosansrounded700NormalGraniteGra}
  width: 1014px;
  height: 107px;
  position: relative;
  margin-top: 14px;
  margin-left: -22.5px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 107px;
  top: 0;
  left: 0;
  display: flex;
  padding: 12.5px 22.5px;
  align-items: flex-start;
  min-width: 1014px;
  background-size: cover;
  background-position: 50% 50%;
`;

const StrokeEffect = styled.img`
  width: 969px;
  height: 62px;
  object-fit: cover;
`;

const EShape2376 = styled.img`
  position: absolute;
  width: 519px;
  height: 8px;
  top: 41px;
  left: 452px;
  object-fit: cover;
`;

const X0900am = styled.div`
  position: absolute;
  top: 1px;
  left: 53px;
  letter-spacing: 0;
  line-height: 91.4px;
  white-space: nowrap;
`;

const X0500pm = styled.input`
  position: absolute;
  top: 1px;
  left: 552px;
  letter-spacing: 0;
  line-height: 91.4px;
  white-space: nowrap;
`;

const To = styled.div`
  position: absolute;
  top: 1px;
  left: 498px;
  letter-spacing: 0;
  line-height: 91.4px;
  white-space: nowrap;
`;

export default Group15;
