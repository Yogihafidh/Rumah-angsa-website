import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="border-gray-300 border hover:shadow-md h-120 rounded-2xl overflow-hidden hover:translate-y-[-10px] transition-all duration-[400ms]">
      <div className="relative h-1/2">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-r border-black"
        />
      </div>

      <div className="pt-5 pb-4 px-7 h-1/2 bg-white flex flex-col justify-between">
        <div className="flex sm:flex-row flex-col gap-8 sm:gap-0 justify-between items-center">
          <div>
            <h3 className="font-semibold text-2xl mb-1">Kabin {name}</h3>
            <p className="text-lg text-gray-600">
              Kapasitas <span className=" font-bold">{maxCapacity}</span> tamu
            </p>
          </div>

          <p className="flex gap-3 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  Rp{regularPrice - discount}K
                </span>
                <span className="line-through font-semibold text-gray-600">
                  Rp{regularPrice}K
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">Rp{regularPrice}K</span>
            )}
            <span className="text-gray-500">/ malam</span>
          </p>
        </div>

        <Link
          href={`/cabins/${id}`}
          className="hover:bg-primary-500 hover:text-white border border-gray-300 w-full text-center rounded-xl py-4 px-6 inline-block transition-all font-semibold"
        >
          Reservasi sekarang
        </Link>
      </div>
    </div>
  );
}

export default CabinCard;
