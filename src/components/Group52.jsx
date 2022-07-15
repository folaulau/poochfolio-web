import React from "react";
import styled from "styled-components";
import { Museosansrounded500NormalMetallicSe } from "../styledMixins";


function Group52() {
  return (
    <Group5Copy>
      <Login>Login</Login>
    </Group5Copy>
  );
}

const Group5Copy = styled.div`
  height: 46px;
  margin-left: 698px;
  margin-bottom: 6.34px;
  display: flex;
  padding: 8px 37.4px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 118px;
  background-color: var(--twilight-blue);
  border-radius: 22.83px;
`;

const Login = styled.div`
  ${Museosansrounded500NormalMetallicSe}
  min-height: 20px;
  letter-spacing: 0;
  line-height: 30.4px;
  white-space: nowrap;
`;

export default Group52;
