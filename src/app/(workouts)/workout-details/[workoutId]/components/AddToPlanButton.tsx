"use client";
import { WorkoutContext } from "@/contexts/WorkoutProvider";
import Workout from "@/types/workout";
import React, { use } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { Slide, toast } from "react-toastify";

interface AddToPlanButtonPropsType {
    workout: Workout;
}

const AddToPlanButton = ({ workout }: AddToPlanButtonPropsType) => {
    const { workoutPlan, setWorkoutPlan } = use(WorkoutContext);

    const alreadyAdded = workoutPlan.some(
        (singlePlan) => singlePlan.id === workout.id,
    );

    const handleAddToPlan = () => {
        if (alreadyAdded) {
            toast.error("Workout already in today's Plan.", {
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
            setWorkoutPlan((prev) => [...prev, workout]);
            toast.success("Workout added to today's Plan.", {
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
            onClick={handleAddToPlan}
            className="flex justify-center items-center gap-3 rounded-xl font-semibold text-black bg-[#CCFF00] px-6 py-3 transition-all duration-200 hover:bg-[#d4ff33] hover:scale-105 active:scale-95">
            <LuCalendarPlus2 />
            <span>Add to today&apos;s plan</span>
        </button>
    );
};

export default AddToPlanButton;
