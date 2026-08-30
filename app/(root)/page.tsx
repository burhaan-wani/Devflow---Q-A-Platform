import SearchBar from "@/components/search/SearchBar";
import ROUTES from "@/constants/routes";
import { Button } from "@base-ui/react";
import { Search } from "lucide-react";
import Link from "next/link";

const Home = () => {
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
      <section className="mt-10">
        <SearchBar route={"/"} placeholder="Search value...">
          <Search />
        </SearchBar>
      </section>
      <section>Filter</section>
      <section>All Questions</section>
    </section>
  );
};

export default Home;
