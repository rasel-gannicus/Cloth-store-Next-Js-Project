import type { Metadata } from "next";
import { Inter, Poppins, Ubuntu } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/footer";
import CustomWrapper from "@/components/Custom Wrapper/CustomWrapper";
import { Toaster } from "@/components/ui/toaster";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/NextAuth/authOptions";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700", "800"],
});

export const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cloth Store",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        <div className="min-h-screen mx-auto">
          <CustomWrapper session={session}>{children}</CustomWrapper>
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
