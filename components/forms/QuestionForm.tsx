"use client";

import { askQuestionSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import z from "zod/v3";
import TagCard from "../cards/TagCard";

const TiptapEditor = dynamic(() => import("../editor/TipTap"), {
  ssr: false,
  loading: () => (
    <div className="h-37.5 w-full rounded-md border border-gray-200 bg-gray-50 animate-pulse p-3" />
  ),
});

const QuestionForm = () => {
  const form = useForm<z.infer<typeof askQuestionSchema>>({
    resolver: zodResolver(askQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: { value: string[] },
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tagInput = e.currentTarget.value.trim();
      if (
        tagInput &&
        tagInput.length < 15 &&
        field.value.length < 3 &&
        !field.value.includes(tagInput)
      ) {
        form.setValue("tags", [...field.value, tagInput]);
        e.currentTarget.value = "";
        form.clearErrors("tags");
      } else if (tagInput.length > 15) {
        form.setError("tags", {
          message: "Tag name can only contain 15 characters",
        });
      } else if (field.value.includes(tagInput)) {
        form.setError("tags", { message: "Tag name already exists" });
      } else {
        form.setError("tags", {
          message: "Question can only have a max of 3 tags",
        });
      }
    }
  };

  const handleTagRemove = (tag: string, field: { value: string[] }) => {
    console.log("hi");
    const filteredTags = field.value.filter((val) => val !== tag);
    form.setValue("tags", filteredTags);
    if (filteredTags.length === 0) {
      form.setError("tags", { message: "Tags are required" });
    }
  };

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
                type="text"
                id="form-rhf-demo-title"
                aria-invalid={fieldState.invalid}
                placeholder={"Add Tags"}
                autoComplete="off"
                className="px-3 py-7"
                onKeyDown={(e) => handleKeyDown(e, field)}
              />
            </div>
            <div className="flex justify-start gap-2">
              {field?.value?.length > 0 &&
                field?.value?.map((tag) => (
                  <TagCard
                    key={tag}
                    id={tag}
                    name={tag}
                    remove
                    isButton
                    compact
                    handleRemove={() => handleTagRemove(tag, field)}
                  />
                ))}
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
