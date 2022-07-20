import Image from 'next/image';

function SmallCard({ img, distance, location }) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      <div className='relative h-16 w-16'>
        <Image
          src={img}
          layout='fill'
          alt='offer image'
          className='rounded-lg'
        />
      </div>
      <div>
        <h2>{distance}</h2>
        <h3 className='text-gray-500 '>{location}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
