import Image from "next/image"
import { data } from '../util/data'
function SmallCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {data &&
            data.map(({img, distance, location}) => (
             <>
             <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
                <div className="relative h-16 w-16">
                        <Image src={img} layout="fill" className="rounded-lg" />
                    </div>
                    <div>
                        <h2>{location}</h2>
                        <h3 className="text-gray-500">{distance}</h3>
                    </div>
             </div>
             </>
            ))}
    </div>
        
      
    
  )
}

export default SmallCard
