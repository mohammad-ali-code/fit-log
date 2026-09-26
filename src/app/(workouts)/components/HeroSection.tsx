import Image from "next/image";
import heroImage from "@/assets/banner.png";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="bg-[#15171D] border border-[#222630] rounded-2xl p-4 sm:p-14">
            <div className="flex justify-between flex-col-reverse md:flex-row items-center">
                <div className="space-y-5 md:max-w-sm lg:max-w-lg">
                    <p className="text-[#C2F800] font-bold font-inter text-xs">
                        WORKOUT LIBRARY
                    </p>
                    <h1 className="text-4xl lg:text-6xl font-extrabold font-oswald text-white">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>
                    <p className="text-[#9CA3AF] font-inter">
                        FitLog is a dark, no-nonsense gym companion: pick a
                        lift, lock it into today&apos;s plan, and watch the
                        week&apos;s work add up.
                    </p>
                    <Link href="#library">
                        <button className="inline-block font-bold text-xs font-inter rounded-md bg-[#C2F800] text-black px-6 py-3 transition-all duration-200 hover:bg-[#d4ff33] hover:scale-105 active:scale-95">
                            BROWSE WORKOUTS
                        </button>
                    </Link>
                </div>
                <Image src={heroImage} alt="Hero image."></Image>
            </div>
        </section>
    );
};

export default HeroSection;
