import React from "react";
import styled from "styled-components";
import AccountItem from "./AccountItem";

const listData = {
  totalMoney: 100000,
  list: [
    {
      id: 1,
      title: "식비",
      dec: 5000
    },
    {
      id: 2,
      title: "교통비",
      dec: 2000
    },
    {
      id: 3,
      title: "용돈",
      inc: 10000
    }
  ]
};

const AccountListBlock = styled.div`
  padding: 20px;
  font-size: 14px;
  line-height: 1.8em;

  & > h2 {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
  }
`;

function AccountList() {
  return (
    <AccountListBlock>
      <h2>
        <span>내용</span>
        <span>금액</span>
      </h2>
      <ul>
        {listData["list"].map(list => (
          <AccountItem list={list} />
        ))}
      </ul>
    </AccountListBlock>
  );
}

export default AccountList;
