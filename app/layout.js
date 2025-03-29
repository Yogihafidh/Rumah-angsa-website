import { Nunito } from "next/font/google";
import "@/app/_styles/globals.css";

import { ReservationProvider } from "./_components/ReservationContext";
import Header from "./_components/Header";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    template: "%s / Bobocabin",
    default: "Welcome / Bobocabin",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased bg-white text-[#0A0A0A] min-h-screen  flex flex-col relative h-screen`}
      >
        <Header />
        <div className="flex-1 grid ">
          <ReservationProvider>
            <main className="mx-auto w-full">{children}</main>
          </ReservationProvider>
        </div>
      </body>
    </html>
  );
}
