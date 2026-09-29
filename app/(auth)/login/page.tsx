import type { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In - ByteSpace",
  description:
    "Sign in with ease. Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
};

const LoginPage = () => {
  return (
    <AuthLayout
      leftTitle="Sign in with ease"
      leftSubtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
