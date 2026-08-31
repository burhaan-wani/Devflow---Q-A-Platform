import Filter from "@/components/filters/Filter";
import SearchBar from "@/components/search/SearchBar";
import ROUTES from "@/constants/routes";
import { Button } from "@base-ui/react";
import { Search } from "lucide-react";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ query: string; filter: string }>;
}

const questions = [
  {
    _id: "1",
    title: "What is reactjs",
    description: "How to learn learn reactjs from beginner to advance",
    tags: [
      { _id: "1", name: "reactjs" },
      { _id: "2", name: "javascript" },
    ],
    autor: {
      _id: "1",
      name: "James",
    },
    upvotes: 112,
    answers: 132,
    views: 23,
    createdAt: "2026-05-10",
  },
  {
    _id: "2",
    title: "What is debouncing",
    description: "How to apply debouncing in reactjs",
    tags: [
      { _id: "1", name: "typescript" },
      { _id: "2", name: "javascript" },
    ],
    autor: {
      _id: "2",
      name: "Miles",
    },
    upvotes: 12,
    answers: 32,
    views: 232,
    createdAt: "2026-06-19",
  },
];

const Home = async ({ searchParams }: Props) => {
  const { query = "", filter = "" } = await searchParams;

  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">All Questions</h1>
        <Button>
          <Link
            href={ROUTES.ASK_QUESTION}
            className="text-white bg-orange-500 p-3 rounded-md text-sm w-full "
          >
            Hello world
          </Link>
        </Button>
      </div>
      <section className="mt-7">
        <SearchBar route={"/"} placeholder="Search value...">
          <Search />
        </SearchBar>
      </section>
      <Filter />
      <section>All Questions</section>
    </section>
  );
};

export default Home;
