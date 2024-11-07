import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js E-commerce Dashboard | Agua - Next.js Dashboard Template",
  description: "This is Next.js Home for Agua Dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <h1>Dashboard</h1>
        {/* <ECommerce /> */}
      </DefaultLayout>
    </>
  );
}
