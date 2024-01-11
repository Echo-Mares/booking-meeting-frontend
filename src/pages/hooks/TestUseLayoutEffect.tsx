import { useState, useEffect, useLayoutEffect } from "react";

const Index = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  // useEffect 执行顺序：setCount 设置 => 在 DOM 上渲染 => useEffect 回调 => setCount 设置 => 在 DOM 上渲染。
  // useLayoutEffect 执行顺序：setCount 设置 => useLayoutEffect 回调 => setCount 设置 => 在 DOM 上渲染。
  useEffect(() => {
    console.log("useEffect");
    if (count === 0) {
      setCount(10 + Math.random() * 100);
    }
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    if (count1 === 0) {
      setCount1(10 + Math.random() * 100);
    }
  }, [count1]);

  return (
    <>
      <div>hello Hooks！</div>
      <div>useEffect的count:{count}</div>
      <div>useLayoutEffect的count:{count1}</div>
    </>
  );
};

export default Index;
