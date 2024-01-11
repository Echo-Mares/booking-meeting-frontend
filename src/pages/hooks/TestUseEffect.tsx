import { useState, useEffect } from "react";
import { Button } from "antd";

const Index = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Does count change");
  },[count]);

  return (
    <>
      <div>
        number: {number} count {count}
      </div>
      <Button type="primary" onClick={() => setNumber(number + 1)}>
        number +1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => setCount((v) => v + 1)}
      >
        count + 1
      </Button>
    </>
  );
};

export default  Index;