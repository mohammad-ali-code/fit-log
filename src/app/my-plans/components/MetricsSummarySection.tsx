"use client";

import { WorkoutContext } from "@/contexts/WorkoutProvider";
import React, { use } from "react";

const MetricsSummarySection = () => {
    const { workoutPlan, workoutSaves, selectedTab } = use(WorkoutContext);

    const selectedWorkouts =
        selectedTab === "todaysPlan" ? workoutPlan : workoutSaves;

    const exercisesCount = selectedWorkouts.length;
    const totalMinutes = selectedWorkouts.reduce(
        (accumulator, selectedWorkout) =>
            (accumulator += selectedWorkout.duration),
        0,
    );
    const calorieBurnCount = selectedWorkouts.reduce(
        (accumulator, selectedWorkout) =>
            (accumulator += selectedWorkout.caloriesBurned),
        0,
    );

    return (
        <>
            <div className="space-y-1 px-8">
                <h3 className="font-inter text-xs text-[#8A92A0]">Exercises</h3>
                <p className="font-oswald font-bold text-4xl text-[#CCFF00]">
                    {exercisesCount}
                </p>
            </div>
            <div className="space-y-1 border-l border-[#232732] px-8">
                <h3 className="font-inter text-xs text-[#8A92A0]">Minutes</h3>
                <p className="font-oswald font-bold text-4xl text-white">
                    {totalMinutes}
                </p>
            </div>
            <div className="space-y-1 border-l border-[#232732] px-8">
                <h3 className="font-inter text-xs text-[#8A92A0]">Calories</h3>
                <p className="font-oswald font-bold text-4xl text-white">
                    {calorieBurnCount}
                </p>
            </div>
        </>
    );
};

export default MetricsSummarySection;
