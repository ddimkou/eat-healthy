import BlobAnimation from "./BlobAnimation";

const Hero = () => {
  return (
    <div className="blobContainer flex flex-col xl:flex-row items-center justify-center xl:justify-between relative">
      {/* text w background */}
      <div className="xl:bg-white w-full px-12 py-6 z-10 flex flex-col items-center xl:items-start text-center xl:text-left">
        <div className="text-cranberry-red xl:text-forest-green font-bold">
          <p className=" text-4xl md:text-7xl">Eat Healthy</p>
          <div className="w-full h-[24vh] md:h-[44vh] xl:hidden bg-logobg bg-cover bg-center my-4"></div>
          <div>
            <p className="text-xl md:text-3xl ml-1">Eat Clean, Live Green.</p>
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
