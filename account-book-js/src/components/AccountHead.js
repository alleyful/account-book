import React from "react";
import styled from "styled-components";

const AccountHeadBlcok = styled.section`
  background: #faa;
  color: #fff;
  font-size: 30px;
  line-height: 1.8em;
  text-align: center;
`;

function AccountHead() {
  return (
    <AccountHeadBlcok>
      <h1>Account Book</h1>
    </AccountHeadBlcok>
  );
}

export default AccountHead;
