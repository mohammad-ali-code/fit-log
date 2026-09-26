"use client";

import Workout from "@/types/workout";
import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useState,
} from "react";

interface WorkoutProviderTypes {
    workoutPlan: Workout[];
    setWorkoutPlan: Dispatch<SetStateAction<Workout[]>>;
    workoutSaves: Workout[];
    setWorkoutSaves: Dispatch<SetStateAction<Workout[]>>;
    selectedTab: "todaysPlan" | "savedPlan";
    setSelectedTab: Dispatch<SetStateAction<"todaysPlan" | "savedPlan">>;
    sort: "duration" | "calories" | "rating";
    setSort: Dispatch<SetStateAction<"duration" | "calories" | "rating">>;
}

interface WorkoutProviderProps {
    children: React.ReactNode;
}

export const WorkoutContext = createContext<WorkoutProviderTypes>({
    workoutPlan: [],
    setWorkoutPlan: () => {},
    workoutSaves: [],
    setWorkoutSaves: () => {},
    selectedTab: "todaysPlan",
    setSelectedTab: () => {},
    sort: "duration",
    setSort: () => {},
});

const WorkoutProvider = ({ children }: WorkoutProviderProps) => {
    const [workoutPlan, setWorkoutPlan] = useState<Workout[]>([]);
    const [workoutSaves, setWorkoutSaves] = useState<Workout[]>([]);
    const [selectedTab, setSelectedTab] = useState<"todaysPlan" | "savedPlan">(
        "todaysPlan",
    );
    const [sort, setSort] = useState<"duration" | "calories" | "rating">(
        "duration",
    );

    const sharedValues = {
        workoutPlan,
        setWorkoutPlan,
        workoutSaves,
        setWorkoutSaves,
        selectedTab,
        setSelectedTab,
        sort,
        setSort,
    };

    return (
        <WorkoutContext.Provider value={sharedValues}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;
