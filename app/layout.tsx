import { Signika } from "next/font/google";
import { ThirdwebProvider } from "@/app/thirdweb";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import getCurrentUser from "./actions/getCurrentUser";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: `KingOfClick - Where ClicMillies are made`,
  description: `KOC is an idle clicker game, where players aim to become the wealthiest clickStarz in the world. Learn about investing in crypto, DeFi, and NFTs, while playing a fun game!`,
};

const font = Signika({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        <main className="py-[6rem] px-[1rem] bg-[#706960] text-neutral-100 h-[100vh]">
          <ThirdwebProvider >{children}</ThirdwebProvider>
        </main>
      </body>
    </html>
  );
}
