import type { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create an Account - ByteSpace",
  description:
    "Sign up and come in. The registration process is straightforward, uncomplicated, and efficient.",
};

const RegisterPage = () => {
  return (
    <AuthLayout
      leftTitle="Sign up and come in"
      leftSubtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
