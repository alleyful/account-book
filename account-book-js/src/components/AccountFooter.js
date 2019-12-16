import React from "react";
import styled from "styled-components";

const AccountFooterBlock = styled.section`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  border-top: 1px solid #efefef;
`;

function AccountFooter() {
  return (
    <AccountFooterBlock>
      <span>잔액</span>
      <span>95000</span>
    </AccountFooterBlock>
  );
}

export default AccountFooter;
