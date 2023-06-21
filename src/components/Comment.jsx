import { styled } from "styled-components";
import ProfileImg from "../assets/avatar.png";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;

function Comment() {
  return (
    <Container>
      <Avatar src={ProfileImg} />
      <Details>
        <Name>
          اسم المستخدم <Date>منذ ساعة</Date>
        </Name>
        <Text>
          محتوي التعليق
        </Text>
      </Details>
    </Container>
  );
}

export default Comment;
