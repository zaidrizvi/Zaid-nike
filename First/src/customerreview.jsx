import { reviews } from './constants'
import ReviewCard from "./components/ReviewCard"

const CustomerReview = () => {
  return (
    <section className="max-container">
<h3 className="font-palanquin text-center text-4xl font-bold">
  What Our <span className="text-coral-red">Customer</span> Says ?
</h3>
   <p className="info-text mt-4 m-auto max-w-lg text-center ">
    Here genuine stories from out satisfied customer about thier exceptional experiene with us.
   </p>

   <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
    {reviews.map((review)=>(
      <ReviewCard key ={review.label} {...review}
      ></ReviewCard>
    ))}

   </div>
    </section>
  )
}

export default CustomerReview