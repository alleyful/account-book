import React from "react";
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
