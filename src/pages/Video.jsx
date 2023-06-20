import { styled } from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "../components/Comments";
import Card from "../components/Card";
import ProfileImg from "../assets/avatar.png";


const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0;
`;
const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.div`
  background-color: #0061ab;
  font-weight: 500;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 8px 24px;
  height: max-content;
  cursor: pointer;
`;

export default function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="1205"
            height="630"
            src="https://www.youtube.com/embed/9lTj7JkTSGo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>عنوان الفيديو</Title>
        <Details>
          <Info>المشاهدات • المدة</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon />
              123
            </Button>
            <Button>
              <ThumbDownIcon /> لم يعجبني
            </Button>
            <Button>
              <ShareIcon />
              مشاركة
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={ProfileImg} />
            <ChannelDetail>
              <ChannelName>صانع المحتوي</ChannelName>
              <ChannelCounter>عدد المتابعين</ChannelCounter>
              <Description>وصف الفيديو</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>متابعة</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
}
