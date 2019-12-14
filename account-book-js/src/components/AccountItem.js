import React from "react";
import styled from "styled-components";

const AccountItemBlock = styled.li`
  line-height: 30px;
  display: flex;
  justify-content: space-between;
`;

function AccountItem({ list }) {
  const { id, dec, inc, title, total } = list;

  return (
    <AccountItemBlock key={id}>
      <span>{title}</span>
      {dec ? <span>{dec}</span> : <span>{inc}</span>}
      <span>{total}</span>
    </AccountItemBlock>
  );
}

export default AccountItem;
