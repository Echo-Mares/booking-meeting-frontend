import React, { useState, useMemo } from "react";
/* 自定义hooks 用于格式化数组将小写转成大写 */
function useFormatList(list:string[]) {
  return useMemo(() => list.map(item => {
      return item.toUpperCase()
  }), [])
}
/* 父组件传过来的list = [ 'aaa' , 'bbb' , 'ccc'  ] */
function Index() {
  const [number, setNumber] = useState(0);
  const newList = useFormatList(["aaa", "bbb", "ccc"]);
  return (
    <div>
      <div className="list">
        {newList.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div className="number">
        <div>{number}</div>
        <button onClick={() => setNumber(number + 1)}>add</button>
      </div>
    </div>
  );
}
export default Index;
