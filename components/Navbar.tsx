"use client"

import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="wax-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image 
                src="car-logo-.svg"
                alt="Car Hub Logo"
                width={80}
                height={15}
                className="object-contain"/>
            </Link>

            <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-gray rounded-full bg-white min-w-[130px]"/>
        </nav>
    </header>
  )
}

export default Navbar