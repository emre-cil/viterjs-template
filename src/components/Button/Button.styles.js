import styled from 'styled-components';
export const Wrapper = styled.button`
  display: block;
  width: 25%;
  height: 60px;
  min-width: 200px;
  margin: 20px auto;
  font-size: var(--fontBig);
  background-color: var(--darkGrey);
  color: var(--white);
  border: none;
  outline: none;
  border-radius: 2rem;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 768px) {
    font-size: var(--fontMed);
  }
`;
