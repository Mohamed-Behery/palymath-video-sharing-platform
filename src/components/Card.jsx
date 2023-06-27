import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Thumbnail from "../assets/thumbnail1.png";
import ProfileImg from "../assets/avatar.png";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "100px" : "202px")};
  aspect-ratio: 16 / 9;
  background-color: #999;
  flex: ${(props) => (props.type === "sm" ? "0.5" : "1")};
  border-radius: 4px;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  margin: 10px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  font-weight: 300;
`;

export default function Card({ type }) {
  return (
    <Link to="/video/test">
      <Container type={type}>
        <Image src={Thumbnail} type={type} />
        <Details type={type}>
          <ChannelImage src={ProfileImg} type={type} />
          <Texts>
            <Title>
              عنوان الفيديو عنوان الفيديو عنوان الفيديو عنوان الفيديو عنوان
              الفيديو عنوان الفيديو عنوان الفيديو
            </Title>
            <ChannelName>صانع المحتوي</ChannelName>
            <Info>المشاهدات • المدة</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}
