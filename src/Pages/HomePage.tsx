import React, { useEffect } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchUsersQuery } from "../store/github/github.api";

export const HomePage = () => {
    const [search, setSearch] = React.useState("");
    const debounced = useDebounce(search);
     const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3
     });


  useEffect(() => {
    console.log(debounced);
  }, [debounced]);
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen ">
      {isError && <p className="text-center text-red-600">Something wrong</p>}

      <div className="relative w-[560px]">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github..."
          value={search}
        />
        <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
          {isLoading && <p className="text-center">Loading... </p>}
            {data?.map((user)=>(
                <li
                key={user.id}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                >{user.login}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};
