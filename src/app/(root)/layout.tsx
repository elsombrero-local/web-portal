import { Metadata } from "next";
import { Navbar } from "../../shared/components/Navbar/Navbar";
import { Sidenav } from "../../shared/components/Sidenav/Sidenav";

export const metadata: Metadata = {
  title: "Web Portal",
  description: "You are connected to your local web portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div className="flex flex-nowrap w-full">
        <Sidenav />
        <div className="py-20 pb-5 px-6 w-screen h-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}