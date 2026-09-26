"use client";

import { WorkoutContext } from "@/contexts/WorkoutProvider";
import Workout from "@/types/workout";
import Link from "next/link";
import React, { use } from "react";

const NavbarWorkoutLinks = () => {
    const { workoutPlan, workoutSaves, setSelectedTab } = use(WorkoutContext);

    return (
        <>
            <Link
                onClick={() => setSelectedTab("todaysPlan")}
                href="/my-plans"
                className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
                <span className="font-medium text-[#D1D5DB]">Plan</span>
                <span className="text-black bg-[#C2F800] rounded-full font-bold px-2 pb-px">
                    {workoutPlan.length}
                </span>
            </Link>
            <Link
                onClick={() => setSelectedTab("savedPlan")}
                href="/my-plans"
                className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
                <span className="font-medium text-[#9CA3AF]">Saved</span>
                <span className="border-3 border-[#2D313B] rounded-full font-bold px-2 pb-px">
                    {workoutSaves.length}
                </span>
            </Link>
        </>
    );
};

export default NavbarWorkoutLinks;
