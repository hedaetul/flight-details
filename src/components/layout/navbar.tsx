import Image from "next/image"
import { RiArrowDropDownLine } from "react-icons/ri"
import { Button } from "../ui/button"

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between">
                <Image
                    width={20}
                    height={20}
                    src="/src/dist/images/logo.png"
                    alt="logo"
                />
                <div className="flex items-center justify-center gap-4">
                    <h3 className="cursor-pointer text-sm font-medium text-gray-700">
                        BDT{" "}
                        <RiArrowDropDownLine className="inline text-2xl text-gray-700" />
                    </h3>
                    <Button>Sign In</Button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
