import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import AboutImg from "../assets/about-image.jpg";
import ArabicImg from "../assets/fully-arabic.png";
import ViralContent from "../assets/viral-content.png";
import LittleCompetition from "../assets/little-competition.png";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px 5%;
`;
const AboutSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 64px;
`;
const Info = styled.div``;
const Img = styled.div`
  width: 450px;
  height: 300px;
  background: url(${AboutImg});
  background-size: cover;
  background-position: bottom;
  @media (max-width: 1140px) {
    margin-top: 32px;
    width: 100%;
  }
`;
const Heading = styled.h2`
  font-size: 32px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
`;
const Description = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.text};
  max-width: 570px;
  line-height: 1.5;
`;
const LoginBtn = styled(Link)`
  background-color: ${({ theme }) => theme.primary};
  font-weight: 500;
  color: ${({ theme }) => theme.neutral};
  border: none;
  border-radius: 24px;
  padding: 8px 24px;
  display: inline-block;
  margin-top: 16px;
  cursor: pointer;
`;
const Footer = styled.footer`
  background-color: ${({ theme }) => theme.bg};
  border-top: 1px solid ${({ theme }) => theme.border};
  height: 56px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 32px;
`;
const Values = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 32px;
  padding: 32px 0;
  background-color: ${({ theme }) => theme.neutral};
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  @media screen and (max-width: 670px) {
    flex-direction: column;
    gap: 16px;
  }
`;
const Copyrights = styled.p`
  color: ${({ theme }) => theme.text};
`;
const Value = styled.div`
  text-align: center;
`;
const ValueName = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;
const ValueImg = styled.img`
  width: 64px;
  height: 64px;
`;

export default function About() {
  return (
    <Container>
      <Banner />
      <Wrapper>
        <AboutSection>
          <Info>
            <Heading>باليماث ؟</Heading>
            <Description>
              منصة مشاركة فيديوهات عربية ، تم تأسيسها في شهر يونيو سنة 2023 ؛
              بهدف تطوير مهارات الشباب العربي .
            </Description>
            <LoginBtn to="/register">انضم إلينا الأن</LoginBtn>
          </Info>
          <Img></Img>
        </AboutSection>
      </Wrapper>
      <Values>
        <Value>
          <ValueImg src={ArabicImg} />
          <ValueName>منصة عربية بالكامل</ValueName>
        </Value>
        <Value>
          <ValueImg src={ViralContent} />
          <ValueName>سرعة إنتشار المحتوي</ValueName>
        </Value>
        <Value>
          <ValueImg src={LittleCompetition} />
          <ValueName>منافسة قليلة</ValueName>
        </Value>
      </Values>
      <Footer>
        <Copyrights>جميع الحقوق محفوظة | Palymath © 2023</Copyrights>
      </Footer>
    </Container>
  );
}
