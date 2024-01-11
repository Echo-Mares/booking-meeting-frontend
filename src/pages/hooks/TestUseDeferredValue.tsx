import { useState, useDeferredValue } from "react";
import { Input } from "antd";

const getList = (key:string) => {
  const arr = [];
  for (let i = 0; i < 10000; i++) {
    if (String(i).includes(key)) {
      arr.push(<li key={i}>{i}</li>);
    }
  }
  return arr;
};

const Index = () => {
  //订阅
  const [input, setInput] = useState("");
  const deferredValue: string = useDeferredValue(input);
  console.log("value：", input);
  console.log("deferredValue：", deferredValue);

  return (
    <>
      <div>Hooks！</div>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <ul>{deferredValue ? getList(deferredValue) : ''}</ul>
      </div>
    </>
  );
};

export default Index;
