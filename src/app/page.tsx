import ListOfChapters from "@/components/chapters/list-of-chapters";
import Banner from "@/components/ui/banner";
import LineContainer from "@/components/ui/line-container";
import WesoWorld from "@/components/ui/weso-world";
import Image from "next/image";

export default function Home() {
  return (
    <section className="lg:grid lg:grid-cols-12">
      <Banner />
      <LineContainer />
      <section className="lg:col-span-3">
        <ListOfChapters />
        <WesoWorld />
      </section>
      
    </section>
  );
}
