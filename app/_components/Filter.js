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
    <div className="border border-gray-600 flex overflow-hidden rounded-2xl">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Semua Kabin
      </Button>

      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        3 Tamu
      </Button>

      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 Tamu
      </Button>

      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 Tamu
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`cursor-pointer sm:px-5 sm:py-2 px-3 py-2 hover:bg-primary-300 ${
        filter === activeFilter ? "bg-primary-500 text-white" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
