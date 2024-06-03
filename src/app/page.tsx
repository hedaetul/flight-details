import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { MdFlightTakeoff, MdOutlineTour } from 'react-icons/md';
import { RiArrowDropDownLine, RiHotelLine } from 'react-icons/ri';

const Page = () => {
  return (
    <div>
      <div className='banner min-h-[925px]'>
        <div className='container'>
          <nav className='flex justify-between items-center'>
            <Image
              width={20}
              height={20}
              src='/src/dist/images/logo.png'
              alt='logo'
            />
            <div className='flex justify-center items-center gap-4'>
              <h3 className='text-sm font-medium text-gray-700 cursor-pointer'>
                BDT{' '}
                <RiArrowDropDownLine className='inline text-2xl text-gray-700' />
              </h3>
              <Button>Sign In</Button>
            </div>
          </nav>
          <div className='flex-col-center mt-20 relative'>
            <div className='bg-white flex px-16 py-5 rounded-md shadow-lg absolute top-[-50px]'>
              <h2 className='text-sm font-medium mr-6 cursor-pointer'>
                <MdFlightTakeoff className='inline text-2xl mr-1' /> Flight
              </h2>
              <h2 className='text-sm font-medium mr-6 cursor-pointer'>
                <RiHotelLine className='inline text-2xl mr-1' /> Hotel
              </h2>
              <h2 className='text-sm font-medium cursor-pointer'>
                <MdOutlineTour className='inline text-2xl mr-1' />
                Tour
              </h2>
            </div>
            <div className='w-full py-9 rounded-2xl bg-white'>
              <div className='flex justify-evenly'>
                <div className='flight-card px-3 py-1'>
                  <h3 className='text-sm uppercase text-gray-500'>From</h3>
                  <h2 className='text-xl font-bold'>Dhaka</h2>
                  <p className='text-gray-500'>
                    DAC, Hazrat Shahjalal International...
                  </p>
                </div>
                <div className='flight-card px-3 py-1 relative'>
                  <div className='w-fit rounded-full bg-white border flex-col-center p-3 absolute left-[-40px] top-[15px]'>
                    <FaArrowRightArrowLeft className='text-2xl' />
                  </div>
                  <h3 className='text-sm uppercase text-gray-500'>To</h3>
                  <h2 className='text-xl font-bold'>Cox`s Bazar</h2>
                  <p className='text-gray-500'>CXB, Cox`s Bazar Airport</p>
                </div>
                <div className='flight-card w-[280px] grid grid-cols-2'>
                  <div className='border-r-2 px-3 py-1'>
                    <h3 className='text-sm uppercase text-gray-500'>
                      Journey Date
                    </h3>
                    <h2 className='text-xl font-bold'>8 Jun 24</h2>
                    <p className='text-gray-500'>Saturday</p>
                  </div>
                  <div className='px-3 py-1'>
                    <h3 className='text-sm uppercase text-gray-500'>
                      Return Date
                    </h3>
                    <p className='text-gray-500'>Save more on return flight</p>
                  </div>
                </div>
                <div className='flight-card w-52 px-3 py-1'>
                  <h3 className='text-sm uppercase text-gray-500'>
                    Traveler Class
                  </h3>
                  <h2 className='text-xl font-bold'>1 Traveler</h2>
                  <p className='text-gray-500'>Economy</p>
                </div>
              </div>
              <div className='flex-row-center relative'>
                <Button
                  size='lg'
                  className='bg-yellow-500 px-12 font-semibold text-white absolute bottom-[-55px]'
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
