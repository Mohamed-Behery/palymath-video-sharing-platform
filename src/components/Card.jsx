import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import { format } from "timeago.js";
// import Thumbnail from "../assets/thumbnail1.png";
// import ProfileImg from "../assets/avatar.png";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "36px")};
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
const AccountImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const AccountName = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  margin: 5px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  font-weight: 400;
`;

function Card({ type, video }) {
  const [account, setAccount] = useState([]);

  useEffect(() => {
    const fetchAccount = async () => {
      const res = await axios.get(`/users/find/${video?.userId}`);
      setAccount(res.data);
    };
    fetchAccount();
  }, [video?.userId]);
  return (
    <Link style={{ textDecoration: "none" }} to={`/video/${video?._id}`}>
      <Container type={type}>
        <Image type={type} src={video?.imgUrl} />
        <Details type={type}>
          <AccountImage type={type} src={account?.img} />
          <Texts>
            <Title>{video?.title}</Title>
            <AccountName>{account?.name}</AccountName>
            <Info>
              {video?.views} مشاهدة • {format(video?.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
