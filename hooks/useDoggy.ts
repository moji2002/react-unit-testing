import { useEffect, useState } from "react"
import client from "../libs/client"

const api = client("https://dog.ceo/api")

const useDoggy = () => {
  const [breeds, setBreeds] = useState<string[]>([])
  const [selectedBreed, setSelectedBreed] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [dogImages, setDogImages] = useState([])

  const onBreedChange = async (breed: string) => {
    setSelectedBreed(breed)
    setDogImages([])
  }

  const fetchImages = async () => {
    setIsLoading(true)
    try {
      const result = await api(`breed/${selectedBreed}/images`)

      setDogImages(result.message)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await api("breeds/list/all")
        setBreeds(Object.keys(result.message))
      } catch (error) {
        console.log(error)
      }
    }

    fetch()
  }, [])

  return {
    breeds,
    selectedBreed,
    onBreedChange,
    fetchImages,
    isLoading,
    dogImages,
  }
}

export default useDoggy
