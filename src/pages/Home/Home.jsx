import React from 'react';
import Counter from '../../features/counter/Counter';
const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '4rem' }}>Viterjs-template</h1>
      <h3 style={{ textAlign: 'center', marginTop: '4rem' }}>
        React + Redux + Styled-Components + Axios + ESlint + Prettier
      </h3>

      <Counter />
    </div>
  );
};

export default Home;
