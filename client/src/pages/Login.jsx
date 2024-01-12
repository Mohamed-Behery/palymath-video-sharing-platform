import Form from "../components/Form";

export default function Signin() {
  const onSubmitHandler = (Form, callback) => {
    console.log("sign in submitted: ", Form);
    callback();
  };

  return (
    <Form title={"تسجيل الدخول"} formArr={formArr} onSubmit={onSubmitHandler} />
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
