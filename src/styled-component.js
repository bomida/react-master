import styled from "styled-components"

const Father = styled.div`
  display: block;
`

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: ${props => props.width};
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Button = styled.button`
  all: unset;
  padding: 10px 25px;
  color: white;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  transition: all .2s ease-in-out;
`;

const Input = styled.input.attrs({ required: true, maxLength: 5 })`
  display: block;
  border: #999 3px solid;
  background-color: lemonchiffon;
`;

function StyledComponent() {
  return (
    <Father>
      <Box bgColor="teal" width="100px"></Box>
      <Box bgColor="tomato" width="200px"></Box>
      <Circle bgColor="teal" width="100px" ></Circle>
      <Button bgColor="skyblue">go to Link</Button>
      <Button as="a" bgColor="orange" href="/">go to Link</Button>
      <Input />
      <Input />
      <Input />
      <Input />
    </ Father>
  );
}

export default StyledComponent;


// 📘 Styled-Component
// `npm i styled-components` 커멘드 해주기
// 상단에 styled 가져오기 `import styled from "styled-components"`
// 편의를 위해 익스텐션 설치 `vscode-styled-components`

// 기초 문법
// const {Component-name} = styled.{Tag}`{css문법대로작성}`;

// Extending Styles 방법
// 다른 컴포넌트의 스타일을 상속하는 새 컴포넌트를 쉽게 만들려면
// styled() 생성자에 구성하면 된다.

// as
// as를 사용하여 엘리먼트를 다른 엘리먼트로 교체를 할 수 있다.
// <Button as="a">

// Attaching additional props
// styled component 생성 시 .attrs({})을 붙여서
// 중괄호 사이에 속성값을 넣을 수 있다. 