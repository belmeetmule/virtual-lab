import {Menu, X} from 'lucide-react'
import React from 'react'
import logo from '../assets/logo.png'
import {navItems} from '../constants/index'


export default function Navbar() {

    const [isMobileViewOpen, setIsMobileViewOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMobileViewOpen(!isMobileViewOpen)
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="Logo" className='h-10 w-10 mr-2' />
                    <div className="text-xl tracking-tight"> Company </div>
                </div>

                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className="text-neutral-100 hover:text-orange-500 transition duration-300">
                                {item.label}
                                </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='py-2 px-3 border rounded-md hover:bg-orange-600 transition duration-300'> 
                        Sign In
                    </a>

                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'> 
                        Create an account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMenu}>
                        {isMobileViewOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {isMobileViewOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-3 
                flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <a key={index} href={item.href} className="text-neutral-100 hover:text-orange-500 transtion duration-200">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6 mb-4">
                        <a href="#" className='py-2 px-3 border rounded-md hover:bg-orange-600 transtion duration-200'>
                            Sign In
                        </a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                            Create an account
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}
