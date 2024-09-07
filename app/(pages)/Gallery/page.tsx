import { FloatingDockDemo } from "@/app/(partials)/FloatingDock";
import { SparklesPreview } from "@/app/(partials)/HeroPartikel";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="h-screen dark:bg-black">
        <SparklesPreview />
      </div>
    </>
  );
};

export default page;
