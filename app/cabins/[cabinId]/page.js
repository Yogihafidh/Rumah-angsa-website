import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

// Generating dynamic metadata
export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return { title: `Cabin ${name}` };
}

// Convert dynamic route segments to static params. This is for static page generation. if you have finite small amout of pages, then you can pre generate the pages so that it's not dynamic and it is fast.
export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins?.map((cabin) => ({ cabinId: String(cabin.id) }));
}

// Dynamic route segments
export default async function Page({ params }) {
  // Get id in url
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-20">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10">
          Pesan {cabin.name} hari ini. Bayar saat ditempat.
        </h2>

        {/* Starategy for multiple data fatching using suspense */}
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
