import Head from "next/head";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import Image from "next/image";

const Home = () => {
  const onBreedChange = (id: string) => {};

  return (
    <>
      <Head>
        <title>Doggy finder</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-4 flex flex-col justify-center items-center w-full ">
        
        <h1 className="text-2xl mb-5">Doggy Directory 🐶</h1>
        <div className="flex gap-2 mb-8">
          <Dropdown
            list={[{ id: "1", label: "doberman" }]}
            value="1"
            title="Select a breed"
            onChange={onBreedChange}
          />
          <Button>search</Button>
        </div>
          <Image src='/images/undraw_relaxing_walk.svg' width={600} height={500}/>
      </main>
    </>
  );
};

export default Home;
