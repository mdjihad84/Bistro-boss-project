import  { useState, useEffect } from 'react';

const FeaturedSection = ({ imageSrc, subtitle, title, description, buttonText }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Adjust based on your breakpoints
        };
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="py-8">
            <div className="absolute mx-auto lg:ml-[36%] sm:ml-[10%] lg:mt-[-70%] sm:mt-[60%]">
                <p className="text-center text-lg sm:text-xl md:text-2xl font-normal italic text-[#D99904] mt-10 sm:mt-20">{subtitle}</p>
                <hr className="w-[80%] sm:w-[360px] md:w-[424px] h-[4px] mx-auto mt-8 mb-4 bg-[#E8E8E8]" />
                <h2 className="text-center text-2xl sm:text-2xl md:text-4xl text-black">{title}</h2>
                <hr className="w-[80%] sm:w-[360px] md:w-[424px] h-[4px] mt-10 mb-8 bg-[#E8E8E8]" />
            </div>
            <div className="relative w-full max-w-[1096px] h-[300px] mx-auto sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-[648px] h-[300px]">
                    <img src={imageSrc} alt={`Image of ${title}`} className="w-full h-full object-cover sm:h-48 md:h-full" />
                </div>
                <div
                    className="w-full md:w-[740px] mt-4 md:mt-0 md:ml-6 px-2 sm:px-4"
                    style={{ position: isSmallScreen ? 'absolute' : 'relative' }}
                >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white">{title}</h3>
                    <p className="text-white font-normal text-xs sm:text-sm md:text-base lg:text-2xl mt-2 sm:mt-4">
                        {description}
                    </p>
                    <button className="btn mt-3 sm:mt-4 border-none bg-transparent text-xs sm:text-sm md:text-base lg:text-xl text-white border border-2 border-solid hover:bg-black">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;
