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
const Heading = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
`;
const Source = styled.input`
  margin-top: 16px;
`;
const Thumbnail = styled.input``;
const Title = styled.input``;
const UploadBtn = styled.button``;

export default function Upload() {
  return (
    <Container>
      <Wrapper>
        <Heading>رفع فيديو جديد</Heading>
        <Source type="file" name="videosource" accept="video/*" />
        <Thumbnail type="file" name="thumbnail" accept="image/*" />
        <Title type="text" />
        <UploadBtn>رفع الفيديو</UploadBtn>
      </Wrapper>
    </Container>
  );
}
