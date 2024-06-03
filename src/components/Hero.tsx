import BlobAnimation from "./BlobAnimation";

const Hero = () => {
  return (
    <div className="blobContainer flex items-center justify-center xl:justify-between relative ">
      {/* text w background */}
      <div className="bg-white w-full px-12 py-6 z-10 ">
        <div className="text-cranberry-red xl:text-forest-green font-bold flex flex-col items-start justify-center">
          <p className="text-5xl md:text-7xl">Eat Healthy</p>
          <div className="w-full h-[24vh] md:h-[35vh] xl:hidden bg-logobg bg-cover bg-center"></div>
          <div>
            <p className="text-2xl md:text-3xl ml-1">Eat Clean, Live Green.</p>
          </div>
        </div>
      </div>
      <BlobAnimation />
      {/* right image */}
      <div className="absolute z-10 bottom-0 right-0 bg-herobg bg-contain bg-no-repeat bg-right-bottom hidden xl:block w-full h-full"></div>
    </div>
  );
};

export default Hero;
