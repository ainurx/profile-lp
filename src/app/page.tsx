import Hero from "@/components/section/Hero";
import Article from "@/components/widget/Article";
import Card from "@/components/widget/Card";
import Quote from "@/components/widget/Quote";

export default function Home() {
  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start px-32 pb-24">
        <Hero/>
        <div className="flex w-full">
          <div>
            <Quote/>
            <Card/>
          </div>
          <Article/>
        </div>
      </main>
  );
}
