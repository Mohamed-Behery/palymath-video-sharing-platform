import { styled } from "styled-components";
import Card from "../components/Card";
import ProfileImg from "../assets/avatar.png";

const Container = styled.div`
padding: 20px 5%;
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
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const UserName = styled.h2`
  font-size: 24px;
  @media screen and (max-width: 430px){
  font-size: 16px;
  }
`;
const FollowersCounter = styled.span`
  margin-top: 5px;
  color: ${({ theme }) => theme.text};
  font-size: 15px;
`;
const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: ${({ theme }) => theme.border};
  margin: 15px 0;
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  @media screen and (max-width: 799px) {
    justify-content: center;
  }
`;

export default function Profile() {
  return (
   <Container>
     <Account>
      <AccountlInfo>
        <ProfileImage src={ProfileImg} />
        <UserDetails>
          <UserName>صانع المحتوي</UserName>
          <FollowersCounter>عدد المتابعين</FollowersCounter>
        </UserDetails>
      </AccountlInfo>
    </Account>
      <Hr />
   <Cards>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
   </Cards>
   </Container>
  );
}
