import { styled } from "styled-components";
import UploadIcon from "@mui/icons-material/Upload";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 96px);
  padding: 20px 5%;
`;
const Wrapper = styled.div`
  width: 700px;
  background: ${({ theme }) => theme.neutral};
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.border};
  @media screen and (max-width: 420px) {
    width: 90%;
  }
`;
const Heading = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
  margin-bottom: 24px;
`;
const Source = styled.input`
  display: none;
`;
const Thumbnail = styled.input`
  display: none;
`;
const Uploader = styled.div``;
const UploaderLabel = styled.label`
  background-color: ${({ theme }) => theme.bg};
  display: block;
  padding: 8px 12px;
  border-radius: 24px;
  margin-top: 16px;
  line-height: 25px;
  border: 1px solid ${({ theme }) => theme.border};
  position: relative;
  color: ${({ theme }) => theme.text};
  padding-right: 140px;
  cursor: pointer;
  &::before {
    position: absolute;
    content: "تصفح الملفات";
    right: -2px;
    top: -2px;
    width: 115px;
    height: 107%;
    line-height: 43px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.neutral};
    cursor: pointer;
    text-align: center;
    border-radius: 0 24px 24px 0;
  }
`;
const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 90%; */
  gap: 16px;
  margin: 16px 0;
`;
const MetadataLabel = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;
const Title = styled.div``;
const TitleInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 12px;
  margin-top: 4px;
  font-weight: 600;
  font-family: inherit;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  background: transparent;
  &:focus {
    border-color: ${({ theme }) => theme.text};
  }
`;
const Description = styled.div``;
const DescriptionInput = styled.textarea`
  width: 100%;
  font-size: 16px;
  padding: 8px 12px;
  margin-top: 4px;
  font-family: inherit;
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  background: transparent;
  height: 208px;
  &:focus {
    border-color: ${({ theme }) => theme.text};
  }
`;
const Tags = styled.div``;
const TagsInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 8px 12px;
  margin-top: 4px;
  font-family: inherit;
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  outline: none;
  background: transparent;
  &:focus {
    border-color: ${({ theme }) => theme.text};
  }
`;
const UploadBtn = styled.button`
  font-family: inherit;
  display: inline-flex;
  outline: none;
  border: none;
  margin-top: 8px;
  color: ${({ theme }) => theme.neutral};
  background-color: ${({ theme }) => theme.primary};
  padding: 8px 24px;
  border-radius: 24px;
  font-weight: 600;
  cursor: pointer;
  gap: 5px;
`;

export default function Upload() {
  return (
    <Container>
      <Wrapper>
        <Heading>رفع فيديو جديد</Heading>
        <Uploader>
          <Source
            type="file"
            id="uploadvideo"
            name="videosource"
            accept="video/*"
          />
          <UploaderLabel htmlFor="uploadvideo">
            إختيار مصدر الفيديو
          </UploaderLabel>
        </Uploader>
        <Uploader>
          <Thumbnail
            type="file"
            id="uploadimg"
            name="thumbnail"
            accept="image/*"
          />
          <UploaderLabel htmlFor="uploadimg">
            إختيار الصورة المصغرة
          </UploaderLabel>
        </Uploader>
        <Metadata>
          <Title>
            <MetadataLabel htmlFor="title">عنوان الفيديو</MetadataLabel> <br />
            <TitleInput type="text" id="title" name="title" />
          </Title>
          <Description>
            <MetadataLabel htmlFor="description">وصف الفيديو</MetadataLabel>{" "}
            <br />
            <DescriptionInput id="description" name="description" />
          </Description>
          <Tags>
            <MetadataLabel htmlFor="tags">الكلمات المفتاحية</MetadataLabel>{" "}
            <br />
            <TagsInput type="text" id="tags" name="tags" />
          </Tags>
        </Metadata>
        <UploadBtn>
          <UploadIcon />
          رفع الفيديو
        </UploadBtn>
      </Wrapper>
    </Container>
  );
}
