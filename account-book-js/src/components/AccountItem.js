import React from "react";
import styled from "styled-components";

const AccountItemBlock = styled.li`
  line-height: 30px;
`;

function AccountItem({ list }) {
  const { id, dec, inc, title } = list;

  return (
    <AccountItemBlock key={id}>
      <span>{title}</span>
      {dec ? <span>{dec}</span> : <span>{inc}</span>}
    </AccountItemBlock>
  );
}

export default AccountItem;
