import Image from 'next/image';

const logos = [
    { name: 'Richie', src: '/richie-logo.svg' },
    { name: 'Richie', src: '/richie-logo.svg' },
    { name: 'Richie', src: '/richie-logo.svg' },
    { name: 'Richie', src: '/richie-logo.svg' },
    { name: 'Richie', src: '/richie-logo.svg' },
    { name: 'Richie', src: '/richie-logo.svg' },
];

export default function LogoCarousel() {
    return (
        <div className="w-full py-2 bg-red-500 overflow-hidden">
            <div className="max-w-[90%] mx-auto relative group">
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

                <div className="flex gap-16 animate-scroll group-hover:[animation-play-state:paused] w-max">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="relative w-32 h-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={128}
                                height={64}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
