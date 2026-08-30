import ROUTES from "@/constants/routes";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { getDevIconClassName } from "@/lib/utils";

interface Props {
  id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}
const TagCard = ({ id, name, questions, showCount, compact }: Props) => {
  return (
    <Link
      key={name}
      href={ROUTES.TAG(id)}
      className="flex justify-between text-sm py-2"
    >
      <Badge className="bg-gray-800 text-white p-4 rounded-sm flex items-center gap-2">
        <i className={`${getDevIconClassName(name)}`}></i>
        <span>{name}</span>
      </Badge>
      <p>{questions}+</p>
    </Link>
  );
};

export default TagCard;
