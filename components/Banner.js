import Image from "next/image"
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[500px] xl:h-[500px]">
      <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" alt="Banner image" />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to Go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover: shadow-xl active:scale-90 transition duration-150"> I&apos;m flexible</button>
      </div>
    </div>
  )
}

export default Banner
