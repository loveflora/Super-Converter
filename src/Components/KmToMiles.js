import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function KmToMiles() {
  const [data, setData] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const onChange = (e) => {
    setData(e.target.value);
  };

  const reset = () => setData(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };

  return (
    <Container>
      <Main>
        <label htmlFor="km">Km </label>
        <Input
          value={flipped ? Math.round(data / 0.621) : data}
          id="km"
          placeholder="Km"
          type="number"
          onChange={onChange}
          disabled={flipped}
        />
        <Span> km</Span>
        <p></p>
        <label htmlFor="miles">Miles </label>
        <Input
          value={flipped ? data : data * 0.621}
          id="miles"
          placeholder="Miles"
          type="number"
          onChange={onChange}
          disabled={!flipped}
        />
        <Span> miles</Span>
      </Main>
      <Footer>
        <p> </p>
        <ResetBtn onClick={reset}> Reset </ResetBtn>
        <span> </span>
        <FlipBtn onClick={onFlip}> {flipped ? "Turn back" : "Flip"} </FlipBtn>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 50%; */
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  /* height: 100%; */
`;

const Input = styled.input`
  display: flex;
  /* flex-direction: column; */
  /* position: relative; */
  justify-content: center;
  align-items: center;
  width: 200px;
  /* height: 100%; */
  /* margin: 0 50%; */
`;

const Span = styled.span`
  display: flex;
  width: 200px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  display: block;
  /* position: absolute; */
  /* top: 500px; */
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
`;

const ResetBtn = styled.button`
  display: inline-block;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  color: white;
  background-color: grey;
  width: 40%;
  height: 30px;
  margin: 10px 0px 0px 40px;
  border-radius: 8px;
`;

const FlipBtn = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: grey;
  width: 40%;
  height: 30px;
  border-radius: 8px;
  margin: 10px 40px 0px 0px;
`;
