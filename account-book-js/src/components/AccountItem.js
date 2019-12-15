import React from "react";
import styled from "styled-components";

const AccountItemBlock = styled.li`
  line-height: 30px;
  display: flex;
  justify-content: space-between;
`;

const AccountItemDecrease = styled.span`
  color: #ff366a;
`;

const AccountItemIncrease = styled.span`
  color: #22dab3;
`;

function AccountItem({ list }) {
  const { id, dec, inc, title } = list;
  const isDecrease = dec && !inc;

  return (
    <AccountItemBlock key={id}>
      <span>{title}</span>
      {isDecrease ? (
        <AccountItemDecrease>{dec}</AccountItemDecrease>
      ) : (
        <AccountItemIncrease>{inc}</AccountItemIncrease>
      )}
    </AccountItemBlock>
  );
}

export default AccountItem;
