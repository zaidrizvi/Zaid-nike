import {headerLogo} from '../assets/assets/images'
import {hamburger} from '../assets/assets/icons'

import {navLinks} from '../constants'

const nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>

            <ul className='f flex-1 flex justify-center items-center gap-16 max-lg:hidden'>

              {navLinks.map((item)=>(
                <li key={item.label}>
                 <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                  {item.label}
                 </a>
                </li>
            
              ))}
              
              <li> <a href="Sign in" className='c text-black'>Sign in /Explore now</a></li>
            </ul>

            <div className=' hidden max-lg:block'>
              <img src={hamburger} width={25} height={25}></img>
            </div>
        </nav>
    </header>
  )
}

export default nav