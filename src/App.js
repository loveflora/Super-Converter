import React, { useState } from "react";
import "./App.css";
import MinutesToHours from "./Components/MinutesToHour";
import KmToMiles from "./Components/KmToMiles";
import styled from "styled-components";

function App() {
  const [index, setIndex] = useState("0");
  const onSelect = (e) => {
    setIndex(e.target.value);
  };

  return (
    <Container>
      <h1 className="converter">Super Converter</h1>
      {/* <br></br> */}
      <select value={index} onChange={onSelect}>
        <option value="0"> which one ? </option>
        <option value="1"> Minutes & Hours </option>
        <option value="2"> Km & Miles</option>
      </select>
      <hr />
      <Main>
        {index === "1" ? <MinutesToHours /> : null}
        {index === "2" ? <KmToMiles /> : null}
      </Main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  height: 50%;
  flex-direction: column;
  background-color: black;
  color: white;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
  }

  select {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    width: 150px;
    /* margin: 0 100px; */
  }
`;

const Main = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 10px;
  /* height: 100%; */
`;
