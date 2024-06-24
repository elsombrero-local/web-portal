import { Metadata } from "next";
import Link from "next/link";

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
      <Link href="/services/logout">Logout</Link>
      {children}
    </main>
  );
}