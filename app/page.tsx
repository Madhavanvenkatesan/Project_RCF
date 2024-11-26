
"use client"
import Hero from "@/components/Hero/page";
import Servicecard from "@/components/Servicecard/page";

export default function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl my-12">Notre Expertise à Votre Service</h2>
        <div className="flex flex-wrap items-center justify-center ">
        <Servicecard label="Coaching" imgsrc="/coaching.svg" cardinfo="The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona." />
        <Servicecard label="Formation en Ligne" imgsrc="/teaching-online.svg" cardinfo="The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona." />
        <Servicecard label="Formation sur Place" imgsrc="/teaching.svg" cardinfo="The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona." />
        </div>
      </section>
      <section className="flex flex-col items-center bg-slate-100">
        <h2 className="text-2xl md:text-3xl my-12">Nos Offres de Soutien</h2>
        <div className="flex flex-wrap items-center justify-center ">

        </div>
      </section>
    </div>
  );
}
