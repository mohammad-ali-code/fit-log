import MuscleBadge from "@/components/MuscleBadge";
import Workout from "@/types/workout";
import Image from "next/image";
import AddToPlanButton from "./components/AddToPlanButton";
import SaveForLaterButton from "./components/SaveForLaterButton";

interface WorkoutDetailsPropsType {
    params: Promise<{ workoutId: string }>;
}

const getWorkout = async (workoutId: string): Promise<Workout> => {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${workoutId}`,
    );
    return res.json();
};

const WorkoutDetails = async ({ params }: WorkoutDetailsPropsType) => {
    const { workoutId } = await params;
    const workout: Workout = await getWorkout(workoutId);

    return (
        <main className="max-w-7xl w-full mx-auto px-6 py-16 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                <div>
                    <Image
                        src={workout.image}
                        alt={`${workout.name} image`}
                        width={500}
                        height={500}
                        className="rounded-2xl h-full w-full object-cover"></Image>
                </div>
                <div>
                    <h2 className="font-oswald font-bold text-white text-4xl mb-3">
                        {workout.name}
                    </h2>
                    <p className="font-inter text-[#9CA3AF] mb-5">
                        {workout.description}
                    </p>
                    <div className="space-x-2.5 mb-7">
                        {workout.muscleGroups.map((muscle, index) => (
                            <MuscleBadge key={index} muscle={muscle} />
                        ))}
                    </div>
                    <div className="font-inter bg-[#151922] border border-[#232834] rounded-2xl mb-8.5">
                        <div className="flex justify-between items-center px-6 py-3.5 border-b border-[#232834]">
                            <span>EQUIPMENT</span>
                            <span>{workout.equipment}</span>
                        </div>
                        <div className="flex justify-between items-center px-6 py-3.5 border-b border-[#232834]">
                            <span>DIFFICULTY</span>
                            <span>{workout.difficulty}</span>
                        </div>
                        <div className="flex justify-between items-center px-6 py-3.5 border-b border-[#232834]">
                            <span>SETS</span>
                            <span>{workout.sets}</span>
                        </div>
                        <div className="flex justify-between items-center px-6 py-3.5 border-b border-[#232834]">
                            <span>REPS</span>
                            <span>{workout.reps}</span>
                        </div>
                        <div className="flex justify-between items-center px-6 py-3.5 border-b border-[#232834]">
                            <span>DURATION</span>
                            <span>{workout.duration} min</span>
                        </div>
                        <div className="flex justify-between items-center px-6 py-3.5 border-b border-[#232834]">
                            <span>CALORIES</span>
                            <span>{workout.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex justify-between items-center px-6 py-3.5">
                            <span>RATING</span>
                            <span>{workout.rating}</span>
                        </div>
                    </div>
                    <div className="font-inter space-y-4 mb-9">
                        <h3 className="font-extrabold text-white">
                            INSTRUCTIONS
                        </h3>
                        <ol className="space-y-3">
                            {workout.instructions.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="text-[#D1D5DB] text-sm">
                                    <span className="text-[#9CA3AF]">
                                        {index + 1}.
                                    </span>{" "}
                                    {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="font-inter flex gap-4">
                        <AddToPlanButton workout={workout}></AddToPlanButton>
                        <SaveForLaterButton workout={workout}></SaveForLaterButton>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WorkoutDetails;
