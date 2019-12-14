import React from "react";
import styled from "styled-components";
import AccountItem from "./AccountItem";

const listData = {
  totalMoney: 100000,
  list: [
    {
      id: 1,
      title: "식비",
      dec: 5000,
      total: 95000
    },
    {
      id: 2,
      title: "교통비",
      dec: 2000,
      total: 93000
    },
    {
      id: 3,
      title: "용돈",
      inc: 10000,
      total: 103000
    }
  ]
};

const AccountListBlock = styled.div``;

function AccountList() {
  return (
    <>
      <h2>
        <span>내용</span>
        <span>입금</span>
        <span>지출</span>
        <span>잔액</span>
      </h2>
      <ul>
        {listData["list"].map(list => (
          <AccountItem list={list} />
        ))}
      </ul>
    </>
  );
}

export default AccountList;
