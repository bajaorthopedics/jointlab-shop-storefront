import { Button, Heading } from "@modules/common/components/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-4xl leading-10 text-ui-fg-base font-semibold"
          >
            JointLab Shop
          </Heading>
          <Heading
            level="h2"
            className="text-xl leading-8 text-ui-fg-subtle font-normal mt-4 max-w-2xl"
          >
            Cuida tus articulaciones. Maximiza tu rendimiento. Acelera tu recuperación.
          </Heading>
        </span>
        <LocalizedClientLink href="/store">
          <Button className="bg-joint-navy hover:bg-joint-cyan text-white border-none">
            Ver productos
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  );
};

export default Hero;
