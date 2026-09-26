import React, { Suspense } from "react";
import LibrarySectionGrid from "./LibrarySectionGrid";
import Loading from "@/components/Loading";

const LibrarySection = () => {
    return (
        <section id="library" className="space-y-8">
            <div className="space-y-1">
                <h2 className="font-oswald font-bold text-white text-3xl">
                    THE LIBRARY
                </h2>
                <p className="font-inter text-sm text-[#9CA3AF]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            <Suspense fallback={<Loading></Loading>}>
                <LibrarySectionGrid></LibrarySectionGrid>
            </Suspense>
        </section>
    );
};

export default LibrarySection;
