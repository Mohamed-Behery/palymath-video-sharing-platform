import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Banner from "../components/Banner";
import axios from "axios";

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

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      <Banner />
      <Cards>
        {videos.map((video) => (
          <Card key={video._id} video={video} />
        ))}
      </Cards>
    </Container>
  );
};

export default Home;
