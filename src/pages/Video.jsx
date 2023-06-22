import { styled } from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "../components/Comments";
import Card from "../components/Card";
import ProfileImg from "../assets/avatar.png";
import Player from "../components/VideoPlayer/Player";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
const Content = styled.div`
  flex-basis: 69%;
  @media screen and (max-width: 1320px) {
    flex-basis: 100%;
  }
`;
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
  color: ${({ theme }) => theme.text};
  font-weight: 300;
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 440px) {
    font-size: 12px;
    gap: 10px;
  }
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: ${({ theme }) => theme.border};
  margin: 15px 0;
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
  color: ${({ theme }) => theme.text};
  font-weight: 300;
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Follow = styled.div`
  background-color: ${({ theme }) => theme.primary};
  font-weight: 500;
  color: ${({ theme }) => theme.neutral};
  border: none;
  border-radius: 24px;
  padding: 8px 24px;
  height: max-content;
  cursor: pointer;
`;
const Recommendation = styled.div`
  flex-basis: 29%;
  @media screen and (max-width: 1050px) {
    flex-basis: 100%;
  }
`;

export default function Video() {
  return (
    <Container>
      <Content>
        <Player />
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
          <Follow>متابعة</Follow>
        </Channel>
        <Hr />
        <Comments />
        <Hr />
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
