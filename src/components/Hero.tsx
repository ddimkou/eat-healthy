import BlobAnimation from "./BlobAnimation";

// const Hero = () => {
//   return (
//     <div className="blobContainer flex items-center justify-center lg:justify-between">
//       <div className="text-forest-green z-10 px-12 font-bold flex flex-col items-center justify-center">
//         <p className="text-4xl md:text-7xl">Eat Healthy</p>
//         <div>
//           <p className="text-2xl md:text-3xl">Eat Clean, Live Green.</p>
//         </div>
//       </div>
//       <BlobAnimation />
//       <div
//         className="absolute z-10 bottom-0 right-0
//        bg-herobg bg-contain bg-no-repeat bg-right-bottom
//        hidden lg:block w-full h-full"
//       ></div>
//     </div>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <div className="blobContainer flex items-center justify-center xl:justify-between relative">
      {/* text */}
      <div className="text-cranberry-red xl:text-forest-green z-10 px-12 font-bold flex flex-col items-center justify-center relative">
        <p className="text-5xl md:text-7xl">Eat Healthy</p>
        <div className="w-full h-[24vh] md:h-[35vh] xl:hidden bg-logobg bg-cover bg-center"></div>
        <div>
          <p className="text-2xl md:text-3xl">Eat Clean, Live Green.</p>
        </div>
      </div>
      <BlobAnimation />
      {/* right image */}
      <div className="absolute z-10 bottom-0 right-0 bg-herobg bg-contain bg-no-repeat bg-right-bottom hidden xl:block w-full h-full"></div>
    </div>
  );
};

export default Hero;
