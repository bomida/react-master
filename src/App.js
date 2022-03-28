import './App.css';
import StyledComponent from "./styled-component";
import Animations from "./animation";
import Theme from "./Theme";

function App() {
  return (
    <>
      <Theme />
      {/* <Animations />
      <hr />
      <StyledComponent /> */}
    </>
  );
}

export default App;

// 📘 TypeScript

// 타입스크립트는 strongly-typed 언어이다.
// strongly-typed 란, 프로그래밍 언어가 작동하기 전에 type을 확인하는 것이다.
// `npx create-react-app {project-name} --template typescript`