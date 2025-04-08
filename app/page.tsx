import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//COMPONENTS

// import Social from "@/components/Social";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Web Developer</span>
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold">
              Hello, I'm <br />{" "}
              <span className="text-[#00e187]">Chidi Henre</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* btn and socials */}

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex item-center gap-2 hover:text-black"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">{/* <Social on /> */}</div>
            </div>
          </div>

          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
