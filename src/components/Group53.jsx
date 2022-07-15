import React from 'react';
import styled from 'styled-components';
import { Museosansrounded500NormalWhite15px, Border2pxWhite } from '../styledMixins';

function Group53() {
  return (
    <Group13Copy>
      <IconCloud src="https://anima-uploads.s3.amazonaws.com/projects/62cb8b245e405a54f0618e96/releases/62cb97f32c5eebfe5ce66cf0/img/file-e-shape-15-1x-png@1x.png" />
      <Support>Support</Support>
    </Group13Copy>
  );
}

const Group13Copy = styled.div`
  ${Border2pxWhite}
  height: 46px;
  margin-left: 23px;
  margin-bottom: 6.34px;
  display: flex;
  padding: 6px 24.4px;
  align-items: flex-start;
  min-width: 149px;
  border-radius: 22.83px;
`;

const IconCloud = styled.img`
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
