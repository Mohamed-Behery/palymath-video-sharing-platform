import Form from "../components/Form";

export default function Register() {
  const onSubmitHandler = (Form, callback) => {
    console.log("register submitted: ", Form);
    callback();
  };

  return (
    <Form
      title={"إنشاء حساب"}
      formArr={formArr}
      submitBtn={"إنشاء حساب"}
      onSubmit={onSubmitHandler}
      redirect={{
        label: "لديك حساب بالفعل ؟",
        link: {
          label: "تسجيل الدخول",
          to: "/login",
        },
      }}
    />
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
