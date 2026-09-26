import Link from "next/link";

const NothingHereYet = () => {
    return (
        <div className="flex text-center justify-center items-center flex-col rounded-xl border-2 border-dashed border-[rgba(255,255,255,0.15)] py-24 p-4 mx-1.5 space-y-6">
            <div className="space-y-2">
                <h3 className="font-oswald text-xl font-bold text-white">
                    NOTHING HERE YET
                </h3>
                <p className="font-inter text-xs text-[#A1A1AA]">
                    Browse the library and add a lift to get today moving.
                </p>
            </div>
            <Link href="/#library">
                <button className="inline-block font-bold text-xs font-inter rounded-full bg-[#C2F800] text-black px-6 py-3 transition-all duration-200 hover:bg-[#d4ff33] hover:scale-105 active:scale-95">
                    Go to workouts
                </button>
            </Link>
        </div>
    );
};

export default NothingHereYet;
