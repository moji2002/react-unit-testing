import Head from "next/head"
import Dropdown from "../components/Dropdown"
import Button from "../components/Button"
import Image from "next/image"
import useDoggy from "../hooks/useDoggy"
import { useMemo } from "react"
import ImageCard from "../components/ImageCard"

const Home = () => {
  const {
    breeds,
    dogImages,
    isLoading,
    selectedBreed,
    onBreedChange,
    fetchImages,
  } = useDoggy()

  const normalizedBreeds = useMemo(() => {
    return breeds.map((b) => ({ id: b, label: b }))
  }, [breeds])

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
            list={normalizedBreeds}
            value={selectedBreed}
            title={selectedBreed || "Select a breed"}
            onChange={onBreedChange}
          />
          <Button disabled={!selectedBreed} onClick={fetchImages} loading={isLoading}> 
            search
          </Button>
        </div>

        {!dogImages.length && !isLoading && (
          <Image
            src="/images/undraw_relaxing_walk.svg"
            width={600}
            height={500}
            alt=""
          />
        )}

        <div className="flex flex-wrap justify-center w-full gap-1 ">
          {dogImages.map((src) => (
            <ImageCard key={src} src={src} />
          ))}
        </div>
      </main>
    </>
  )
}

export default Home
