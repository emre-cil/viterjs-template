import React from 'react';

function useBoolean(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);

  const setTrue = React.useCallback(() => setValue(true), []);
  const setFalse = React.useCallback(() => setValue(false), []);
  const toggle = React.useCallback(() => setValue((x) => !x), []);

  return [value, setTrue, setFalse, toggle];
}

export default useBoolean;
