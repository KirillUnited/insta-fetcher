import { Header, Hero } from "@/components/shared";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="flex-1">
        <Hero />
      </div>
    </main>
  );
}
