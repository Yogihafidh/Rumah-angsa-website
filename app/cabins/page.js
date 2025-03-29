import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// Caching in route level
// export const revalidate = 3600; // 1 hour
export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  // Await searchParams sebelum mengakses propertinya
  const params = await searchParams;
  const filter = params?.capacity ?? "all";

  return (
    <div className="max-w-7xl mx-auto mt-20 mb-20 px-6 sm:px-8">
      <h1 className="text-4xl mb-5 leading-8 font-medium">
        Cabin kita selalu berada di alam
      </h1>
      <p className="text-lg mb-20 ">
        ​Selamat datang di Rumah Angsa, tempat di mana kenyamanan modern berpadu
        dengan keindahan alam Indonesia. Bayangkan bangun dengan pemandangan
        hutan pinus yang menyejukkan, menghabiskan hari menjelajahi alam sekitar
        yang asri, atau bersantai di tenda glamping pribadi Anda di bawah
        gemerlap bintang-bintang. Nikmati keindahan alam dalam kenyamanan rumah
        kedua Anda. Tempat yang sempurna untuk liburan yang tenang dan damai.
        Selamat datang di surga.​
      </p>

      <div className="flex sm:justify-end justify-center mb-10">
        <Filter />
      </div>

      {/* Incremental Static Regeneration (Partial rendering implementation) */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
