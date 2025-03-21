import { Poppins } from "next/font/google";
import "@/app/_styles/globals.css";

import { ReservationProvider } from "./_components/ReservationContext";
import Header from "./_components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-white text-lime-950 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 grid">
          <ReservationProvider>
            <main className="mx-auto w-full">{children}</main>
          </ReservationProvider>
        </div>
      </body>
    </html>
  );
}
