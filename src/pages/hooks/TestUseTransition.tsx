import { useState, useTransition } from "react";
import { Input } from "antd";

const Index = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  return (
    <>
      <div>Hooks！</div>
      <Input
        value={input}
        onChange={(e) => {
          setInput(e.target.value as string);
          startTransition(() => {
            const res:any = [];
            for (let i = 0; i < 10000; i++) {
              res.push(e.target.value);
            }
            setList(res);
          });
        }}
      />
      {isPending ? (
        <div>加载中...</div>
      ) : (
        list.map((item, index) => <div key={index}>{item}</div>)
      )}
    </>
  );
};

export default Index;