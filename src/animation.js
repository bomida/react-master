import styled, { keyframes } from "styled-components"

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotatingAni = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0%;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50%;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0%;
  }
`;

const Emoji = styled.span`
    font-size: 40px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blueviolet;
  animation: ${rotatingAni} 2s linear infinite;
  ${Emoji}:hover {
    font-size: 80px;
  }
`;

function Animations() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">👻</Emoji>
      </Box>
    </Wrapper>
  );
}

export default Animations;


// 📘 Animations

// 스타일 컴포넌트에서는 keyframes helper를 사용해
// 앱 전체에서 사용할 수 있는 고유한 인스턴스를 생성한다.
// class 이름처럼 animation이름도 자유롭게 작성할 수 있다.

// hover
// 편의를 위해 styled component안에 &:hover{..}를 작성해준다.
// 기존 css처럼 styled component 바깥에 tag:hover{...}을 작성할 수도 있다.

// Component안에 일반 태그에 대한 스타일링
// styled component안에 tag{...}를 작성해준다.

// 만약 as로 태그 변경 가능성이 있거나하는 태그 의존성에서 벗어나고 싶다면
// style component를 생성한 뒤 태그 대신
// ${style component name} {...}을 작성해준다.