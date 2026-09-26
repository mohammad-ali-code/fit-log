import LibrarySectionCard from "./LibrarySectionCard";
import Workout from "@/types/workout";

const getWorkouts = async (): Promise<Workout[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
};


const LibrarySectionGrid = async () => {
    const workouts = await getWorkouts();

    return (
        <div className="grid grid-cols-3 gap-6">
            {workouts.map((workout: Workout) => (
                <LibrarySectionCard
                    key={workout.id}
                    workout={workout}></LibrarySectionCard>
            ))}
        </div>
    );
};

export default LibrarySectionGrid;
