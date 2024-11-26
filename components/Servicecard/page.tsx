import Image from "next/image";
import Button from "../Button/page";

interface CardProps {
    label: string;
    imgsrc: string;
    cardinfo: string;
}

const ServiceCard: React.FC<CardProps> = ({ label, imgsrc, cardinfo }) => {
    return (
        <div className="flex flex-col items-center md:w-80 h-96 p-4 m-4 md:m-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-40 h-40 mb-4">
                <Image
                    src={imgsrc}
                    alt={label}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                />
            </div>
            <div className="self-start h-[40%] overflow-hidden">
                <h5 className="text-lg">
                {label}
                </h5>
                <p className="text-sm mt-4">
                {cardinfo}
                </p>
            </div>
            <Button label="plus.." className="place-self-stretch md:place-self-end text-sm mb-0" />
        </div>
    );
};

export default ServiceCard;
