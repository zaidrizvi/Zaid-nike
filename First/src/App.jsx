import CustomerReview from "./CustomerReview";
import Footer from "./Footer";
import Hero from "./Hero";
import PopularProduct from "./PopularProduct";
import Services from "./Services";
import Specialoffer from "./Specialoffer";
import Subscribe from "./Subscribe";
import SuperQuality from "./SuperQuality";
import Nav from "./components/nav";

const App = () => {
  return (
    <div className="relative">
      <Nav></Nav>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero></Hero>
      </section>

      <section className="padding">
        <PopularProduct></PopularProduct>
      </section>

      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>

      <section className="padding-x py-10">
        <Services></Services>
      </section>

      <section className="padding">
        <Specialoffer></Specialoffer>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview></CustomerReview>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe></Subscribe>
      </section>

      <section className="padding bg-black padding-x padding-t">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default App;
