import React from 'react';
import Counter from '../../features/counter/Counter';
import styled from 'styled-components';
const Home = () => {
  return (
    <div>
      <Title>Viterjs-template</Title>
      <SubTitle>React + Redux + Styled-Components + Axios + ESlint + Prettier</SubTitle>
      <Counter />
    </div>
  );
};

const Title = styled.h1`
  color: var(--secondaryColor);
  font-size: 4rem;
  text-align: center;
  margin-top: 4rem;
`;
const SubTitle = styled.h2`
  color: var(--lightGrey);
  font-size: 2rem;
  text-align: center;
  margin: 4rem;
`;

export default Home;
