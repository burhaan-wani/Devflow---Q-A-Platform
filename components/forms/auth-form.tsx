"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Controller,
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod/v3";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@base-ui/react";
import Link from "next/link";
import ROUTES from "@/constants/routes";

interface AuthFormProps<T extends FieldValues> {
  FormType: "SIGN_IN" | "SIGN_UP";
  schema: z.ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
}
const AuthForm = <T extends FieldValues>({
  FormType,
  defaultValues,
  onSubmit,
  schema,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {};

  const buttonText = FormType === "SIGN_UP" ? "Sign Up" : "Sign In";
  return (
    <div>
      <form
        id="form-rhf-demo"
        className="mt-4 space-y-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {Object.keys(defaultValues).map((field) => (
          <Controller
            key={field}
            name={field as Path<T>}
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2 font-spaceGrotesk">
                <label htmlFor="form-rhf-demo-title">
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </label>
                {/* {`${field.name}`} */}
                <Input
                  required
                  {...field}
                  type={
                    field.name === "password"
                      ? "password"
                      : field.name === "email"
                        ? "email"
                        : "text"
                  }
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder={field.name}
                  autoComplete="off"
                  className="px-3 py-5"
                />
              </div>
            )}
          />
        ))}
        <Button
          type="submit"
          className={
            "w-full p-2 dark:bg-orange-500 rounded-md cursor-pointer dark:text-white text-black"
          }
        >
          {form.formState.isSubmitting
            ? buttonText === "Sign In"
              ? "signing in..."
              : "signing up..."
            : buttonText}
        </Button>
      </form>
      <div className="mt-4 font-spaceGrotesk">
        {buttonText === "Sign In" ? (
          <p className="flex gap-1 items-center">
            Don't have an account?
            <Link
              className="text-sm text-orange-400 hover:underline cursor-pointer"
              href={ROUTES.SIGN_UP}
            >
              Sign Up
            </Link>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <Link
              className="text-sm text-orange-400 hover:underline cursor-pointer"
              href={ROUTES.SIGN_IN}
            >
              Sign Up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
