import { HeroSection } from "@/components/shared";
import { DataSection, DataTable } from "@/components/shared/data";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <DataSection>
        <DataTable />
      </DataSection>
    </>
  );
}
