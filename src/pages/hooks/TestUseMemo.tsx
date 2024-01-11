import { useState, useMemo } from "react";
import { Button } from "antd";

//  const cacheData = useMemo(fn, deps) 

const usePow = (list:number[]) => {
  return useMemo(()=>{
    list.map((item) => {
      console.log("我是usePow");
      return Math.pow(item, 2);
    });
  },[])
};
const Index = () => {
  const [flag, setFlag] = useState(true);

  const data = usePow([1, 2, 3]);
  // setFlag 切换和usePow毫无关系，但是usePow的方法每次都会执行
  return (
    <>
      <div>数字集合：{JSON.stringify(data)}</div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        状态切换{JSON.stringify(flag)}
      </Button>
    </>
  );
};


export default Index;
