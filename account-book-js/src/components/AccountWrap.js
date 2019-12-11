import React from "react";
import styled from "styled-components";

const AccountWrapBlock = styled.section`
  width: 960px;
  margin: 0 auto;
`;

function AccountWrap({ children }) {
  return <AccountWrapBlock>{children}</AccountWrapBlock>;
}

export default AccountWrap;
