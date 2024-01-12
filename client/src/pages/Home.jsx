import styled from "styled-components";
import Card from "../components/Card";
import Banner from "../components/Banner";

const Container = styled.div``;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 20px 5%;
  @media screen and (max-width: 799px) {
    justify-content: center;
  }
`;

const Home = () => {
  return (
    <Container>
      <Banner />
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
};

export default Home;
