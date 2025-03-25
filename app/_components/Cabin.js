import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "./TextExpander";
import Image from "next/image";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  return (
    <div className="grid grid-cols-[3fr_4fr] gap-20 border rounded-2xl border-gray-500 py-3 px-10 mb-24 mt-20">
      <div className="relative scale-[1.15] -translate-x-3 overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover rounded-2xl"
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="text-white bg-primary-500 font-black text-7xl mb-5 translate-x-[-254px] p-6 w-[150%] rounded-2xl">
          Kabin {name}
        </h3>

        <p className="text-lg text-gray-600 mb-10">
          {/* Share data server component to client component */}
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-500" />
            <span className="text-lg">
              Kapasitas untuk <span className="font-bold">{maxCapacity}</span>{" "}
              tamu
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-500" />
            <span className="text-lg">
              Berlokasi di{" "}
              <span className="font-bold">Ladang Hutan, Guci, Bumijawa.</span>
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-500" />
            <span className="text-lg">
              Privasi <span className="font-bold">100%</span> terjamin
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
