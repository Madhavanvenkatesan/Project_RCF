import React from "react";
import Image from "next/image";

interface Feature {
    icon: string; // Image source for the icon
    title: string;
    desc: string;
}

const FeaturesSection: React.FC = () => {
    const features: Feature[] = [
        {
            icon: "/teaching.svg", // Replace with actual image path
            title: "Fast Refresh",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue.",
        },
        {
            icon: "/teaching.svg", // Replace with actual image path
            title: "Secure Data",
            desc: "Your data is protected with industry-standard security measures.",
        },
        {
            icon: "/teaching.svg", // Replace with actual image path
            title: "Fast Refresh",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue.",
        },
        {
            icon: "/teaching.svg", // Replace with actual image path
            title: "Secure Data",
            desc: "Your data is protected with industry-standard security measures.",
        },
    ];

    return (
        <section className="relative py-28 my-28 bg-slate-100">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 justify-between gap-24 lg:flex md:px-8">
                {/* Heading Section */}
                <div className="max-w-xl">
                    <h3 className="text-3xl font-semibold sm:text-4xl">
                        Do more with less complexity
                    </h3>
                    <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue,
                        nisl eget molestie varius, enim ex faucibus purus
                    </p>
                </div>
                {/* Features List */}
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {features.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4">
                                <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={48}
                                        height={48}
                                        className="rounded-md"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="mt-3">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Gradient Background */}
            <div
                className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
                style={{
                    background:
                        "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
                }}
            ></div>
        </section>
    );
};

export default FeaturesSection;
