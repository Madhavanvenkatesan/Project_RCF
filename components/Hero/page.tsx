import Image from "next/image";
import Button from "../Button/page";

export default function Hero() {
    return (
        <div className="relative flex justify-start items-center h-[75vh] rounded-br-full bg-slate-100">
            {/* Text Section */}
            <div className="flex flex-col justify-center items-start h-full md:w-3/5 w-4/5 pl-20">
                <h1 className="text-5xl font-bold text-gray-800">Welcome to My Website</h1>
                <p className="text-lg text-gray-600 mt-4">
                    Discover our amazing features and services
                    Discover our amazing features and services
                    Discover our amazing features and services
                </p>
                <div className="flex ">
                    <Button label="Get touch" />
                    <Button
                        label="Blog"
                        className="ml-4 border-2 border-slate-600"
                        bgColor="bg-slate-100"
                        hoverBgColor="hover:bg-slate-600"   
                        textColor="bg-slate-800"
                        hoverTextColor="hover:text-white"
                    />
                </div>

            </div>

            {/* Image Section */}
            <div className="absolute right-0 bottom-0 h-full w-1/2">
                <Image
                    src="/eiffletower.svg"
                    alt="Eiffel Tower drawing"
                    layout="fill" // Makes the image fill its parent div
                    objectFit="contain"
                    objectPosition="bottom"
                />
            </div>

        </div>

    )
}