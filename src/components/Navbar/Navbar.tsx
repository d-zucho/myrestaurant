import MaxWidthWrapper from '../MaxWidthWrapper'

import { images } from '../../constants'
import { navlinks } from '../../constants/data'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <div className='pt-7'>
      <header className='w-full'>
        <MaxWidthWrapper className='text-white w-full'>
          {/* WRAPPER START */}
          <div
            id='content-wrapper'
            className='flex justify-between items-center w-full'
          >
            <div className='w-[150px] md:w-[150px]'>
              <img
                src={images.gericht}
                alt='logo'
                className='w-full overflow-hidden'
              />
            </div>

            <div className='md:flex items-center gap-10 hidden'>
              {/* nav links */}
              {navlinks.map((link) => (
                <div
                  key={link.title}
                  className='text-white hover:cursor-pointer hover:text-my-golden'
                >
                  <a href={link.url}>{link.title}</a>
                </div>
              ))}
            </div>
            {/* nav buttons */}
            <div className='hidden lg:flex items-center h-full'>
              <Button
                variant={'outline'}
                className='rounded-full border-[1px] border-my-softgray hover:bg-my-softgray hover:text-black transition-all duration-300'
              >
                Log In / Registration
              </Button>
              <div className='w-[2px] bg-gray-100/20 h-8 mx-3 rounded-full' />
              <Button
                variant={'outline'}
                className='rounded-full border-[1px] border-my-softgray hover:bg-my-softgray hover:text-black transition-all duration-300'
              >
                Book a table
              </Button>
            </div>
            <div className='md:hidden'>
              <MobileNav />
            </div>
          </div>
          {/* WRAPPER END */}
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar
