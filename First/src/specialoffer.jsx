import { offer } from "./assets/assets/images"

import Button from "./components/button"
const Specialoffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">

      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-fu;;"></img>
      </div>

      <div className="flex flex-1 flex-col">
       
        <h2 className="mt-10 font-palanquin text-4xl  capitalize font-bold max-w-lg">
         
          
          <span className=" text-coral-red "> Special </span>
          
          Offer Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovtion for
          your active life. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque eos error nisi, cupiditate quod itaque recusandae minus magni voluptas, maiores molestias!
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
         Our Dedication to detail and excellence ensure satisfation
        </p>

        <div className="mt-11 flex flex-wrap flex-4">
        <Button label="Shop now" />
        </div>

        
      </div>

    </section>
  )
}

export default Specialoffer