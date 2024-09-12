import { HeroSection } from "@/components/shared";
import { DataSection, DataTable } from "@/components/shared/data";
import getUsers from "@/lib/getUsers";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { INFO } from '@/constants';

export default async function Home() {
  const data = await getUsers();

  return (
    <>
      <HeroSection />
      <DataSection withPanel data={INFO}>
        <Suspense fallback={<Loader2 className="w-10 h-10 animate-spin mx-auto" />}>
          <DataTable data={data} />
        </Suspense>
      </DataSection>
    </>
  );
}