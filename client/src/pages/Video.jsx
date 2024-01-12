import { styled } from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "../components/Comments";
import Card from "../components/Card";
import ProfileImg from "../assets/avatar.png";
import VideoPlayer from "../components/VideoPlayer";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 20px 5%;
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
const Account = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AccountlInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const UserName = styled.span`
  font-weight: 500;
`;
const FollowersCounter = styled.span`
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
        <VideoPlayer />
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
        <Account>
          <AccountlInfo>
            <ProfileImage src={ProfileImg} />
            <UserDetails>
              <UserName>صانع المحتوي</UserName>
              <FollowersCounter>عدد المتابعين</FollowersCounter>
              <Description>وصف الفيديو</Description>
            </UserDetails>
          </AccountlInfo>
          <Follow>متابعة</Follow>
        </Account>
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
