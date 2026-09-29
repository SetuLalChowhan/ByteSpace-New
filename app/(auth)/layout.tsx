import AuthLayout from "@/layout/AuthLayout";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default layout;
