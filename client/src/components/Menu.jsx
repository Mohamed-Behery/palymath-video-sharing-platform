import { styled } from "styled-components";
import { Link } from "react-router-dom";
import ProfileImg from "../assets/avatar.png";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LoginIcon from "@mui/icons-material/Login";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import InfoIcon from "@mui/icons-material/Info";

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
  background: ${({ theme }) => theme.neutral};
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
`;
const UserName = styled.span`
  font-weight: 600;
  position: relative;
  bottom: 2px;
  color: ${({ theme }) => theme.text};
`;
const Profile = styled(Link)`
  font-size: 15px;
  color: ${({ theme }) => theme.primary};
  position: relative;
  top: 3px;
`;
const Hr = styled.hr`
  background: ${({ theme }) => theme.border};
  border: 0;
  height: 1px;
  margin: 10px 0;
`;
const LinksWrapper = styled.ul``;
const LinkLi = styled.li`
  display: flex;
  align-items: center;
`;
const LinkContent = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  margin: 5px 0;
  padding: 8px 10px;
  border-radius: 5px;
  &:hover {
    background: ${({ theme }) => theme.bg};
    border: 1px solid ${({ theme }) => theme.border};
  }
`;
const LinkName = styled.span`
  width: 100%;
`;
const Copyrights = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  white-space: nowrap;
`;

export default function Menu(props) {
  return props.trigger ? (
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
        <LinksWrapper>
          <LinkLi>
            <LinkContent to="/">
              <PlayCircleIcon />
              <LinkName>تصفح الفيديوهات</LinkName>
            </LinkContent>
          </LinkLi>
          <LinkLi>
            <LinkContent to="/trending">
              <WhatshotIcon />
              <LinkName>الأعلي مشاهدة</LinkName>
            </LinkContent>
          </LinkLi>
          <LinkLi>
            <LinkContent to="/following">
              <PeopleAltIcon />
              <LinkName>الحسابات التي أتابعها</LinkName>
            </LinkContent>
          </LinkLi>
          <LinkLi>
            <LinkContent to="/login">
              <LoginIcon />
              <LinkName>تسجيل الدخول</LinkName>
            </LinkContent>
          </LinkLi>
          <LinkLi>
            <LinkContent to="/upload">
              <VideoCallIcon />
              <LinkName>رفع فيديو</LinkName>
            </LinkContent>
          </LinkLi>
          <LinkLi>
            <LinkContent to="/about">
              <InfoIcon />
              <LinkName>حول باليماث</LinkName>
            </LinkContent>
          </LinkLi>
        </LinksWrapper>
        <Hr />
        <Copyrights>
          جميع الحقوق محفوظة <br /> Palymath © 2024
        </Copyrights>
      </MenuWrapper>
    </Container>
  ) : (
    ""
  );
}
