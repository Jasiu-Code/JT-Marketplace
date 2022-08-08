import { StarIcon } from '@heroicons/react/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/outline';
import Image from 'next/image';
import { useState } from 'react';

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  const [favourite, setFavourite] = useState(false);

  return (
    <div
      className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition 
    duration-200 ease-out first:border-t'
    >
      <div className='relative h-16 w-16 md:h-24 md:w-24 flex-shrink-0'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          alt='image'
          className='rounded-3xl'
        />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <h4 className='text-xl'>{title}</h4>
          <div onClick={() => setFavourite(!favourite)}>
            {favourite && <StarIconOutline className='h-7 cursor-pointer' />}
            {!favourite && <StarIcon className='h-7 cursor-pointer' />}
          </div>
        </div>
        <div className='flex justify-between'>
          <p>{location}</p>

          <p className='text-lg font-semibold pb-2 lg:2xl'>{price}</p>
        </div>
        <div className='border-b w-10 pt-2' />
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'></p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
