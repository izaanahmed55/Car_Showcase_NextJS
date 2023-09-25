"use client"

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleScroll = () => {
        
    }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title text-blue-900">
            Discover, Reserve, or Lease Your Dream Ride - Swiftly and Effortlessly!
            </h1>
            <p className="hero__subtitle">
                Streamline your car rental experience with out effortless booking process.
            </p>

            <CustomButton
            title="Rent A Car Now"
            containerStyles="bg-primary-gray text-white rounded-full mt-10"
            handleClick={() => {handleScroll}}/>
        </div>

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain"/>
            </div>
            <div className="hero__image-overlay"/>
        </div>
    </div>
  )
}

export default Hero