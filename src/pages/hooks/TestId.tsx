import { useId } from "react";

const Index = () => {
  const id = useId();

  return <div id={id}>一起学Hooks吧！</div>;
};

export default Index;