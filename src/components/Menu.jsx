import {styled} from "styled-components"
import ProfileImg from "../assets/avatar.png";
import { Link } from "react-router-dom";
import React from "react"

const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 4.4%;
  width: 300px;
  max-height: 550px;
  overflow: hidden;
  z-index: 999;
`;
const MenuWrapper = styled.div`
  background: ${({ theme }) => theme.bg};
  padding: 15px 20px 5px;
  border: 1px solid ${({ theme }) => theme.border};
  margin: 10px;
  border-radius: 15px;
`;
const UserInfo = styled.div`
  position: relative;
`;
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const ImgWrapper = styled.div`
  width: 55px;
  display: flex;
  align-items: center;
`;
const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuImg = styled.img`
  width: 100%;
  border-radius: 50%;
`
const UserName = styled.span`
  font-weight: 600;
  position: relative;
  bottom: 2px;
  color: ${({theme}) => theme.text};
`;
const Profile = styled(Link)`
  font-size: 15px;
  color: ${({theme}) => theme.primary};
  position: relative;
  top: 3px;
`;
const Hr = styled.hr`
  background: ${({theme}) => theme.border};
  border: 0;
  height: 1px;
  margin: 10px 0;
`;

export default function Menu(props) {
  return (props.trigger) ? (
    <Container>
    <MenuWrapper>
      <UserInfo>
       <ProfileWrapper>
       <ImgWrapper>
      <MenuImg src={ProfileImg} />
       </ImgWrapper>
        <UserDetails>
          <UserName>اسم المستخدم</UserName>
          <Profile to="/profile">الحساب الشخصي</Profile>
        </UserDetails>
       </ProfileWrapper>
      </UserInfo>
      <Hr />
      {props.childern}
    </MenuWrapper>
  </Container>
  ) : "";
}
