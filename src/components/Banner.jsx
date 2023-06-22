import { styled } from "styled-components";
import { Link } from "react-router-dom";
import BannerBg from "../assets/banner-image.png";

const Container = styled.div`
  text-align: center;
`;
const Background = styled.div`
  position: relative;
  background-image: url(${BannerBg});
  background-size: cover;
  height: 310px;
  overflow: hidden;
  @media screen and (max-width: 660px) {
    height: 450px;
  }
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 700;
  `;
const Heading = styled.h1`
  margin: 0;
  font-size: 70px;
  color: #0061ab;
  user-select: none;
`;
const Description = styled.p`
  margin: 20px;
  display: block;
  font-size: 22px;
  max-width: 450px;
  color: #093a5e;
`;
const LoginBtn = styled(Link)`
  color: ${({ theme }) => theme.text};
  padding: 10px 24px;
  background: ${({ theme }) => theme.neutral};
  text-decoration: none;
  border-radius: 12px;
  margin-top: 5px;
  border: 2px solid ${({ theme }) => theme.text};
`;

export default function Banner() {
  return (
    <Container>
      <Background>
        <Content>
          <Heading>Palymath</Heading>
          <Description>
            منصة مشاركة فيديوهات عربية ، تم إنشائها خصيصًا لتطوير مهارات
            الشباب العربي
          </Description>
          <LoginBtn to="/register">إنشاء حساب / تسجيل الدخول</LoginBtn>
        </Content>
      </Background>
    </Container>
  );
}
