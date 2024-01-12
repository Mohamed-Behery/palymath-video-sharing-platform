import { styled } from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  padding: 20px 5%;
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
const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  text-align: center;
`;
const Hr = styled.hr`
  background: ${({ theme }) => theme.border};
  border: 0;
  height: 1px;
  margin: 10px 0;
`;

export default function Trending() {
  return (
    <Container>
      <Title>الحسابات التي أتابعها</Title>
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
