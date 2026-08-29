"use client";
import AuthForm from "@/components/forms/auth-form";
import { signUpSchema } from "@/lib/schema";

const SignUp = () => {
  return (
    <AuthForm
      FormType="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignUp;
