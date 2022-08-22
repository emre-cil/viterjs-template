import styled from 'styled-components';

const Spinner = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--medGrey);
  animation: spinner 0.5s linear infinite;
  margin: 2rem auto;
  margin-bottom: 0;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
