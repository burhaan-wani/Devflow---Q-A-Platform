import Link from "next/link";
import ROUTES from "@/constants/routes";
import TagCard from "./TagCard";
import Metric from "../Metric";
import { getRelativeTimeString } from "@/lib/utils";

interface Props {
  question: Question;
}
const QuestionCard = ({
  question: {
    _id,
    title,
    description,
    tags,
    author,
    upvotes,
    answers,
    views,
    createdAt,
  },
}: Props) => {
  return (
    <div className="bg-gray-900 p-6 border rounded-lg ">
      <Link href={ROUTES.QUESTION(_id)} className="">
        <h1 className="font-bold text-xl">{title}</h1>
      </Link>
      <p className="line-clamp-1 text-sm mt-2">{description}</p>
      <div className="flex items-center gap-3 mt-2">
        {tags.map((tag) => (
          <TagCard key={_id} id={tag._id} name={tag.name} compact />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        <Metric
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qh6bj65apXQ5cNMTGlRUO4JgHCyR0zNNitLecRMgYkfrvbxMuD_rVvQ&s=10"
          alt={author.name}
          value={author.name}
          title={` -> ${getRelativeTimeString(createdAt)}`}
          href={ROUTES.PROFILE(author._id)}
          textStyles=""
          imgStyles="w-4 h-4 rounded-full"
          isAuthor
        />
        <div className="flex items-center gap-3">
          <Metric
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccG-om16NqHkrhCHySTp6cznJtvFzoTt_u0fxaf2eOKYcQEsVEW9bk41m&s=10"
            alt={"votes"}
            value={upvotes}
            title={`vote`}
            imgStyles="w-4 h-4 rounded-full"
            textStyles=""
          />
          <Metric
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3OyTgbTVGjtpN9i-C32Z72Vp1YpFank3vFYTB3v22RJeHqruxtzYyWc&s=10"
            alt={"views"}
            value={views}
            title={`views`}
            imgStyles="w-4 h-4 rounded-full"
            textStyles=""
          />
          <Metric
            imgUrl="https://as2.ftcdn.net/jpg/02/22/83/63/1000_F_222836307_HJMp7ih57NJ7mJ6SjzmdY4RWAo4gZ74h.jpg"
            alt={"answers"}
            value={answers}
            title={`answers`}
            imgStyles="w-4 h-4 rounded-full"
            textStyles=""
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
