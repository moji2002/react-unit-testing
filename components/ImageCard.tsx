/* eslint-disable @next/next/no-img-element */
// import Image from "next/image"
import { FC, useState } from "react"

type Props = {
  src: string
}

const ImageCard: FC<Props> = ({ src }) => {
  const [loaded, setLoaded] = useState(false)

  const onLoad = () => {
    setLoaded(true)
  }

  return (
    <div className=" h-48 w-48 relative border rounded overflow-hidden  ">
      {src && (
        <img
          src={src}
          alt=""
          onLoad={onLoad}
          loading="lazy"
          className={`object-cover z-10 transition-all w-full h-48 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        // <Image
        //   fill
        //   src={src}
        //   loading="lazy"
        //   alt=""
        //   onLoad={onLoad}
        //   className={`object-cover z-10 transition-all ${
        //     loaded ? "opacity-100" : "opacity-0"
        //   }`}
        // />
      )}
    </div>
  )
}

export default ImageCard
