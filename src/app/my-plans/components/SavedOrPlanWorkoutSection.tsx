"use client";

import { use } from "react";
import NothingHereYet from "./NothingHereYet";
import { WorkoutContext } from "@/contexts/WorkoutProvider";
import SavedOrPlanWorkoutCard from "./SavedOrPlanWorkoutCard";
import Workout from "@/types/workout";

const SavedOrPlanWorkoutSection = () => {
    const { workoutPlan, workoutSaves, selectedTab, sort } =
        use(WorkoutContext);

    const selectedWorkouts =
        selectedTab === "todaysPlan" ? workoutPlan : workoutSaves;

    const sortWorkouts = (workouts: Workout[]) => {
        const sortedWorkouts = [...workouts];

        if (sort === "duration") {
            sortedWorkouts.sort((a, b) => b.duration - a.duration);
        } else if (sort === "calories") {
            sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (sort === "rating") {
            sortedWorkouts.sort((a, b) => b.rating - a.rating);
        }

        return sortedWorkouts;
    };

    const sortedWorkouts = sortWorkouts(selectedWorkouts);

    if (!selectedWorkouts.length) {
        return <NothingHereYet></NothingHereYet>;
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            {sortedWorkouts.map((selectedWorkout, index) => (
                <SavedOrPlanWorkoutCard
                    key={index}
                    selectedWorkout={selectedWorkout}></SavedOrPlanWorkoutCard>
            ))}
        </div>
    );
};

export default SavedOrPlanWorkoutSection;
