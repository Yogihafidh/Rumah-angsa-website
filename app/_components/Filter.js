"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams(); // read the current URL's query string.
  const router = useRouter(); // programmatically change routes inside Client Components.
  const pathname = usePathname(); // read the current URL's pathname

  const activeFilter = searchParams.get("capacity") ?? "all";

  // Set state to url
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams); // API JavaScript use to work with query string in URL
    params.set("capacity", filter); // set capacity to url
    router.replace(`${pathname}?${params.toString()}`, { scroll: false }); // Replace url with manually
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>

      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        3 guests
      </Button>

      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>

      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
