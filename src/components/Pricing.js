import Footer from "./Footer";
import HeroImage from "./Heroimage";
import Navbar from "./Navbar";
import PricingComp from "./PricingComp";

const Pricing = () => {
    return ( 
<div>
    <Navbar/>
    <HeroImage heading="Pricing" text="Choose your trip"/>
    <PricingComp />
    <Footer/>
</div>
    );
}

export default Pricing;