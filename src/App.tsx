import { useState } from 'react'

function Button() {
  // let clicked = 0; // 매 렌더링마다 초기화가 되어버림
  const[clicked, setClicked] = useState(0);

  const handleClick = () => {
    console.log("clicked"); // 브라우저 개발자 도구에 출력
    // clicked++;
    setClicked(clicked + 1);
  };

  return <button onClick={handleClick}>클릭 {clicked}번</button>;
}

function App() {
  return <div>안녕 리엑트 <Button /><Button /></div>;
}

export default App
