import { useState, useCallback, memo, FC } from "react";
import { Button } from "antd";

const Index = () => {
  let [count, setCount] = useState(0);
  let [flag, setFlag] = useState(true);

  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <TestButton  onClick={() => setCount((v) => v + 1)}>普通点击</TestButton>
      <TestButton  onClick={add}>useCallback点击</TestButton>
      <div>数字：{count}</div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        切换{JSON.stringify(flag)}
      </Button>
    </>
  );
};

type testButtonPropsType = {
  children: string,
  onClick: ()=>any
}
const TestButton:FC<testButtonPropsType> = memo(({ children, onClick }) => {
  console.log(children);
  return (
    <Button
      type="primary"
      onClick={onClick}
      style={children === "useCallback点击" ? { marginLeft: 10 } : undefined}
    >
      {children}
    </Button>
  );
});

export default Index;