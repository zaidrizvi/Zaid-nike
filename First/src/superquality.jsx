import { shoe8 } from "./assets/assets/images";
import Button from "./components/button";

const SuperQuality = () => {
  return (
    <section
      id="products"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
       
        <h2 className="mt-10 font-palanquin text-4xl  capitalize font-bold max-w-lg">
         We Provide YOU 
          
          <span className=" text-coral-red "> Super </span>
          <span className=" text-coral-red ">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovtion for
          your active life. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque eos error nisi, cupiditate quod itaque recusandae minus magni voluptas, maiores molestias!
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
         Our Dedication to detail and excellence ensure satisfation
        </p>

        <div className="mt-11">
        <Button label="View Details" />
        </div>

        
      </div>

      <div className="flex-1 flex justify-center items-center ">
   <img src={shoe8} alt="" width={570} height={522} className="o object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
