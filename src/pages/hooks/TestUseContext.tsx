import { useState, createContext, useContext } from "react";
import { Button } from "antd";

const CountContext = createContext(-1);

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>父组件中的count：{count}</div>
      <Button type="primary" onClick={() => setCount((v) => v + 1)}>
        点击+1
      </Button>
      <CountContext.Provider value={count}>
        <Child />
      </CountContext.Provider>
    </>
  );
};

const Child = () => {
  const countChild = useContext(CountContext);

  return (
    <div style={{ marginTop: 10 }}>
      子组件获取到的count: {countChild}
      <Son />
    </div>
  );
};

const Son = () => {
  const countSon = useContext(CountContext);

  return <div style={{ marginTop: 10 }}>孙组件获取到的count: {countSon}</div>;
};

export default Index;