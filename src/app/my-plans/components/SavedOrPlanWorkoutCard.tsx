import Workout from "@/types/workout";
import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { PiFireSimpleFill } from "react-icons/pi";
import DeleteWorkoutButton from "./DeleteWorkoutButton";
import MarkAsDoneButton from "./MarkAsDoneButton";

interface SavedOrPlanWorkoutCardPropsType {
    selectedWorkout: Workout;
}

const SavedOrPlanWorkoutCard = ({
    selectedWorkout,
}: SavedOrPlanWorkoutCardPropsType) => {
    return (
        <div className="flex sm:justify-between sm:items-center flex-col sm:flex-row gap-4 rounded-2xl bg-[#14171E] border border-[#232732] p-4">
            <div className="flex items-center gap-4">
                <div className="h-20 w-36 shrink-0 overflow-hidden">
                    <Image
                        src={selectedWorkout.image}
                        alt={`${selectedWorkout.name} image`}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover rounded-xl"
                    />
                </div>
                <div className="space-y-1">
                    <h4 className="font-oswald font-bold text-white">
                        {selectedWorkout.name}
                    </h4>
                    <p className="font-inter font-semibold text-xs text-[#8A92A0]">
                        {selectedWorkout.equipment}
                    </p>
                    <div className="font-inter text-xs text-[#D1D5DB] flex items-center gap-2.5">
                        <div className="flex items-center gap-1">
                            <MdAccessTime className="text-[#CCFF00]" />
                            <span>{selectedWorkout.duration} min</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <PiFireSimpleFill className="text-[#CCFF00]" />
                            <span>{selectedWorkout.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaRegStar className="text-[#CCFF00]" />
                            <span>{selectedWorkout.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-inter flex items-center flex-row sm:flex-col md:flex-row gap-3 text-xs">
                <Link href={`/workout-details/${selectedWorkout.id}`}>
                    <button className="flex justify-center items-center gap-3 rounded-xl font-medium border-2 border-[#374151] text-white px-4.5 py-2 transition-all duration-200 hover:scale-105 active:scale-95">
                        <span>View Details</span>
                    </button>
                </Link>
                <MarkAsDoneButton
                    selectedWorkout={selectedWorkout}></MarkAsDoneButton>
                <DeleteWorkoutButton
                    selectedWorkout={selectedWorkout}></DeleteWorkoutButton>
            </div>
        </div>
    );
};

export default SavedOrPlanWorkoutCard;
