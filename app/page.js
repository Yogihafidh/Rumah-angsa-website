import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.jpg"; // Responsive background
import image1 from "@/public/about-1.jpg"; // Responsive background
import Header from "./_components/Header";

export default function Page() {
  return (
    <main>
      <div className="relative min-h-screen flex flex-col h-screen mb-20">
        <Image
          src={bg}
          placeholder="blur"
          quality={100}
          className="object-cover object-top"
          fill
          alt="Mountains and forests with two cabins"
        />

        <div className="flex items-center justify-center h-screen w-screen">
          <div className="relative z-10 text-center">
            <h1 className="text-8xl text-white mb-1 tracking-tight font-normal">
              Welcome to Bobobox.
            </h1>
            <p className="mb-10 text-white">
              Witness the breathtaking views and #BeOneWithNature in the warmth
              of your cabin.
            </p>
            <Link
              href="/cabins"
              className="bg-lime-950 px-8 py-6 text-white text-lg font-semibold hover:bg-lime-900 transition-all"
            >
              Explore all cabins
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center max-w-7xl mx-auto w-full mb-20 text-black  px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="col-span-3">
          <h1 className="text-4xl mb-10  font-medium">
            Selamat datang di Bobocabin
          </h1>

          <div className="space-y-8">
            <p>
              Tempat di mana keindahan alam Indonesia berpadu harmonis dengan
              kenyamanan modern. Tersebar di berbagai destinasi menawan,
              Bobocabin menawarkan pengalaman unik untuk kembali menyatu dengan
              alam dan menikmati kebersamaan dengan orang-orang tercinta.
            </p>
            <p>
              Setiap Bobocabin dirancang sebagai basis yang nyaman, namun
              kebebasan dan kedamaian sejati dapat Anda temukan di alam
              sekitarnya. Nikmati suasana hutan pinus yang menenangkan di
              Bobocabin Cikole, Bandung , atau rasakan kesejukan pegunungan di
              Bobocabin Gunung Mas, Puncak . Bagi Anda yang mencari ketenangan
              di Bali, Bobocabin Ubud menawarkan pemandangan alam yang memukau.
            </p>
          </div>
        </div>

        <div className="col-span-2">
          <Image
            src={image1}
            placeholder="blur"
            quality={80}
            alt="Family sitting around a fire pit in front of cabin"
          />
        </div>

        <div className="relative aspect-square col-span-2">
          <Image
            src="/about-2.jpg"
            fill
            className="object-cover"
            alt="Family that manages The Wild Oasis"
          />
        </div>

        <div className="col-span-3">
          <h1 className="text-4xl mb-10 font-medium">
            Di Bobocabin, momen berharga tercipta di tengah kemegahan alam.
          </h1>

          <div className="space-y-8">
            <p>
              Ini adalah tempat untuk melambat, bersantai, dan merasakan
              kebahagiaan bersama dalam suasana yang indah
            </p>
            <p>
              Sejak didirikan, Bobocabin telah menjadi retret yang dikelola
              dengan penuh cinta dan perhatian. Kami berkomitmen untuk
              menciptakan lingkungan yang hangat dan ramah, di mana Anda bukan
              hanya tamu, tetapi bagian dari keluarga besar kami. Bergabunglah
              bersama kami di Bobocabin, di mana tradisi bertemu dengan
              ketenangan, dan setiap kunjungan terasa seperti pulang ke rumah.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
