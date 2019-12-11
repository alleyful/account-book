import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AccountWrap from "./components/AccountWrap";
import AccountHead from "./components/AccountHead";

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
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif!important;
		font-size: 12px;
		background-color: #fff;
		color: white;
		padding-top: 50px;
	}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AccountWrap>
        <AccountHead />
      </AccountWrap>
    </>
  );
}

export default App;
