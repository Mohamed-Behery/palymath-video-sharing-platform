import { styled } from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "../components/Comments"
import Card from "../components/Card"

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
const Subscribe = styled.button`
background-color: #cc1a00;
font-weight: 500;
color: #fff;
border: none;
border-radius: 3px;
padding: 10px 20px;
height: max-content;
cursor: pointer;
`;

export default function Video() {
  return (
    <Container>
    <Content>
      <VideoWrapper>
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/9lTj7JkTSGo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </VideoWrapper>
      <Title>Test Video</Title>
      <Details>
        <Info>13K views • 2 hours ago</Info>
        <Buttons>
          <Button>
            <ThumbUpIcon />
            123
          </Button>
          <Button>
            <ThumbDownIcon /> Dislike
          </Button>
          <Button>
            <ShareIcon />
            Share
          </Button>
          <Button>
            <SaveAltIcon />
            Save
          </Button>
        </Buttons>
      </Details>
      <Hr />
      <Channel>
        <ChannelInfo>
          <Image />
          <ChannelDetail>
            <ChannelName>Mohamed Behery</ChannelName>
            <ChannelCounter>13K Subscribers</ChannelCounter>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur fuga nihil odit asperiores, facere, exercitationem
              ut ea optio adipisci incidunt eligendi tenetur doloribus error
              nostrum
            </Description>
          </ChannelDetail>
        </ChannelInfo>
        <Subscribe>SUBSCRIBE</Subscribe>
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
