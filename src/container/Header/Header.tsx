import "./Header.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper.tsx";
import { images } from "@/constants";

const Header = () => (
  <section className={"pt-16 md:section-padding-y text-my-softgray"}>
    <MaxWidthWrapper
      className={"flex flex-col lg:justify-between lg:flex-row items-center"}
    >
      {/*  flex container*/}
      <div className={"relative flex flex-1 gap-16 h-full items-center"}>
        {/* left container */}
        <div className={"font-alt flex flex-col gap-4 text-xs md:text-base"}>
          {" "}
          <span className={"sideways rotate-180"}>#Bar</span>
          <span className={"sideways rotate-180"}>#Gericht</span>
        </div>
        {/* left main content container*/}
        <div>
          <div className={"space-y-2"}>
            <p className={"text-lg md:text-xl lg:text-h5 font-base text-white"}>
              Chase the New Flavour
            </p>
            <img src={images.spoon} alt="spoon" aria-hidden={true} />
          </div>

          <div className={"text-center lg:text-left"}>
            <h1
              className={
                "text-5xl md:text-7xl lg:text-h1 mt-3 text-my-golden font-base lg:leading-[117px]"
              }
            >
              The Key To Fine Dining
            </h1>

            <p className={"max-w-prose lg:max-w-sm pb-8 pt-2 mx-auto lg:mx-0"}>
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus{" "}
            </p>
            <button
              className={
                "font-base font-semibold px-3 py-2 bg-my-golden text-my-black rounded-[5px] border-none outline-none"
              }
            >
              Explore Menu
            </button>
          </div>
        </div>
      </div>
      <div className={"flex-1 mt-20"}>
        <img
          src={images.welcome}
          alt="Meal"
          className={"px-16 max-w-[500px] xl:max-w-xl"}
        />
      </div>
    </MaxWidthWrapper>
  </section>
);

export default Header;
