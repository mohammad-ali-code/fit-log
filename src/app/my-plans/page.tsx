import React from "react";
import MetricsSummarySection from "./components/MetricsSummarySection";
import TabOptions from "./components/TabOptions";
import SortOptions from "./components/SortOptions";
import SavedOrPlanWorkoutSection from "./components/SavedOrPlanWorkoutSection";

const MyPlans = () => {
    return (
        <main className="max-w-7xl w-full mx-auto px-6 py-16 space-y-6">
            <section className="space-y-2">
                <h2 className="font-oswald font-bold text-3xl text-white">
                    MY PLAN
                </h2>
                <p className="font-inter text-sm text-[#8A92A0]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </section>
            <section className="grid grid-cols-3 bg-[#13161D] border-2 border-[#232732] p-8 rounded-2xl">
                <MetricsSummarySection></MetricsSummarySection>
            </section>
            <section className="flex justify-between items-center">
                <TabOptions></TabOptions>
                <SortOptions></SortOptions>
            </section>
            <section>
                <SavedOrPlanWorkoutSection></SavedOrPlanWorkoutSection>
            </section>
        </main>
    );
};

export default MyPlans;
