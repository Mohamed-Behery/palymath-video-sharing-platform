import { styled } from "styled-components";
import VideoSrc from "../assets/video.mp4";

const Container = styled.div``;
const VideoPlayer = styled.video`
width: 100%;
height: 100%;
`;
export default function Player() {
  return (
    <Container>
      
        <VideoPlayer src={VideoSrc} controls autoPlay />
    </Container>
  )
}