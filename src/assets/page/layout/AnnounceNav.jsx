import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { AnnounceContext } from "../../context/AnnounceIsOpen";

const AnnounceNav = () => {
  const { isOpen, setIsOpen } = useContext(AnnounceContext);

  return (isOpen && (
    <div className="fixed w-full z-50">
      <div className="flex justify-center text-center items-center w-full h-8 bg-Green ">
        <p 
          className='text-black text-sm font-semibold sm:font-bold text-center'
        >
            Just Restocked | Shop Our Fragrance Collection
        </p>
        <button 
          onClick={() => {setIsOpen(prev => !prev)}}
          className="absolute right-6 cursor-pointer"
        >
          <IoClose />
        </button>
      </div>
    </div>
    )
  )
}

export default AnnounceNav