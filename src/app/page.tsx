import { HeroSection, Section } from "@/components/shared";
import { DataPanel, DataTable } from "@/components/shared/data";
import getUsers from "@/lib/getUsers";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import { INFO } from '@/constants';
import { Card } from "@/components/ui/card";

export default async function Home() {
  const data = await getUsers();

  return (
    <>
      <HeroSection />
      <Section>
        <DataPanel {...INFO} />
        <Card className='my-6'>
          <div className='px-6 py-3'>
            <Suspense fallback={<Loader2 className="w-10 h-10 animate-spin mx-auto" />}>
              <DataTable data={data} />
            </Suspense>
          </div>
        </Card>
      </Section>
    </>
  );
}