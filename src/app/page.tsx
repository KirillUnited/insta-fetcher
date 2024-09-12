import { HeroSection } from "@/components/shared";
import { DataSection, DataTable } from "@/components/shared/data";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default async function Home() {
  let data = [];

  try {
    data = await fetch("http://localhost:3000/api/users", {
      method: "GET",
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }

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
