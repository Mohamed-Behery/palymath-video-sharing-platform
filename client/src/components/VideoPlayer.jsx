import { styled } from "styled-components";
import VideoSrc from "../assets/video.mp4";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import SpeedIcon from "@mui/icons-material/Speed";
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { useRef, useState } from "react";

const Container = styled.div`
  user-select: none;
  overflow: hidden;
  border-radius: 4px;
  aspect-ratio: 16 / 9;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover .wrapper {
    opacity: 1;
    bottom: 0;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  bottom: -15px;
  width: 100%;
  transition: all 0.08s ease;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
    height: calc(100% + 35px);
    pointer-events: none;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  }
`;
const Player = styled.video`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Timeline = styled.div`
  height: 7px;
  width: 100%;
  cursor: pointer;
  direction: ltr;
  &:hover div::before,
  &:hover span {
    display: block;
  }
`;
const ProgressArea = styled.div`
  height: 3px;
  position: relative;
  background: rgba(255, 255, 255, 0.6);
`;
// const TimeProgress = styled.span`
//   position: absolute;
//   left: 50%;
//   top: -25px;
//   font-size: 13px;
//   color: ${({ theme }) => theme.neutral};
//   pointer-events: none;
//   transform: translateX(-50%);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   display: none;
// `;
const ProgressBar = styled.div`
  height: 100%;
  position: relative;
  background: #0061ab;
  direction: ltr;
  &::before {
    content: "";
    right: 0;
    top: 50%;
    height: 13px;
    width: 13px;
    position: absolute;
    border-radius: 50%;
    background: #0061ab;
    transform: translateY(-50%);
    display: none;
  }
`;
const Controls = styled.div`
  padding: 5px 20px 10px;
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 540px) {
    padding: 3px 10px 7px;
  }
`;
const OptionsLeft = styled.div`
  width: 100%;
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const OptionsMiddle = styled.div`
  width: 100%;
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OptionsRight = styled.div`
  width: 100%;
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: #f9f9f9;
  border-radius: 3px;
  transition: all 0.3s ease;
  &:hover :where(svg, span) {
    color: #fff;
  }
  &:active :where(svg, span) {
    transform: scale(0.9);
  }
`;
const VolumeRange = styled.input`
  height: 4px;
  margin-left: 3px;
  max-width: 75px;
  accent-color: #0061ab;
  position: relative;
  bottom: 3px;
  cursor: pointer;
  @media screen and (max-width: 540px) {
    display: none !important;
  }
`;
const Timer = styled.div`
  color: #f9f9f9;
  margin-left: 15px;
  font-size: 14px;
  opacity: 0.8;
  position: relative;
  bottom: 3px;
  @media screen and (max-width: 540px) {
    margin-left: 2px;
  }
`;
const CurrentTime = styled.span`
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;
const Seperator = styled.span`
  margin: 0 5px;
  font-size: 16px;
  @media screen and (max-width: 540px) {
    font-size: 11px;
    margin: 0 2px;
  }
`;
const Duration = styled.span`
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;
const PlayPause = styled(Button)``;
const SkipBackword = styled(Button)``;
const SkipForword = styled(Button)``;
const PlaybackSpeed = styled.div`
  display: flex;
  position: relative;
`;
const SpeedBtn = styled(Button)`
  &:hover + ul {
    opacity: 1;
  }
`;
const SpeedOptions = styled.ul`
  position: absolute;
  left: -40px;
  bottom: 40px;
  width: 95px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: opacity 0.13s ease;
  z-index: 99;
  @media screen and (max-width: 540px) {
    width: 75px;
    left: -30px;
    bottom: 30px;
  }
`;
const SpeedOption = styled.li`
  color: #093a5e;
  font-size: 14px;
  padding: 5px 0 5px 15px;
  transition: all 0.1s ease;
  cursor: pointer;
  @media screen and (max-width: 540px) {
    font-size: 11px;
    margin: 1px 0;
    padding: 3px 0 3px 10px;
  }
  &:hover {
    background: #ddd;
  }
  &:nth-child(3) {
    background: #0061ab;
    color: #fff;
  }
`;
const PicInPic = styled(Button)``;
const FullScreen = styled(Button)``;

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var videoSrc = document.getElementById("video-src");
      setVideoTime(videoSrc.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  return (
    <Container>
      <Wrapper className="wrapper">
        <Timeline>
          <ProgressArea>
            {/* <TimeProgress>00:00</TimeProgress> */}
            <ProgressBar style={{ width: `${progress}%` }}></ProgressBar>
          </ProgressArea>
        </Timeline>
        <Controls>
          <OptionsLeft>
            <Button>
              <VolumeUpIcon />
            </Button>
            <VolumeRange type="range" min="0" max="1" step="any" />
            <Timer>
              <Duration>
                {" "}
                {Math.floor(currentTime / 60) +
                  ":" +
                  ("0" + Math.floor(currentTime % 60)).slice(-2)}
              </Duration>
              <Seperator> / </Seperator>
              <CurrentTime>
                {" "}
                {Math.floor(videoTime / 60) +
                  ":" +
                  ("0" + Math.floor(videoTime % 60)).slice(-2)}
              </CurrentTime>
            </Timer>
          </OptionsLeft>
          <OptionsMiddle>
            <SkipBackword onClick={revert}>
              <FastRewindIcon />
            </SkipBackword>
            <PlayPause>
              {playing ? (
                <PauseIcon onClick={() => videoHandler("pause")} />
              ) : (
                <PlayArrowIcon onClick={() => videoHandler("play")} />
              )}
            </PlayPause>
            <SkipForword onClick={fastForward}>
              <FastForwardIcon />
            </SkipForword>
          </OptionsMiddle>
          <OptionsRight>
            <PlaybackSpeed>
              <SpeedBtn>
                <SpeedIcon />
              </SpeedBtn>
              <SpeedOptions>
                <SpeedOption>2x</SpeedOption>
                <SpeedOption>1.5x</SpeedOption>
                <SpeedOption>Normal</SpeedOption>
                <SpeedOption>0.75x</SpeedOption>
                <SpeedOption>0.5x</SpeedOption>
              </SpeedOptions>
            </PlaybackSpeed>
            <PicInPic>
              <PictureInPictureAltIcon />
            </PicInPic>
            <FullScreen>
              <FullscreenIcon />
            </FullScreen>
          </OptionsRight>
        </Controls>
      </Wrapper>
      <Player src={VideoSrc} autoPlay id="video-src" ref={videoRef} />
    </Container>
  );
}
