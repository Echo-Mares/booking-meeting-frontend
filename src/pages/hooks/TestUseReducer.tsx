import { useReducer, FC } from "react";
import { Button } from "antd";

type actionType = {
  type: string;
  payload: number;
};
const Index = () => {
  const [count, dispatch] = useReducer((state: number, action: actionType) => {
    switch (action?.type) {
      case "add":
        return state + action?.payload;
      case "sub":
        return state - action?.payload;
      case "current":
        return state;
      default:
        return state;
    }
  }, 0);

  return (
    <>
      <div>count:{count}</div>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => dispatch({ type: "add", payload: 1 })}
      >
        加+1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => dispatch({ type: "sub", payload: 1 })}
      >
        减1
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 10 }}
        onClick={() => dispatch({ type: "current", payload: 0 })}
      >
        current
      </Button>
      <div>son======数据变化了吗</div>
      <Son count={count} />
    </>
  );
};

type sonPropsType = {
  count: number;
};

//  在 reducer 中，如果返回的 state 和之前的 state 值相同，那么组件将不会更新
const Son: FC<sonPropsType> = (props) => {
  const { count } = props;
  console.log("子组件发生更新");
  return (
    <>
      <div>在子组件的count：{count}</div>
    </>
  );
};

export default Index;
