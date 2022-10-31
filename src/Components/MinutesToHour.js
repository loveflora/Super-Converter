import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const onChange = (e) => {
    setAmount(e.target.value);
    // 값 update
  };

  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  // 현재 값을 받아서 반대값을 내놓음
  return (
    <Container>
      <Main>
        <label htmlFor="minutes">Minutes </label>
        {/* for : label과 input 연결 */}
        <Input
          value={flipped ? amount * 60 : amount}
          // input 과 state data 연결
          // UI에 보여줌
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          // update 해줌
          disabled={flipped}
        />
        <Span id="min"> min</Span>
        <p></p>
        <label htmlFor="hours">Hours </label>
        <Input
          value={flipped ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          // onChange event 없어서, 입력할 수 X
          disabled={!flipped}
          onChange={onChange}
        />
        <Span> hour</Span>
      </Main>
      <Footer>
        <p></p>
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
