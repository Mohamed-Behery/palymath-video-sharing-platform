import { styled } from "styled-components";
import Card from "../components/Card";
import BannerBg from "../assets/banner-image.png";

const Container = styled.div``;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  @media screen and (max-width: 799px) {
    justify-content: center;
  }
`;
const Banner = styled.div`
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
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;

export default function Home() {
  return (
    <Container>
      <Banner>
        <Background>
          <Overlay>
          </Overlay>
        </Background>
      </Banner>
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
