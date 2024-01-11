import { useState } from "react";
import { Button } from "antd";


const Index = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({ number: 0 });
  console.log('eeee')

  return (
    <>
      <div>数字：{count}</div>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        第一种方式+1
      </Button>
      
      <div>对象形式：{state.number}</div>
      <Button
        type="primary"
        onClick={() => {
          state.number++;
          setState(state);
        }}
      >
        点击+1
      </Button>
    </>
  );
};



export default  Index;