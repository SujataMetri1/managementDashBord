import React from 'react'
 import { useState, useMemo, useCallback } from "react";

function UsememoUseCallback() {
  const [count, setCount] = useState(0);
  const expensiveValue = useMemo(() => {
    return count * 10;
  }, [count]);
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <h1>{expensiveValue}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
 

export default UsememoUseCallback