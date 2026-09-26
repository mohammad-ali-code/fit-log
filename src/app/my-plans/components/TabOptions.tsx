"use client";

import { WorkoutContext } from "@/contexts/WorkoutProvider";
import React, { use } from "react";

const TabOptions = () => {
    const { selectedTab, setSelectedTab } = use(WorkoutContext);

    const handleSelectedTabChange = (tabName: "todaysPlan" | "savedPlan") => {
        setSelectedTab(tabName);
    };

    return (
        <div className="flex items-center gap-1 bg-[#151921] border-2 border-[#232732] rounded-xl p-1">
            <button
                onClick={() => handleSelectedTabChange("todaysPlan")}
                className={`px-4 py-1.5 rounded-lg border-2 transition-all duration-200 ease-out cursor-pointer
                    active:scale-95
                    ${
                        selectedTab === "todaysPlan"
                            ? "bg-[#1F242D] border-[#2B303D] text-white shadow-sm"
                            : "border-transparent text-gray-400 hover:bg-[#1B2029] hover:text-white"
                    }`}>
                Today’s Plan
            </button>
            <button
                onClick={() => handleSelectedTabChange("savedPlan")}
                className={`px-4 py-1.5 rounded-lg border-2 transition-all duration-200 ease-out cursor-pointer
                    active:scale-95
                    ${
                        selectedTab === "savedPlan"
                            ? "bg-[#1F242D] border-[#2B303D] text-white shadow-sm"
                            : "border-transparent text-gray-400 hover:bg-[#1B2029] hover:text-white"
                    }`}>
                Saved
            </button>
        </div>
    );
};

export default TabOptions;
