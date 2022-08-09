import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import data from "../data/data.json";
///dsads
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Just Time</title>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="py-5 md:py-10 border-y-2 border-themePrimary">
          <h3 className="text-md md:text-2xl pb-5 text-center font-semibold">
            Just time - Title
          </h3>
          <p className="text-sm md:text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            dolor cum consectetur distinctio porro sequi placeat eos temporibus
            quo iste fuga autem, culpa pariatur nulla illum. Adipisci quidem
            dolorum facere.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            doloribus quo libero, nulla ut assumenda ducimus aperiam et. Fuga
            sit nostrum maiores id voluptates! Expedita earum quidem consequatur
            ullam vel?
          </p>
        </section>
        <section className="pb-5 border-b-2">
          <h2 className="text-2xl font-semibold pb-5">Explore offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map(({ id, img, hourlyRate, type }) => (
              <SmallCard
                key={id}
                img={img}
                hourlyRate={hourlyRate}
                type={type}
              />
            ))}
          </div>
        </section>
        <section className="pb-5 border-b-2">
          <h2 className="text-2xl font-semibold py-8">Find your specialist</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {data?.map(({ id, img, title }) => (
              <MediumCard key={id} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="/Logo.png"
          title="Sample Title"
          decription="Awesome sample description"
          buttonText="Get shit done"
        />
      </main>
      <Footer />
    </div>
  );
}
