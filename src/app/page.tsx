"use client"

import CityCard from "@/components/flightCards"
import Navbar from "@/components/layout/navbar"
import { MdFlightTakeoff, MdOutlineTour } from "react-icons/md"
import { RiHotelLine } from "react-icons/ri"

const Page = () => {
    return (
        <div>
            <div className="banner min-h-[925px]">
                <div className="container">
                    <Navbar />
                    <div className="flex-col-center relative mt-20">
                        <div className="absolute top-[-50px] flex rounded-md bg-white px-16 py-5 shadow-lg">
                            <h2 className="mr-6 cursor-pointer text-sm font-medium">
                                <MdFlightTakeoff className="mr-1 inline text-2xl" />{" "}
                                Flight
                            </h2>
                            <h2 className="mr-6 cursor-pointer text-sm font-medium">
                                <RiHotelLine className="mr-1 inline text-2xl" />{" "}
                                Hotel
                            </h2>
                            <h2 className="cursor-pointer text-sm font-medium">
                                <MdOutlineTour className="mr-1 inline text-2xl" />
                                Tour
                            </h2>
                        </div>
                        <CityCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
