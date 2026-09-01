"use client";

import { askQuestionSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import TiptapEditor from "../editor/TipTap";

const Tiptap = dynamic(() => import("../editor/TipTap"), {
  ssr: false,
  loading: () => (
    <div className="h-[150px] w-full rounded-md border border-gray-200 bg-gray-50 animate-pulse p-3" />
  ),
});

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(askQuestionSchema),
    defaultValues: {
      title: "",
      content: "<p>Hello world</p>",
      tags: [],
    },
  });

  const handleAskQuestion = () => {};
  return (
    <form
      onSubmit={form.handleSubmit(handleAskQuestion)}
      className="flex flex-col gap-4"
    >
      <Controller
        key={"title"}
        name={"title"}
        control={form.control}
        render={({ field, fieldState }) => (
          <>
            <div className="flex flex-col gap-2.5 font-spaceGrotesk">
              <label htmlFor="form-rhf-demo-title">
                Question title <span className="text-orange-500">*</span>
              </label>
              <Input
                required
                {...field}
                type="text"
                id="form-rhf-demo-title"
                aria-invalid={fieldState.invalid}
                placeholder={""}
                autoComplete="off"
                className="px-3 py-7"
              />
            </div>
            <p className="text-sm text-gray-600">
              Be more specific, and imagine you're asking question to another
              person.
            </p>
          </>
        )}
      />
      <Controller
        key={"content"}
        name={"content"}
        control={form.control}
        render={({ field, fieldState }) => (
          <div>
            <TiptapEditor value={field.value} fieldChange={field.onChange} />
            <p className="text-sm text-gray-600">
              Introduce your problem and expand on what you've put in the title
            </p>
          </div>
        )}
      />
      <Controller
        key={"tags"}
        name={"tags"}
        control={form.control}
        render={({ field, fieldState }) => (
          <>
            <div className="flex flex-col gap-2.5 font-spaceGrotesk">
              <label htmlFor="form-rhf-demo-title">
                Tags <span className="text-orange-500">*</span>
              </label>
              <Input
                required
                {...field}
                type="text"
                id="form-rhf-demo-title"
                aria-invalid={fieldState.invalid}
                placeholder={"Add Tags"}
                autoComplete="off"
                className="px-3 py-7"
              />
            </div>
            <p className="text-sm text-gray-600">
              Add upto 3 tags to describe what your question is about. You need
              to press enter to add tag.
            </p>
          </>
        )}
      />
      <div className="flex justify-end bg-green">
        <Button
          type="submit"
          className={
            "mt-5 text-white bg-orange-500 hover:bg-orange-500 cursor-pointer p-5 rounded-md text-sm font-spaceGrotesk"
          }
        >
          Ask A Question
        </Button>
      </div>
    </form>
    // </Form>
  );
};

export default QuestionForm;
