"use client";
import { WorkoutContext } from "@/contexts/WorkoutProvider";
import Workout from "@/types/workout";
import React, { use } from "react";
import { LuBookmark } from "react-icons/lu";
import { Slide, toast } from "react-toastify";

interface SaveForLaterButtonPropsType {
    workout: Workout;
}

const SaveForLaterButton = ({ workout }: SaveForLaterButtonPropsType) => {
    const { workoutSaves, setWorkoutSaves } = use(WorkoutContext);

    const alreadyAdded = workoutSaves.some(
        (singleSave) => singleSave.id === workout.id,
    );

    const handleWorkoutSave = () => {
        if (alreadyAdded) {
            toast.error("Workout already to Saved.", {
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
        }

        if (!alreadyAdded) {
            setWorkoutSaves((prev) => [...prev, workout]);
            toast.success("Workout added in Saved.", {
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
        }
    };

    return (
        <button
            onClick={handleWorkoutSave}
            className="flex justify-center items-center gap-3 rounded-xl font-medium border-2 border-[#374151] text-white px-6 py-3 transition-all duration-200 hover:scale-105 active:scale-95">
            <LuBookmark />
            <span>Save for later</span>
        </button>
    );
};

export default SaveForLaterButton;
