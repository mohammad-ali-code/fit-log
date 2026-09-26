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
}

interface WorkoutProviderProps {
    children: React.ReactNode;
}

export const WorkoutContext = createContext<WorkoutProviderTypes>({
    workoutPlan: [],
    setWorkoutPlan: () => {},
    workoutSaves: [],
    setWorkoutSaves: () => {},
});

const WorkoutProvider = ({ children }: WorkoutProviderProps) => {
    const [workoutPlan, setWorkoutPlan] = useState<Workout[]>([]);
    const [workoutSaves, setWorkoutSaves] = useState<Workout[]>([]);

    const sharedValues = {
        workoutPlan,
        setWorkoutPlan,
        workoutSaves,
        setWorkoutSaves,
    };

    return (
        <WorkoutContext.Provider value={sharedValues}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;
