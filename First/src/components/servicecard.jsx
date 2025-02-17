

const Servicecard = ({imgURL , label , subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] w-full sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16 h hover:shadow-sky-200">

        <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full flex">
            <img src={imgURL} width={24} height={24}></img>
        </div>

        <h3 className="mt-5 font-palanquin text-3xl leading-normal">{label}</h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-grey">{subtext}</p>
    </div>
  )
}

export default Servicecard