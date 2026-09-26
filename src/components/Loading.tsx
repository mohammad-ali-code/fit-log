import { FaDumbbell } from "react-icons/fa";

interface LoadingProps {
    message?: string;
    className?: string;
}

const Loading = ({
    message = "LOADING WORKOUTS",
    className = "",
}: LoadingProps) => {
    return (
        <section
            className={`flex min-h-100 w-full items-center justify-center ${className}`}>
            <div className="flex flex-col items-center">
                {/* Animated dumbbell */}
                <div className="relative mb-7 flex h-20 w-20 items-center justify-center">
                    {/* Glow */}
                    <div className="absolute h-14 w-14 rounded-full bg-[#C2F800]/10 blur-2xl animate-pulse" />

                    {/* Orbit */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#2A2E39] animate-[spin_6s_linear_infinite]" />

                    {/* Dumbbell */}
                    <FaDumbbell className="relative z-10 text-3xl text-[#C2F800] animate-lift" />
                </div>

                {/* Loading text */}
                <div className="flex items-center gap-2">
                    <span className="font-oswald text-lg font-bold tracking-wide text-white">
                        {message}
                    </span>

                    <span className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C2F800] animate-loading-dot" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C2F800] animate-loading-dot [animation-delay:150ms]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C2F800] animate-loading-dot [animation-delay:300ms]" />
                    </span>
                </div>

                <p className="mt-2 font-inter text-xs text-[#6B7280]">
                    GETTING THINGS READY
                </p>
            </div>
        </section>
    );
};

export default Loading;
