import React, { useRef, useState, useMemo, useCallback } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AccountWrap from "./components/AccountWrap";
import AccountHead from "./components/AccountHead";
import AccountList from "./components/AccountList";
import AccountFooter from "./components/AccountFooter";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
		text-decoration: none;
		color: inherit;
	}
	*{
		box-sizing: border-box;
	}
	body{
		font-family: -apple-system, Helvetica, Arial, "hiragino kaku gothic pro", meiryo, "Microsoft YaHei", "ms pgothic", "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif;
		font-size: 12px;
		background-color: #fff;
		padding-top: 50px;
	}
`;

function App() {
  const [inputs, setInputs] = useState({
    title: "",
    money: 0
  });

  const { title, money } = inputs;
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );
  const [list, setList] = useState([
    {
      id: 1,
      title: "식비",
      money: -5000
    },
    {
      id: 2,
      title: "교통비",
      money: -2000
    },
    {
      id: 3,
      title: "용돈",
      money: 10000
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const account = {
      id: nextId.current,
      title,
      money
    };
    setList(list.concat(account));

    setInputs({
      title: "",
      money: 0
    });
    nextId.current += 1;
  }, [list, title, money]);

  return (
    <>
      <GlobalStyle />
      <AccountWrap>
        <AccountHead />
        <AccountList />
        <AccountFooter />
      </AccountWrap>
    </>
  );
}

export default App;
