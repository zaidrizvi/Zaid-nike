
import Popularproductcard from './components/popularproductcard'

import { products } from './constants'
const PopularProduct = () => {
  return (
    <section id='about-us' className='max-container mx-sm:mt-12 '>
    <div className='flrx flex-col justify-start gap-5'>
      
      <h2 className='t text-4xl font-palanquin font-bold'>Our <span className='t text-coral-red'>Popular</span> product</h2>

      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem veniam odit laborum, ipsum eaque corrupti error quo placeat dolor harum similique ex.</p>
    </div>
    <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
    sm:gap-4 gap-14'> 

    {products.map((product)=>(
    
    <Popularproductcard key={product.name} {...product}> 
    </Popularproductcard>

    ))}

    </div>

    </section>
  )
}

export default PopularProduct