import { star } from "../assets/assets/icons";

const Popularproductcard = ({ imgURL, name, price }) => {
    return (
      <div className="flex flex-1 flex-col w-full mx-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px] object-cover" />
        <div>
            <img src={star} alt="rating"  width={24} height={24}/>
            <p className="f font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="text-lg font-bold mt-2">{name}</h3>
        <p className="text-sm text-gray-600">{price}</p>
      </div>
    );
  };
  
  export default Popularproductcard;
  