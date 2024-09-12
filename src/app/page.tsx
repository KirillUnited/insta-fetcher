import { HeroSection } from "@/components/shared";
import { DataSection, DataTable } from "@/components/shared/data";
import getUsers from "@/lib/getUsers";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default async function Home() {
  const data = await getUsers();

  return (
    <>
      <HeroSection />
      <DataSection>
        <Suspense fallback={<Loader2 className="w-10 h-10 animate-spin" />}>
          <DataTable data={data} />
        </Suspense>
      </DataSection>
    </>
  );
}