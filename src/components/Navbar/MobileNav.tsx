import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'
import { images } from '@/constants'
import { navlinks } from '@/constants/data'

const MobileNav = () => {
  return (
    <nav>
      <Sheet>
        <SheetTrigger asChild>
          <Menu size={24} />
        </SheetTrigger>
        <SheetContent
          aria-describedby='Navigation'
          className='bg-my-black max-w-[200px] border-none shadow-md shadow-my-softgray flex flex-col'
        >
          <SheetHeader>
            <img src={images.gericht} alt='logo' className='w-[200px]' />
          </SheetHeader>
          <div className='flex flex-col gap-10 items-start mt-10'>
            {navlinks.map((link) => (
              <SheetClose
                key={link.title}
                className='text-my-softgray text-2xl hover:text-my-golden'
                asChild
              >
                <span>{link.title}</span>
              </SheetClose>
            ))}
          </div>
          <div className='w-full flex flex-col gap-10'>
            <SheetClose asChild>
              <button
                type='button'
                className='rounded-full mx-auto text-white hover:border hover:border-my-golden py-2 px-10 text-xl'
              >
                Log in / Registration
              </button>
            </SheetClose>
            <SheetClose asChild>
              <button
                type='button'
                className='rounded-full mx-auto text-white hover:border hover:border-my-golden py-2 px-10 text-xl'
              >
                Book a table
              </button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
