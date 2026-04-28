import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      console.log("Interval Created:", interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]); // This causes the effect to re-run every second

  return <h1>Count: {count}</h1>;
}import React, { useState, useEffect, useEffectEvent } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // useEffectEvent always has access to the latest 'count' 
  // without being a dependency of the useEffect below.
  const onTick = useEffectEvent(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      onTick(); // Call the stable event function
      console.log("Interval ID (Fixed):", intervalId);
    }, 1000);

    // Cleanup: Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array: runs only once on mount

  return (
    <div>
      <h1>React 19.2: useEffectEvent</h1>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default Counter;