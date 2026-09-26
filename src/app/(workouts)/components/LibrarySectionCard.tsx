import Workout from "@/types/workout";
import Image from "next/image";
import { PiFireSimpleFill } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import MuscleBadge from "@/components/MuscleBadge";

interface LibrarySectionCard {
    workout: Workout;
}

const LibrarySectionCard = ({ workout }: LibrarySectionCard) => {
    return (
        <Link href={`/workout-details/${workout.id}`}>
            <div className="group cursor-pointer overflow-hidden rounded-2xl bg-[#15171D] border border-[#2A2E39] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#C2F800] hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={`${workout.name} image`}
                        width={500}
                        height={500}
                        className="h-full w-full rounded-t-2xl object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </div>

                {/* Content */}
                <div className="rounded-b-2xl p-6 space-y-4">
                    <div>
                        <div className="mb-3 space-x-2">
                            {workout.muscleGroups.map((muscle, index) => (
                                <MuscleBadge
                                    key={index}
                                    muscle={muscle}
                                />
                            ))}
                        </div>

                        <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#E5E7EB]">
                            {workout.name}
                        </h3>

                        <p className="mt-1 text-xs text-[#9CA3AF]">
                            {workout.equipment}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 border-t border-[#20242E] pt-3 font-inter text-xs text-[#9CA3AF]">
                        <div className="flex items-center gap-1">
                            <MdAccessTime />
                            <span>{workout.duration} min</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <PiFireSimpleFill />
                            <span>{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <FaRegStar />
                            <span>{workout.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibrarySectionCard;
