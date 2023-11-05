import banner from '../../assets/banner.jpg'
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <div className="relative w-full max-w-7xl mx-auto">
        <img src={banner} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full gap-5 left-0 top-0  rounded-xl" data-aos="fade-up" data-aos-duration="3000">
          <div className='text-white space-y-7 pl-4 lg:pl-12'>
            <h2 className='md:text-4xl lg:text-6xl font-bold'> <span style={{ fontWeight: 'bold' }}>
          <Typewriter
            words={['StuddyBuddy...']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h2>
            <h2 className='md:text-3xl lg:text-4xl font-bold'>Connecting Learners, Fostering Growth and Achieving Success </h2>
            <div className='flex gap-5'>
              <button className='btn btn-outline btn-accent'>Show Details</button>
              <button className='btn btn-accent mb-16 lg:mb-0 text-white'>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;