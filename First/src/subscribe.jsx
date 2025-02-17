
import Button from "./components/button";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 " id="contact-us">
     
     <h3 className=" text-center font-montserrat text-4xl leading-[68px] lg:max-w-md font-bold">Sign up for <span className=" text-coral-red ">Updates</span> & Newsletter</h3>

     <div className="lg:max-w-[50%] w-full flex items-center max-sm:flex-row gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
  <input type="text" placeholder="Subscribe" className="input" />

  <div className="flex max-sm:justify-end items-center max-sm:w-full ">
    <Button label="Shop now" />
  </div>
</div>


    </section>
  )
}

export default Subscribe