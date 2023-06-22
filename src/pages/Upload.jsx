import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 96px);
`;
const Wrapper = styled.div`
  width: 700px;
  background: ${({ theme }) => theme.neutral};
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.border};
  @media screen and (max-width: 420px) {
    width: 90%;
  }
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
`;

export default function Upload() {
  return (
    <Container>
      <Wrapper>
        <Title>رفع فيديو جديد</Title>
      </Wrapper>
    </Container>
  );
}
