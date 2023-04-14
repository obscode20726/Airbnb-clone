import Image from "next/image"
import { cardsData } from '../util/data'
function MediumCard() {
  return (
    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
      {cardsData &&
            cardsData.map(({img, title}) => (
                <>
                <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
                    <div className="relative h-80 w-80">
                        <Image src={img} layout="fill" className="rounded-xl" />
                    </div>
                    <h3 className="text-2xl mt-3">{title}</h3>
                </div>
                    
                
                
                </>
            ))}
    </div>
  )
}

export default MediumCard
