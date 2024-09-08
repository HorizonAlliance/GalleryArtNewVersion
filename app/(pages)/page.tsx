import { AppleCardsCarouselDemo } from "../(partials)/Carousel";
import Content from "../(partials)/Content";
import Footer from "../(partials)/Footer";
import JoinUs from "../(partials)/JoinGallery";
import { MarqueeDemo } from "../(partials)/MarqueeImage";
import { RetroGridDemo } from "../(partials)/RetroBgGrid";
import { TabsDemo } from "../(partials)/Tabs";
import { TextRevealDemo } from "../(partials)/TextReveal";


const page = () => {
  return (
    <div className="dark:bg-black">
      <RetroGridDemo/>
      <MarqueeDemo/>
      <TextRevealDemo/>
      <Content/>
      <TabsDemo/>
      <JoinUs/>
      <Footer/>
    </div>
  );
};

export default page;
