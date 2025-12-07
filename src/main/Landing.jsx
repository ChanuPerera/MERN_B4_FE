import React from "react";
import CustomerCreate from "./CustomerCreate";


const LandingPage = () => {

    const watches = [
        {
            id: 1,
            name: "Apex Chrono",
            price: "$499",
            img: "data:image/webp;base64,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",
            description: "Stainless steel body with sapphire crystal glass."
        },
        {
            id: 2,
            name: "Velox Prime",
            price: "$649",
            img: "https://th.bing.com/th/id/OIF.jRWxFaRMwpgXDgT0ZFe6Sw?w=226&h=220&c=7&r=0&o=7&pid=1.7&rm=3",
            description: "Luxury automatic watch with leather strap."
        },
        {
            id: 3,
            name: "Lunar Edge",
            price: "$799",
            img: "https://th.bing.com/th?id=OIF.l67WJ7yQIfS6lMMAeAT8%2bw&w=295&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            description: "Moonphase dial with luminous markers."
        },
        {
            id: 4,
            name: "Titan Shadow",
            price: "$559",
            img: "https://th.bing.com/th/id/OIF.taJ1b2tvIi5rGApTGV0c5g?w=343&h=175&c=7&r=0&o=7&pid=1.7&rm=3",
            description: "Matte black titanium design with chronograph."
        },
        {
            id: 5,
            name: "Azure Classic",
            price: "$399",
            img: "https://th.bing.com/th/id/OIP.3Cfj3hv63prXIj2_rpbgegHaEK?w=274&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            description: "Elegant dress watch with minimalistic blue dial."
        },
        {
            id: 6,
            name: "Nova Sport",
            price: "$429",
            img: "https://th.bing.com/th/id/OIP.-dHKikHXeIIAfCRMtB81HQHaEL?w=304&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            description: "Sporty waterproof casing and durable rubber strap."
        },
        {
            id: 7,
            name: "Eclipse Phantom",
            price: "$699",
            img: "https://th.bing.com/th?id=OIF.4NWXjstW26ojwO%2bpyfbskw&w=188&h=188&c=7&r=0&o=7&pid=1.7&rm=3",
            description: "Dark aesthetic with precision movement."
        },
        {
            id: 8,
            name: "Imperial Gold",
            price: "$899",
            img: "https://th.bing.com/th/id/OIF.sKHyNwFiokI0ih6aU1VOOg?w=350&h=175&c=7&r=0&o=7&pid=1.7&rm=3",
            description: "Gold-plated premium craftsmanship."
        },
    ];


    return(
        <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white font-sans">

            {/* Navbar */}
            <header className="sticky top-0 z-50 border-b border-gray-800 backdrop-blur-lg">
                <nav className="container mx-auto flex justify-between items-center py-4 px-6">

                    {/* logo */}
                    <div className="text-2xl font-bold tracking-wide text-white">
                        Premium <span className="text-blue-500">Watches</span>
                    </div>

                    {/* desktop nav */}
                    <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
                        <li><a href="#home" className="hover:text-blue-400 duration-200">Home</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 duration-200">Contact Us</a></li>
                        <li><a href="#about" className="hover:text-blue-400 duration-200">About Us</a></li>
                    </ul>

                    {/* pre order */}
                    <button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-2 text-white">
                        Pre Order
                    </button>
                </nav>
            </header>

            {/* Hero Section */}
            <div className="relative flex items-center justify-center text-center px-6 md:px-12 py-24 md:py-40 ">
                <div className="text-2xl font-bold tracking-wide text-white">
                    Premium <span className="text-blue-500">Watches</span>
                </div>
            </div>

            {/* Featured Selection Section */}
            <section className="py-20 px-6 md:px-12">
                <h2 className="text-4xl font-bold mb-10 text-center">
                    Featured <span className="text-blue-500">Selection</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

                    {watches.map((watch) => (
                        <div
                            key={watch.id}
                            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-4 shadow-xl
                                       hover:scale-105 hover:shadow-blue-500/20 transition-all duration-300"
                        >
                            <div className="w-full h-48 overflow-hidden rounded-xl">
                                <img
                                    src={watch.img}
                                    alt={watch.name}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xl font-semibold">{watch.name}</h3>
                                <p className="text-gray-300 text-sm mt-1">{watch.description}</p>
                                <p className="text-blue-400 font-bold mt-3">{watch.price}</p>
                            </div>

                            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg transition">
                                View Details
                            </button>
                        </div>
                    ))}



                </div>
            </section>


                <CustomerCreate/>



        </div>
    );
};


export default LandingPage;
