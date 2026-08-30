import ROUTES from "@/constants/routes";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import TagCard from "../cards/TagCard";

const topQuestions = [
  { _id: "1", title: "What is react.js?" },
  { _id: "2", title: "Difference between reactjs and nextjs?" },
  { _id: "3", title: "How to add optimizations to a react app?" },
  { _id: "4", title: "What is virtual dom in reactjs?" },
  { _id: "5", title: "How does the diffing process work in reactjs?" },
];

const popularTags = [
  { _id: "1", name: "Javascript", questions: 220 },
  { _id: "1", name: "Typescript", questions: 290 },
  { _id: "1", name: "HTML", questions: 265 },
  { _id: "1", name: "CSS", questions: 120 },
  { _id: "1", name: "REACT", questions: 20 },
];
const RightSideBar = () => {
  return (
    <section className="flex-1 pt-24 px-5 border-l bg-gray-900 ">
      <div>
        <h1 className="text-lg font-bold">Top Questions</h1>
        <div className="space-y-3 mt-5">
          {topQuestions.map(({ _id, title }) => (
            <Link
              key={title}
              href={ROUTES.QUESTION(_id)}
              className="flex justify-between text-sm  py-2"
            >
              <p>{title}</p>
              <ChevronRight />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h1 className="font-bold text-lg">Tags</h1>
        <div className="space-y-3 mt-5">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard id={_id} name={name} questions={questions} showCount />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
