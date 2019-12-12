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

const AccountListBlock = styled.div``;

function AccountList() {
  return (
    <ul>
      {listData["list"].map(list => (
        <AccountItem list={list} />
      ))}
    </ul>
  );
}

export default AccountList;
