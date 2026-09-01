import ROUTES from "@/constants/routes";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { getDevIconClassName } from "@/lib/utils";
import { X } from "lucide-react";

interface Props {
  id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  isButton?: boolean;
  remove?: boolean;
  handleRemove: () => void;
}
const TagCard = ({
  id,
  name,
  questions,
  showCount,
  compact,
  remove,
  isButton,
  handleRemove,
}: Props) => {
  const Component = (
    <>
      <Badge className="bg-gray-800 text-white p-4 rounded-sm flex items-center gap-2">
        <p className="flex items-center gap-1.5">
          <i className={`${getDevIconClassName(name)}`}></i>
          <span>{name}</span>
        </p>
      </Badge>
      {remove && (
        <X className="text-lg cursor-pointer " onClick={handleRemove} />
      )}
      {showCount && <p>{questions}</p>}
    </>
  );

  return compact && isButton ? (
    <div className="flex items-center bg-gray-800 rounded-md">{Component}</div>
  ) : (
    <Link
      key={name}
      href={ROUTES.TAG(id)}
      className="flex justify-between text-sm py-2"
    >
      {Component}
    </Link>
  );
};

export default TagCard;
