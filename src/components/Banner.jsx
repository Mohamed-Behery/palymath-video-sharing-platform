import { styled } from "styled-components";
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
  border-radius: 4px;
`;
const Overlay = styled.div`
  height: 100%;
  /* background: rgba(0, 0, 0, 0.5); */
  border-radius: 4px;
`;

export default function Banner() {
  return (
    <Container>
      <Background>
        <Overlay></Overlay>
      </Background>
    </Container>
  );
}
