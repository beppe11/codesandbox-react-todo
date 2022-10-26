import { useState } from "react";
import { ColoredMessage as CM } from "./components/ColoredMessage";
import { useEffect } from "react";

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    alert();
    //setNum(num + 1);
    setNum((prev) => prev + 1);
  };

  useEffect(() => {
    alert();
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <CM color="blue">お元気ですか？</CM>
      <CM color="pink">元気です。</CM>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
