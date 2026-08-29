"use client";

import AuthForm from "@/components/forms/auth-form";
import { signInSchema } from "@/lib/schema";

const SignIn = () => {
  return (
    <AuthForm
      FormType="SIGN_IN"
      schema={signInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignIn;
