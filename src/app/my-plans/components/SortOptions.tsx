"use client";
import { WorkoutContext } from "@/contexts/WorkoutProvider";
import { ChangeEvent, use } from "react";

type SortOption = "duration" | "calories" | "rating";

type sortElement = ChangeEvent<HTMLSelectElement>;

const SortOptions = () => {
    const { sort, setSort } = use(WorkoutContext);

    const options: { label: string; value: SortOption }[] = [
        { label: "Duration", value: "duration" },
        { label: "Calories", value: "calories" },
        { label: "Rating", value: "rating" },
    ];

    const handleSortChange = (e: sortElement) => {
        const sortValue = e.target.value as SortOption;
        setSort(sortValue);
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Sort By</span>

            <select
                value={sort}
                onChange={(e) => handleSortChange(e)}
                className="rounded-md border-2 border-[#232732] bg-[#13161D] px-3 py-2 text-sm outline-none">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortOptions;
