import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import data from "../data/data.json";

// dodac props lub {exploreData}
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Just Time</title>
        <link rel="icon" href="/Logo.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section>
          <h2 className="text-4xl font-semibold pb-5">Explore offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map(({ id, img, distance, location }) => (
              <SmallCard
                key={id}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Find your specialist</h2>
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

// export async function getStaticProps() {
//   const exploreData = await (
//     await fetch('address - end point')
//   ).then((res) => res.json());

//   return {
//     props: {
//       exploreData,
//     },
//   };
// }

//// Pobrać puste foto grafike IT PRAWNIK INZYNIER DORADCA ITP i zrobić bardziej sensowna baze danych
// dodatkowa sekcja
// footer

// odpalic front strone ta z SYG / przerobic na landing JT
// backend ogarnac w mongoDB
// projekty stron wizualne
