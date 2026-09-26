"use client";
import { WorkoutContext } from "@/contexts/WorkoutProvider";
import Workout from "@/types/workout";
import { use, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Slide, toast } from "react-toastify";

interface MarkAsDoneButtonPropsType {
    selectedWorkout: Workout;
}

const MarkAsDoneButton = ({ selectedWorkout }: MarkAsDoneButtonPropsType) => {
    const [markedAsDone, setMarkedAsDone] = useState(false);
    const { selectedTab } = use(WorkoutContext);

    if (selectedTab === "savedPlan") {
        return;
    }

    const handleMarkAsDone = () => {
        toast.success(`Marked ${selectedWorkout.name} as done.`, {
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
        });
        setMarkedAsDone(true);
    };

    return (
        <button
            onClick={handleMarkAsDone}
            disabled={markedAsDone}
            className={`flex justify-center items-center gap-1 rounded-xl font-semibold text-black px-4.5 py-2 transition-all duration-200 ${
                markedAsDone
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#CCFF00] hover:bg-[#d4ff33] hover:scale-105 active:scale-95"
            }`}>
            <FaCheck />
            <span>Mark as Done</span>
        </button>
    );
};

export default MarkAsDoneButton;
