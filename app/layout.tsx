import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--leagueSpartan",
  weight: ["400", "500", "600", "700", "800", "900"],
});
//400
const syneRegular = localFont({
  src: "/fonts/Syne-Regular.otf",
  variable: "--syneRegular",
  weight: "400",
});
//500
const syneMedium = localFont({
  src: "/fonts/Syne-Medium.otf",
  variable: "--syneMedium",
  weight: "500",
});
//600
const syneSemiBold = localFont({
  src: "/fonts/Syne-SemiBold.otf",
  variable: "--syneSemiBold",
  weight: "600",
});
// 700
const syneBold = localFont({
  src: "/fonts/Syne-Bold.otf",
  variable: "--syneBold",
  weight: "700",
});
//800
const syneExtraBold = localFont({
  src: "/fonts/Syne-ExtraBold.otf",
  variable: "--syneExtraBold",
  weight: "800",
});

export const metadata: Metadata = {
  title: {
    default: "Techsential | Home",
    template: "Techsential | %s",
  },
  description: `We bridge the gap between vision and impact, building next-gen solutions that redefine the boundaries of what's possible.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syneRegular.className} ${leagueSpartan.variable} ${inter.variable} ${syneSemiBold.variable} ${syneBold.variable} ${syneExtraBold.variable} ${syneMedium.variable} `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
