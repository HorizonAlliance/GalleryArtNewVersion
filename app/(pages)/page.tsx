import { AppleCardsCarouselDemo } from "../(partials)/Carousel";
import Footer from "../(partials)/Footer";
import { HeroParallaxDemo } from "../(partials)/HeroParallax";
import JoinUs from "../(partials)/JoinGallery";
import { RetroGridDemo } from "../(partials)/RetroBgGrid";

const page = () => {
  return (
    <div className="dark:bg-black">
      <RetroGridDemo/>      
      <AppleCardsCarouselDemo />
      <JoinUs/>
      <Footer/>
    </div>
  );
};

export default page;
