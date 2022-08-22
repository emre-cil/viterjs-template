import React from 'react';

import { Wrapper } from './Button.styles';

const Button = ({ text, onClickHandler }) => (
  <Wrapper type="button" onClick={onClickHandler}>
    {text}
  </Wrapper>
);

export default Button;
