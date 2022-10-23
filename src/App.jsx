export const App = () => {
  const onClickButton = () => {
    alert();
  };

  //CSS Object
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };

  return (
    <>
      <h1 style={{ color: "orange" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
