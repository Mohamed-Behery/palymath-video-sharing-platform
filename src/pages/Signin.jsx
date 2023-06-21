import { styled } from "styled-components";
import Form from "../components/form/Form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 96px);
`;
const Wrapper = styled.div`
  overflow: hidden;
  width: 390px;
  background: ${({ theme }) => theme.neutral};
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.border};
`;

export default function Signin() {
  const onSubmitHandler = (Form, callback) => {
    console.log("sign in submitted: ", Form);
    callback();
  };

  return (
    <Container>
      <Wrapper>
        <Form
          title={"تسجيل الدخول"}
          formArr={formArr}
          onSubmit={onSubmitHandler}
        />
      </Wrapper>
    </Container>
  );
}

const formArr = [
  {
    label: "البريد الإلكتروني",
    name: "email",
    placeholder: "البريد الإلكتروني",
    type: "email",
  },
  {
    label: "كلمة السر",
    name: "password",
    placeholder: "كلمة السر",
    type: "password",
  },
];
