import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";

const AskQuestion = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Ask a question</h1>
      <div className="mt-7">
        <QuestionForm />
      </div>
    </div>
  );
};

export default AskQuestion;
