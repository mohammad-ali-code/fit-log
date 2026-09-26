import { WorkoutContext } from "@/contexts/WorkoutProvider";
import Workout from "@/types/workout";
import React, { use } from "react";
import { RxCross2 } from "react-icons/rx";
import { Slide, toast } from "react-toastify";

interface DeleteWorkoutButtonPropsType {
    selectedWorkout: Workout;
}

const DeleteWorkoutButton = ({
    selectedWorkout,
}: DeleteWorkoutButtonPropsType) => {
    const { setWorkoutPlan, setWorkoutSaves, selectedTab } =
        use(WorkoutContext);

    const selectedWorkoutFunction =
        selectedTab === "todaysPlan" ? setWorkoutPlan : setWorkoutSaves;

    const handleDeleteWorkout = () => {
        selectedWorkoutFunction((previousWorkouts) =>
            previousWorkouts.filter(
                (workout) => workout.id !== selectedWorkout.id,
            ),
        );
        toast.success(
            `Workout deleted ${selectedWorkout.name} from ${selectedTab === "todaysPlan" ? "Today's Plan" : "Saved"}.`,
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
                style: {
                    background: "#151922",
                },
            },
        );
    };

    return (
        <button
            onClick={handleDeleteWorkout}
            className="rounded-lg border-2 border-transparent p-1 text-2xl text-[#6B7280] transition-all duration-200 hover:border-[#374151] hover:text-white active:scale-95">
            <RxCross2 />
        </button>
    );
};

export default DeleteWorkoutButton;
