import { Metadata } from "next";
import { Navbar } from "../../shared/components/Navbar/Navbar";
import { Sidenav } from "../../shared/components/Sidenav/Sidenav";
import { FliptClient } from "../../api/clients/flipt";
import { FliptFlag } from "../../type/flipt";

export const metadata: Metadata = {
  title: "Web Portal",
  description: "You are connected to your local web portal",
};

export const dynamic = 'force-dynamic';
export const revalidate = 5;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await FliptClient.get<{flags: FliptFlag[]}>('/namespaces/hub/flags');
  
  return (
    <main>
      <Navbar />
      <div className="flex flex-nowrap w-full">
        <Sidenav flags={data.flags} />
        <div className="py-20 pb-5 px-6 w-screen h-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}