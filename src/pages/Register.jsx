import { styled } from "styled-components";
import Form from "../components/form/Form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 56px);
`;
const Wrapper = styled.div`
  overflow: hidden;
  width: 390px;
  background: ${({ theme }) => theme.bgLighter};
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.soft};
`;

export default function Register() {
  const onSubmitHandler = (Form, callback) => {
    console.log("register submitted: ", Form);
    callback();
  };

  return (
    <Container>
      <Wrapper>
        <Form
          title={"إنشاء حساب"}
          formArr={formArr}
          submitBtn={"إنشاء حساب"}
          onSubmit={onSubmitHandler}
          redirect={{
            label: "لديك حساب بالفعل ؟",
            link: {
              label: "تسجيل الدخول",
              to: "/signin",
            },
          }}
        />
      </Wrapper>
    </Container>
  );
}

const formArr = [
  {
    label: "الاسم",
    name: "name",
    placeholder: "الاسم",
    type: "text",
  },
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
  {
    label: "تأكيد كلمة السر",
    name: "confirmPassword",
    placeholder: "تأكيد كلمة السر",
    type: "password",
  },
];
