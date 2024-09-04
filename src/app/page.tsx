import { DataTable, HeroSection } from "@/components/shared";
import DataSection from "@/components/shared/DataSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <DataSection />
      <DataTable />
    </>
  );
}
