import HeroImageDesktop from "../assets/images/image-hero-desktop.png";
import HeroImageMobile from "../assets/images/image-hero-mobile.png";
import clientAudioPhile from "../assets/images/client-audiophile.svg";
import clientDatabiz from "../assets/images/client-databiz.svg";
import clientMaker from "../assets/images/client-maker.svg";
import clientMeet from "../assets/images/client-meet.svg";

const MainContent = () => {
  return (
    <main className="max-w-[1140px] w-full md:mt-[130px] mx-auto">
      <div className="flex md:flex-row flex-col-reverse justify-between">
        <div className="md:max-w-[512px] flex flex-col justify-end items-center md:items-stretch px-4 md:px-0 md:pr-2">
          <div className="flex md:flex-col flex-row gap-2 text-4xl leading-none font-bold mb-6 md:mb-0">
            <h1 className=" md:text-[80px]">Make</h1>
            <h2 className="md:text-[78px] md:mb-6">remote work</h2>
          </div>
          <p className="text-black/50 text-md md:text-lg font-semibold mb-6 md:mb-16 text-center md:text-left">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <a
            href="#"
            className="w-max bg-black text-white font-bold rounded-2xl px-7 h-14 flex items-center mb-14 md:mb-[120px]"
          >
            Learn more
          </a>
          <div className="flex md:gap-2 gap-6 justify-between">
            <div>
              <img
                className="object-contain"
                src={clientDatabiz}
                alt="databiz"
              />
            </div>
            <div>
              <img
                className="object-contain"
                src={clientAudioPhile}
                alt="audiophile"
              />
            </div>
            <div>
              <img className="object-contain" src={clientMeet} alt="meet" />
            </div>
            <div>
              <img className="object-contain" src={clientMaker} alt="maker" />
            </div>
          </div>
        </div>
        <div className="mb-14 md:mb-0">
          <picture>
            <source media="(min-width: 768px)" srcSet={HeroImageDesktop} />
            <img
              src={HeroImageMobile}
              alt="hero image"
              className="md:max-w-[480px]"
            />
          </picture>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
