import Image from 'next/image';
import BannerImg from '../public/bannerImgClock.jpeg';
function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src={BannerImg}
        layout='fill'
        objectFit='cover'
        alt='banner image'
        priority
      />
      <div className='absolute font-bold text-themeDark text-center w-full top-1/2 bg-themeLight bg-opacity-80 md:bg-transparent md:left-5 md:bottom-5 md:top-auto  md:w-auto xl:top-1/2'>
        <p className='md:bg-opacity-70 md:bg-themeLight rounded-xl text-lg md:text-2xl lg:text-4xl text-center'>
          Time is not returnable, nor refundale.
          <br /> But is tradable, before it comes.
        </p>
        <div className='space-x-4'>
          <button className='text-themeDark text-sm md:text-lg lg:text-2xl bg-themeLight px-6 py-2 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
            Hire!
          </button>
          <button className='text-themePrimary text-sm md:text-lg lg:text-2xl bg-themeLight px-6 py-2 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
            Post your Offer!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
