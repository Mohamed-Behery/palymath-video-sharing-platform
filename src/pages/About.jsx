import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const Container = styled.div``;
const Wrapper = styled.div``;

export default function About() {
  return (
    <Container>
      <Banner />
      <Wrapper></Wrapper>
    </Container>
  );
}
