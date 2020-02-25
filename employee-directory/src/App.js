import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Employee from "./components/Employee";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div clasName="App">
      <Wrapper>
        <Container fixed>
          <Employee />
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;
