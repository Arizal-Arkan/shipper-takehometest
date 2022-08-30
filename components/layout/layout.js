import React from 'react'
import Styled from "styled-components";

// Components
import Header from "./header";
import Nav from "./navigation";

//Style
const Container = Styled.div`
    display: grid;
    grid-template-columns: 20% auto;
    height: 90vh;
`;

const Main = Styled.main `
  background: #fafafa;
  padding: 30px;
  overflow: hidden;
`

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <Nav />
        <Main>{children}</Main>
      </Container>
    </>
  );
}

export default React.memo(Layout)