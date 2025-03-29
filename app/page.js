import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.jpg"; // Responsive background
import image1 from "@/public/about-1.jpg"; // Responsive background
import Header from "./_components/Header";

export default function Page() {
  return (
    <main>
      <div className="relative min-h-screen flex flex-col justify-center items-center h-screen mb-20 ">
        <Image
          src={bg}
          placeholder="blur"
          quality={100}
          className="object-cover object-top border-b-3 border-t-3 border-black"
          fill
          alt="Mountains and forests with two cabins"
        />

        <div className="flex items-center justify-center h-screen w-screen px-4">
          <div className="relative z-10 text-center">
            <h1 className="lg:text-8xl sm:text-4xl md:text-6xl text-4xl text-white mb-1 tracking-tight font-normal">
              Welcome to Rumah Angsa.
            </h1>
            <p className="mb-20 text-white">
              Witness the breathtaking views and #BeOneWithNature in the warmth
              of your cabin.
            </p>
            <Link
              href="/cabins"
              className="bg-primary-900 rounded-2xl  sm:px-8 sm:py-6 px-5 sm:text-lg py-5 text-white text-base font-semibold hover:bg-primary-700 transition-all"
            >
              Jelajahi semua kabin kita
            </Link>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-x-24 md:gap-y-32 gap-y-10 text-lg items-center  mx-auto w-full mb-20 text-black  px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="col-span-3">
          <h1 className="text-4xl mb-10  font-medium">
            Selamat datang di Rumah Angsa
          </h1>

          <div className="space-y-8">
            <p>
              Tempat di mana keindahan alam Indonesia berpadu harmonis dengan
              kenyamanan modern. Terletak di Ladang Hutan, Guci, Kecamatan
              Bumijawa, Kabupaten Tegal, Rumah Angsa menawarkan pengalaman unik
              untuk kembali menyatu dengan alam dan menikmati kebersamaan dengan
              orang-orang tercinta.
            </p>
            <p>
              Setiap tenda glamping di Rumah Angsa dirancang sebagai tempat yang
              nyaman, namun kebebasan dan kedamaian sejati dapat Anda temukan di
              alam sekitarnya. Nikmati suasana hutan pinus yang menenangkan dan
              pemandangan Gunung Slamet yang memukau.
            </p>
          </div>
        </div>

        <div className="sm:col-span-2 col-span-3 mb-20 sm:mb-0 rounded-2xl overflow-hidden">
          <Image
            src={image1}
            placeholder="blur"
            quality={80}
            alt="Family sitting around a fire pit in front of cabin"
          />
        </div>

        <div className="col-span-3">
          <h1 className="text-4xl mb-10 font-medium">
            Di Rumah Angsa, momen berharga tercipta di tengah kemegahan alam.
          </h1>

          <div className="space-y-8">
            <p>
              ​Di Rumah Angsa, kami memahami pentingnya meluangkan waktu untuk
              melambat dan menikmati momen berharga bersama orang-orang
              tercinta. Dikelilingi oleh rimbunnya hutan pinus dan panorama
              megah Gunung Slamet, tempat ini menawarkan suasana yang sempurna
              untuk bersantai dan melepaskan diri dari rutinitas sehari-hari.
              Baik Anda memilih untuk berkemah di area camping yang luas,
              menginap di tenda glamping yang nyaman, atau sekadar menikmati
              suasana di kafe kami, setiap pengalaman dirancang untuk memberikan
              ketenangan dan kebahagiaan.
            </p>
            <p>
              Sejak awal berdirinya, Rumah Angsa telah menjadi tempat
              peristirahatan yang dikelola dengan penuh cinta dan perhatian.
              Kami berkomitmen untuk menciptakan lingkungan yang hangat dan
              ramah, di mana setiap tamu diperlakukan seperti bagian dari
              keluarga besar kami. Dengan fasilitas lengkap seperti musala,
              aula, dan area api unggun, kami berusaha memenuhi kebutuhan Anda
              selama menginap. Bergabunglah bersama kami di Rumah Angsa, tempat
              di mana tradisi bertemu dengan ketenangan, dan setiap kunjungan
              memberikan perasaan seperti pulang ke rumah.
            </p>
          </div>
        </div>

        <div className="relative aspect-square sm:col-span-2 col-span-3  rounded-2xl overflow-hidden">
          <Image
            src="/about-2.jpg"
            fill
            className="object-cover"
            alt="Family that manages The Wild Oasis"
          />
        </div>
      </div>
    </main>
  );
}
