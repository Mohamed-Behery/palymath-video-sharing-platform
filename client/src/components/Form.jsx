import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

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
  @media screen and (max-width: 420px) {
    width: 90%;
  }
`;

const FormWrapper = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.neutral};
  border-radius: 4px;
  padding: 16px;
`;
const FormTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;
const FormControl = styled.div`
  :first-of-type {
    margin-top: 8px;
  }
  :not(:last-of-type) {
    margin-bottom: 8px;
  }
`;
const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.border};
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  background: transparent;
  font-family: inherit;
`;
const Button = styled.button`
  font-family: inherit;
  outline: none;
  border: none;
  width: 100%;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.neutral};
  padding: 8px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  margin-top: 16px;
  font-weight: 600;
  cursor: pointer;
`;
const Redirect = styled.div`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.text};
`;
const RedirectLabel = styled.span`
  font-weight: 400;
`;
const RedirectLink = styled(Link)`
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

const prepareForm = (formArr) => {
  return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

export default function Form({
  title,
  formArr,
  submitBtn,
  onSubmit,
  redirect,
}) {
  const initialForm = prepareForm(formArr);
  const [form, setForm] = useState(initialForm);
  const onSubmitHandler = () => onSubmit(form, () => setForm(initialForm));
  const onChangeHandler = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const hasRedirect = !!redirect;

  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <FormTitle>{title}</FormTitle>
          {formArr.map(({ label, name, type, placeholder }, index) => (
            <FormControl key={index}>
              <Label htmlFor={name}>{label}</Label>
              <Input
                id={name}
                name={name}
                type={type}
                value={form[name]}
                placeholder={placeholder}
                required={true}
                onChange={(e) => onChangeHandler(e)}
              />
            </FormControl>
          ))}
          <Button
            onClick={(e) => {
              e.preventDefault();
              onSubmitHandler();
            }}
          >
            {submitBtn}
          </Button>
          {hasRedirect && (
            <Redirect>
              <RedirectLabel>{redirect.label}&nbsp;</RedirectLabel>
              <RedirectLink to={redirect.link.to}>
                {redirect.link.label}
              </RedirectLink>
            </Redirect>
          )}
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}
Form.defaultProps = {
  title: "تسجيل الدخول",
  formArr: [
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
  ],
  submitBtn: "تسجيل الدخول",
  // onSumbit: console.log("مرحبا"),
  redirect: {
    label: "ليس لديك حساب ؟",
    link: {
      label: "قم بإنشاء حساب الأن",
      to: "/register",
    },
  },
};
