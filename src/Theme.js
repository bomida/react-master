import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
`;

const Title = styled.h1`
  font-size: 80px;
  color: ${props => props.theme.textColor};
`

function Theme() {
  return (
    <Wrapper>
      <Title>Empty</Title>
    </Wrapper>
  );
}

export default Theme;


// 📘 Themes

// styled component는 <ThemeProvider> 컴포넌트를 통해 전체 테마를 지원한다.
// 이 컴포넌트는 컨텍스트 API를 통해 자체 아래에 있는 모든 React 구성 요소에 테마를 제공한다.
// 렌더 트리에서 모든 스타일 구성 요소는 여러 수준의 깊이에 있는 경우에도 제공된 테마에 엑세스할 수 있다.

// <ThemeProvider theme={...}>
//   <Components>
// </ThemeProvider>